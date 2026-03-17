import { z } from "zod";

export type Mode = "time" | "words" | "quote" | "zen" | "custom";

export type Difficulty = "normal" | "expert" | "master";

export type Mode2<M extends Mode> = M extends "time"
  ? "15" | "30" | "60" | "120"
  : M extends "words"
  ? "10" | "25" | "50" | "100"
  : M extends "quote"
  ? number
  : M extends "zen"
  ? "zen"
  : M extends "custom"
  ? "custom"
  : never;

export interface PersonalBest {
  language: string;
  difficulty: Difficulty;
  lazyMode?: boolean;
  punctuation: boolean;
  numbers: boolean;
  wpm: number;
  acc: number;
  raw: number;
  timestamp: number;
  consistency?: number;
}

export interface PersonalBests {
  time: Record<string, PersonalBest[]>;
  words: Record<string, PersonalBest[]>;
  quote: Record<string, PersonalBest[]>;
  zen: Record<string, PersonalBest[]>;
  custom: Record<string, PersonalBest[]>;
}

export const ModeSchema = z.any();
export const Mode2Schema = z.any();
export const DifficultySchema = z.any();
export const PersonalBestSchema = z.any();
export const PersonalBestsSchema = z.any();
