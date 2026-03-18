import { z } from "zod";

export type Language = string;

export interface LanguageConfig {
  name: string;
  words: string[];
  noLazyMode?: boolean;
  bcp47?: string;
}

export interface LanguageObject {
  name: string;
  words: string[];
  noLazyMode?: boolean;
  bcp47?: string;
  ligatures?: boolean;
  rightToLeft?: boolean;
  additionalAccents?: boolean | string[][];
  orderedByFrequency?: boolean;
}

export const languages: Record<Language, LanguageConfig> = {};
export const LanguageSchema = z.any();
export const LanguageObjectSchema = z.any();
export const LanguageConfigSchema = z.any();
