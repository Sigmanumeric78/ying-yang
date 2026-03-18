import { z } from "zod";

export interface Challenge {
  id: string;
  name: string;
  description?: string;
  display?: string;
  message?: string;
  type?: string;
  autoRole?: string;
  parameters?: Record<string, any>;
  requirements?: {
    mode?: string;
    language?: string;
    difficulty?: string;
    wpm?: { min?: number; max?: number; exact?: number };
    acc?: { min?: number; max?: number; exact?: number };
    raw?: { min?: number; max?: number; exact?: number };
    consistency?: { min?: number; max?: number; exact?: number };
    time?: { min?: number; max?: number; exact?: number };
    words?: { min?: number; max?: number; exact?: number };
    funbox?: string;
    punctuation?: boolean;
    numbers?: boolean;
    [key: string]: unknown;
  };
}

export const ChallengeSchema = z.any();
