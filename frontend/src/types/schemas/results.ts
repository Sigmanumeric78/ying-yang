import { z } from "zod";
import { Mode } from "./shared";

export interface CompletedEventCustomText {
  textLen: number;
  mode: string;
  pipeDelimiter: boolean;
  limit: {
    mode: string;
    value: number;
  };
}

export interface CompletedEvent {
  wpm: number;
  rawWpm: number;
  acc: number;
  correctChars?: number;
  incorrectChars?: number;
  missedChars?: number;
  extraChars?: number;
  chartData: "toolong" | number[] | { wpm: number[]; burst: number[]; err: number[] };
  keySpacing: "toolong" | number[];
  keyDuration: "toolong" | number[];
  mode: Mode;
  mode2: string | number;
  punctuation: boolean;
  numbers: boolean;
  language: string;
  difficulty: "normal" | "expert" | "master";
  lazyMode: boolean;
  blindMode: boolean;
  tags: string[];
  testDuration: number;
  afkDuration: number;
  funbox: string[];
  bailedOut: boolean;
  charStats: [number, number, number, number];
  charTotal?: number;
  restartCount: number;
  incompleteTestSeconds: number;
  incompleteTests?: Array<{ acc: number; seconds: number }>;
  timestamp: number;
  hash?: string;
  uid?: string;
  customText?: CompletedEventCustomText;
  quoteLength?: number;
  keyOverlap?: number;
  lastKeyToEnd?: number;
  startToFirstKey?: number;
  consistency?: number;
  wpmConsistency?: number;
  keyConsistency?: number;
  stopOnLetter?: boolean;
  challenge?: string;
}

export interface Result<M extends Mode = Mode> {
  _id?: string;
  id?: string;
  wpm: number;
  rawWpm?: number;
  acc: number;
  mode: M;
  mode2: string | number;
  timestamp: number;
  testDuration?: number;
  afkDuration?: number;
  consistency?: number;
  keyConsistency?: number;
  chartData?: "toolong" | number[];
  keySpacing?: "toolong" | number[];
  keyDuration?: "toolong" | number[];
  punctuation?: boolean;
  numbers?: boolean;
  language?: string;
  difficulty?: "normal" | "expert" | "master";
  lazyMode?: boolean;
  blindMode?: boolean;
  tags?: string[];
  funbox?: string[];
  bailedOut?: boolean;
  charStats?: [number, number, number, number];
  restartCount?: number;
  incompleteTestSeconds?: number;
  quoteLength?: number;
}

export interface CustomTextSettings {
  text: string[] | string;
  isWordRandom?: boolean;
  isTimeRandom?: boolean;
  mode?: string;
  pipeDelimiter?: boolean;
  limit?: {
    mode: string;
    value: number;
  };
}

export interface ChartData {
  wpm: number[];
  errors: number[];
  burst?: number[];
  err?: number[];
}

export interface XpBreakdown {
  base: number;
  fullAccuracy: number;
  quote: number;
  dailyBonus?: number;
  streak?: number;
  corrected?: number;
  total: number;
  accPenalty?: number;
  configMultiplier?: number;
  daily?: number;
  funbox?: number;
  incomplete?: number;
  numbers?: number;
  punctuation?: number;
}

export interface IncompleteTest {
  acc: number;
  seconds: number;
}

export const CompletedEventSchema = z.any();
export const ResultSchema = z.any();
export const CustomTextSettingsSchema = z.any();
export const CustomTextLimitModeSchema = z.any();
export const CustomTextModeSchema = z.any();
export const ChartDataSchema = z.any();
