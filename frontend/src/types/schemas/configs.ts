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
