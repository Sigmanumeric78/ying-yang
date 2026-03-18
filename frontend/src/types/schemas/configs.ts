import { z } from "zod";
import type { Difficulty } from "./shared";

export type { Difficulty };

export const SmoothCaretSchema = z.enum(["off", "slow", "medium", "fast"]);
export const CaretStyleSchema = z.enum(["default", "bar", "block", "outline", "underline", "carrot"]);
export const PaceCaretSchema = z.enum(["off", "average", "pb", "last", "daily", "custom"]);
export const PaceCaretStyleSchema = z.enum(["default", "bar", "block", "outline", "underline", "carrot"]);
export const QuickRestartSchema = z.enum(["off", "esc", "tab", "enter"]);
export const ConfidenceModeSchema = z.enum(["off", "on", "max"]);
export const TimerStyleSchema = z.enum(["off", "bar", "text", "mini"]);
export const LiveSpeedAccBurstStyleSchema = z.enum(["off", "text", "mini"]);
export const RandomThemeSchema = z.enum(["off", "on", "fav", "light", "dark", "custom"]);
export const TimerColorSchema = z.enum(["main", "sub", "text"]);
export const TimerOpacitySchema = z.enum(["0.25", "0.5", "0.75", "1"]);
export const HighlightModeSchema = z.enum(["off", "letter", "word"]);
export const KeymapModeSchema = z.enum(["off", "static", "react", "next"]);
export const KeymapStyleSchema = z.enum(["staggered", "alice", "matrix", "split", "split_matrix"]);
export const KeymapLegendStyleSchema = z.enum(["lowercase", "uppercase", "blank", "dynamic"]);
export const KeymapLayoutSchema = z.enum(["overrideSync", "qwerty", "dvorak", "colemak"]);
export const KeymapShowTopRowSchema = z.enum(["layout", "always", "never"]);
export const CustomBackgroundSizeSchema = z.enum(["cover", "contain", "max"]);
export const ShowAverageSchema = z.enum(["off", "speed", "acc", "both"]);
export const MonkeyPowerLevelSchema = z.enum(["off", "1", "2", "3", "4"]);
export const TypingSpeedUnitSchema = z.enum(["wpm", "cpm", "wps", "cps", "wph"]);
export const TapeModeSchema = z.enum(["off", "letter", "word"]);
export const TypedEffectSchema = z.enum(["keep", "fade", "remove"]);
export const PlayTimeWarningSchema = z.enum(["off", "5", "10", "15", "30"]);
export const StopOnErrorSchema = z.enum(["off", "word", "letter"]);
export const IndicateTyposSchema = z.enum(["off", "below", "replace"]);
export const OppositeShiftModeSchema = z.enum(["off", "on"]);
export const CompositionDisplaySchema = z.enum(["replace", "static"]);
export const MinWpmSchema = z.enum(["off", "custom"]);
export const MinAccSchema = z.enum(["off", "custom"]);
export const MinBurstSchema = z.enum(["off", "fixed", "flex"]);
export const PlaySoundOnClickSchema = z.enum(["off", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]);
export const PlaySoundOnErrorSchema = z.enum(["off", "1", "2", "3", "4"]);
export const SingleListCommandLineSchema = z.enum(["on", "manual"]);
export const DifficultySchema = z.enum(["normal", "expert", "master"]);
export const RepeatQuotesSchema = z.enum(["off", "typing"]);
export const AdsSchema = z.enum(["off", "result", "on", "sellout"]);
export const ColorThemeModeSchema = z.enum(["blackOnWhite", "whiteOnBlack", "custom"]);
export const AccountChartSchema = z.array(z.string());
export const CustomBackgroundFilterSchema = z.array(z.number());
export const CustomThemeColorsSchema = z.array(z.string());
export const FunboxNameSchema = z.string();
export const FunboxSchema = z.array(z.string());
export const QuoteLengthSchema = z.array(z.number());
export const QuoteLengthConfigSchema = z.array(z.number());
export const LayoutSchema = z.string();



