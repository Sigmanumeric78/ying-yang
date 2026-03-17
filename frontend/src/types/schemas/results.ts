import { z } from "zod";
import { Mode } from "./shared";

export interface CompletedEvent {
  wpm: number;
  rawWpm: number;
  acc: number;
  correctChars: number;
  incorrectChars: number;
  missedChars: number;
  extraChars: number;
  chartData: "toolong" | number[];
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
  restartCount: number;
  incompleteTestSeconds: number;
  timestamp: number;
  hash?: string;
}

export interface Result {
  id: string;
  wpm: number;
  acc: number;
  mode: Mode;
  timestamp: number;
}

export interface CustomTextSettings {
  text: string;
  isWordRandom: boolean;
  isTimeRandom: boolean;
}

export interface ChartData {
  wpm: number[];
  errors: number[];
}

export const CompletedEventSchema = z.any();
export const ResultSchema = z.any();
export const CustomTextSettingsSchema = z.any();
export const CustomTextLimitModeSchema = z.any();
export const CustomTextModeSchema = z.any();
export const ChartDataSchema = z.any();
