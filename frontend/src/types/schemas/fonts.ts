export type FontName = string;

export type KnownFontName =
  | "Roboto_Mono"
  | "JetBrains_Mono"
  | "Fira_Code"
  | "Source_Code_Pro"
  | "Ubuntu_Mono"
  | "Noto_Sans_Mono"
  | "IBM_Plex_Mono"
  | "Space_Mono"
  | "Inconsolata"
  | "DM_Mono"
  | "Cascadia_Code"
  | "Menlo"
  | "Monaco"
  | "Consolas"
  | "Noto_Naskh_Arabic";

export interface FontConfig {
  name: FontName;
  fileName?: string;
  weight?: number;
  systemFont?: boolean;
}

export const Fonts: Record<KnownFontName, FontConfig> = {} as Record<KnownFontName, FontConfig>;
