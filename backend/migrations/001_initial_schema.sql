-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PROFILES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read any profile
CREATE POLICY "Profiles are publicly readable" ON public.profiles
  FOR SELECT USING (true);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Policy: Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Function to create a profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call the function on user creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- RESULTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS public.results (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  wpm DOUBLE PRECISION NOT NULL,
  raw_wpm DOUBLE PRECISION NOT NULL,
  accuracy DOUBLE PRECISION NOT NULL,
  character_stats JSONB NOT NULL,
  test_mode TEXT NOT NULL,
  test_settings JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on results
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read results
CREATE POLICY "Results are publicly readable" ON public.results
  FOR SELECT USING (true);

-- Policy: Authenticated users can insert their own results
CREATE POLICY "Users can insert own results" ON public.results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Allow guest results (user_id is null)
CREATE POLICY "Guests can insert results" ON public.results
  FOR INSERT WITH CHECK (user_id IS NULL);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_results_wpm ON public.results(wpm DESC);
CREATE INDEX IF NOT EXISTS idx_results_created_at ON public.results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_results_user_id ON public.results(user_id);
