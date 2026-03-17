import { z } from "zod";
import type { Difficulty } from "./shared";

export type { Difficulty };

export interface Config {
  theme: string;
  themeLight: string;
  themeDark: string;
  mode: "time" | "words" | "quote" | "zen" | "custom";
  time: number;
  words: number;
  quoteLength: number[];
  language: string;
  fontSize: number;
  fontFamily: string;
  smoothCaret: boolean;
  caretStyle: "bar" | "block" | "outline" | "underline" | "carrot";
  punctuation: boolean;
  numbers: boolean;
  restartOnError: boolean;
  blindMode: boolean;
  quickRestart: "off" | "esc" | "tab";
  confidenceMode: "off" | "on";
  timerStyle: "bar" | "text" | "mini";
  colorThemeMode: "blackOnWhite" | "whiteOnBlack" | "custom";
}

export type ConfigValue = string | number | boolean | number[];
export type ConfigKey = keyof Config;

export const ConfigSchema = z.any();
export const ConfigValueSchema = z.any();
export const ConfigKeySchema = z.any();
export const ConfigGroupNameSchema = z.any();
export const QuoteLengthSchema = z.any();
export const QuoteLengthConfigSchema = z.any();
export const TimerColorSchema = z.any();
export const TimerOpacitySchema = z.any();
export const CaretStyleSchema = z.any();
export const FunboxNameSchema = z.any();
export const HighlightModeSchema = z.any();
export const KeymapLayoutSchema = z.any();
export const LayoutSchema = z.any();
export const AccountChartSchema = z.any();
export const CustomBackgroundFilterSchema = z.any();
export const CustomBackgroundSizeSchema = z.any();
export const CustomThemeColorsSchema = z.any();
export const FunboxSchema = z.any();