export interface Config {
  theme: string;
  themeLight: string;
  themeDark: string;
  autoSwitchTheme: boolean;
  customTheme: boolean;
  customThemeColors: string[];
  favThemes: string[];
  showKeyTips: boolean;
  smoothCaret: string;
  codeUnindentOnBackspace: boolean;
  quickRestart: string;
  punctuation: boolean;
  numbers: boolean;
  words: number;
  time: number;
  mode: string;
  quoteLength: number[];
  language: string;
  fontSize: number;
  freedomMode: boolean;
  difficulty: string;
  blindMode: boolean;
  quickEnd: boolean;
  caretStyle: string;
  paceCaretStyle: string;
  flipTestColors: boolean;
  layout: string;
  funbox: string[];
  confidenceMode: string;
  indicateTypos: string;
  compositionDisplay: string;
  timerStyle: string;
  liveSpeedStyle: string;
  liveAccStyle: string;
  liveBurstStyle: string;
  colorfulMode: boolean;
  randomTheme: string;
  timerColor: string;
  timerOpacity: string;
  stopOnError: string;
  showAllLines: boolean;
  keymapMode: string;
  keymapStyle: string;
  keymapLegendStyle: string;
  keymapLayout: string;
  keymapShowTopRow: string;
  keymapSize: number;
  fontFamily: string;
  smoothLineScroll: boolean;
  alwaysShowDecimalPlaces: boolean;
  alwaysShowWordsHistory: boolean;
  singleListCommandLine: string;
  capsLockWarning: boolean;
  playSoundOnError: string;
  playSoundOnClick: string;
  soundVolume: number;
  startGraphsAtZero: boolean;
  showOutOfFocusWarning: boolean;
  paceCaret: string;
  paceCaretCustomSpeed: number;
  repeatedPace: boolean;
  accountChart: string[];
  minWpm: string;
  minWpmCustomSpeed: number;
  highlightMode: string;
  typedEffect: string;
  typingSpeedUnit: string;
  ads: string;
  hideExtraLetters: boolean;
  strictSpace: boolean;
  minAcc: string;
  minAccCustom: number;
  monkey: boolean;
  repeatQuotes: string;
  resultSaving: boolean;
  oppositeShiftMode: string;
  customBackground: string;
  customBackgroundSize: string;
  customBackgroundFilter: number[];
  customLayoutfluid: string[];
  customPolyglot: string[];
  monkeyPowerLevel: string;
  minBurst: string;
  minBurstCustomSpeed: number;
  burstHeatmap: boolean;
  britishEnglish: boolean;
  lazyMode: boolean;
  showAverage: string;
  showPb: boolean;
  tapeMode: string;
  tapeMargin: number;
  maxLineWidth: number;
  playTimeWarning: string;
  restartOnError: boolean;
  colorThemeMode: string;
  hideElements: Record<string, boolean>;
}

export type ConfigValue = string | number | boolean | number[] | string[] | Record<string, boolean>;
export type ConfigKey = keyof Config;

