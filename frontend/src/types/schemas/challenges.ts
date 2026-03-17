import { z } from "zod";

export interface Challenge {
  id: string;
  name: string;
  description?: string;
}

export const ChallengeSchema = z.any();
