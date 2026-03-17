export type Language = string;

export interface LanguageConfig {
  name: string;
  words: string[];
  noLazyMode?: boolean;
  bcp47?: string;
}

export const languages: Record<Language, LanguageConfig> = {};