export const ConfigSchema = z.object({
  theme: z.string(),
  themeLight: z.string(),
  themeDark: z.string(),
  autoSwitchTheme: z.boolean(),
  customTheme: z.boolean(),
  customThemeColors: CustomThemeColorsSchema,
  favThemes: z.array(z.string()),
  showKeyTips: z.boolean(),
  smoothCaret: SmoothCaretSchema,
  codeUnindentOnBackspace: z.boolean(),
  quickRestart: QuickRestartSchema,
  punctuation: z.boolean(),
  numbers: z.boolean(),
  words: z.number(),
  time: z.number(),
  mode: z.enum(["time", "words", "quote", "zen", "custom"]),
  quoteLength: QuoteLengthSchema,
  language: z.string(),
  fontSize: z.number(),
  freedomMode: z.boolean(),
  difficulty: DifficultySchema,
  blindMode: z.boolean(),
  quickEnd: z.boolean(),
  caretStyle: CaretStyleSchema,
  paceCaretStyle: PaceCaretStyleSchema,
  flipTestColors: z.boolean(),
  layout: z.string(),
  funbox: FunboxSchema,
  confidenceMode: ConfidenceModeSchema,
  indicateTypos: IndicateTyposSchema,
  compositionDisplay: CompositionDisplaySchema,
  timerStyle: TimerStyleSchema,
  liveSpeedStyle: LiveSpeedAccBurstStyleSchema,
  liveAccStyle: LiveSpeedAccBurstStyleSchema,
  liveBurstStyle: LiveSpeedAccBurstStyleSchema,
  colorfulMode: z.boolean(),
  randomTheme: RandomThemeSchema,
  timerColor: TimerColorSchema,
  timerOpacity: TimerOpacitySchema,
  stopOnError: StopOnErrorSchema,
  showAllLines: z.boolean(),
  keymapMode: KeymapModeSchema,
  keymapStyle: KeymapStyleSchema,
  keymapLegendStyle: KeymapLegendStyleSchema,
  keymapLayout: KeymapLayoutSchema,
  keymapShowTopRow: KeymapShowTopRowSchema,
  keymapSize: z.number(),
  fontFamily: z.string(),
  smoothLineScroll: z.boolean(),
  alwaysShowDecimalPlaces: z.boolean(),
  alwaysShowWordsHistory: z.boolean(),
  singleListCommandLine: SingleListCommandLineSchema,
  capsLockWarning: z.boolean(),
  playSoundOnError: PlaySoundOnErrorSchema,
  playSoundOnClick: PlaySoundOnClickSchema,
  soundVolume: z.number(),
  startGraphsAtZero: z.boolean(),
  showOutOfFocusWarning: z.boolean(),
  paceCaret: PaceCaretSchema,
  paceCaretCustomSpeed: z.number(),
  repeatedPace: z.boolean(),
  accountChart: AccountChartSchema,
  minWpm: MinWpmSchema,
  minWpmCustomSpeed: z.number(),
  highlightMode: HighlightModeSchema,
  typedEffect: TypedEffectSchema,
  typingSpeedUnit: TypingSpeedUnitSchema,
  ads: AdsSchema,
  hideExtraLetters: z.boolean(),
  strictSpace: z.boolean(),
  minAcc: MinAccSchema,
  minAccCustom: z.number(),
  monkey: z.boolean(),
  repeatQuotes: RepeatQuotesSchema,
  resultSaving: z.boolean(),
  oppositeShiftMode: OppositeShiftModeSchema,
  customBackground: z.string(),
  customBackgroundSize: CustomBackgroundSizeSchema,
  customBackgroundFilter: CustomBackgroundFilterSchema,
  customLayoutfluid: z.array(z.string()),
  customPolyglot: z.array(z.string()),
  monkeyPowerLevel: MonkeyPowerLevelSchema,
  minBurst: MinBurstSchema,
  minBurstCustomSpeed: z.number(),
  burstHeatmap: z.boolean(),
  britishEnglish: z.boolean(),
  lazyMode: z.boolean(),
  showAverage: ShowAverageSchema,
  showPb: z.boolean(),
  tapeMode: TapeModeSchema,
  tapeMargin: z.number(),
  maxLineWidth: z.number(),
  playTimeWarning: PlayTimeWarningSchema,
  restartOnError: z.boolean(),
  colorThemeMode: ColorThemeModeSchema,
  hideElements: z.record(z.boolean()),
}).catchall(z.any());

export const ConfigValueSchema = z.any();
export const ConfigKeySchema = z.any();
export const ConfigGroupNameSchema = z.enum([
  "behavior",
  "input",
  "sound",
  "caret",
  "appearance",
  "theme",
  "hideElements",
  "dangerZone",
  "test",
  "hidden",
  "ads",
]);
export type ConfigGroupName = z.infer<typeof ConfigGroupNameSchema>;

export const PartialConfigSchema = ConfigSchema.partial();
export type PartialConfig = z.infer<typeof PartialConfigSchema>;

export type FunboxName = string;
export type CustomThemeColors = string[];
export type CustomBackgroundFilter = z.infer<typeof CustomBackgroundFilterSchema>;
export type CustomBackgroundSize = z.infer<typeof CustomBackgroundSizeSchema>;
export type CustomLayoutFluid = string[];
export type LiveSpeedAccBurstStyle = string;
export type QuoteLength = number;
export type QuoteLengthConfig = number[];
export type ThemeName = string;
export type Layout = string;
export type CaretStyle = z.infer<typeof CaretStyleSchema>;
export type PlaySoundOnClick = z.infer<typeof PlaySoundOnClickSchema>;
export type HighlightMode = z.infer<typeof HighlightModeSchema>;
export type KeymapLayout = z.infer<typeof KeymapLayoutSchema>;
export type TimerColor = z.infer<typeof TimerColorSchema>;
export type TimerOpacity = z.infer<typeof TimerOpacitySchema>;
export type TypingSpeedUnit = z.infer<typeof TypingSpeedUnitSchema>;
export type AccountChart = z.infer<typeof AccountChartSchema>;
