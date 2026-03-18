import { Language } from "@whitespaces/schemas/languages";

export const LanguageList: Language[] = [
  "english",
  "english_1k",
  "english_5k",
  "english_10k",
  "spanish",
  "french",
  "german",
  "portuguese",
  "italian",
  "russian",
  "chinese_traditional",
  "chinese_simplified",
  "japanese_hiragana",
  "japanese_katakana",
  "korean",
  "code_python",
  "code_javascript",
  "code_html",
  "code_css",
];

export const LanguageGroups: Record<string, Language[]> = {
  english: ["english", "english_1k", "english_5k", "english_10k"],
  spanish: ["spanish"],
  french: ["french"],
  german: ["german"],
  portuguese: ["portuguese"],
  italian: ["italian"],
  russian: ["russian"],
  chinese: ["chinese_traditional", "chinese_simplified"],
  japanese: ["japanese_hiragana", "japanese_katakana"],
  korean: ["korean"],
  code: ["code_python", "code_javascript", "code_html", "code_css"],
};

export type LanguageGroupName = keyof typeof LanguageGroups;
export const LanguageGroupNames: LanguageGroupName[] = Array.from(
  Object.keys(LanguageGroups),
);

export function getGroupForLanguage(
  language: Language,
): LanguageGroupName | undefined {
  return LanguageGroupNames.find((group) => group.includes(language));
}
