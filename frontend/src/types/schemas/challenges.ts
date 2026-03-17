export interface Challenge {
  id: string;
  name: string;
  description?: string;
}

export const ChallengeSchema = { parse: (v: unknown) => v };
