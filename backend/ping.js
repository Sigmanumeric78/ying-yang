require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('ERROR: Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function pingSupabase() {
  console.log('Testing Supabase connection...');
  console.log('SUPABASE_URL:', supabaseUrl ? '✓ Set' : '✗ Missing');

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, created_at')
      .limit(5);

    if (error) {
      console.error('Query error:', error.message);
      console.error('Details:', error);
      process.exit(1);
    }

    console.log('✓ Connection successful!');
    console.log(`✓ Found ${data?.length || 0} profiles:`);
    
    if (data && data.length > 0) {
      data.forEach((profile, i) => {
        console.log(`  ${i + 1}. ${profile.username || profile.id}`);
      });
    } else {
      console.log('  (No profiles found - table may be empty)');
    }

    process.exit(0);
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  }
}

pingSupabase();
