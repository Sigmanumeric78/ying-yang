import { z } from "zod";
import type { PersonalBests } from "./shared";
import type { Config } from "./configs";

export interface UserProfileDetails {
  bio?: string;
  keyboard?: string;
  socialProfiles?: Record<string, string>;
  showActivityOnPublicProfile?: boolean;
}

export type UserTag = {
  _id: string;
  name: string;
  personalBests?: PersonalBests;
};

export interface ResultFilters {
  _id: string;
  name: string;
  difficulty: { normal: boolean; expert: boolean; master: boolean };
  mode: { time: boolean; words: boolean; quote: boolean; custom: boolean; zen: boolean };
  words: { "10": boolean; "25": boolean; "50": boolean; "100": boolean; "200": boolean; custom: boolean };
  time: { "15": boolean; "30": boolean; "60": boolean; "120": boolean; custom: boolean };
  quoteLength: { short: boolean; medium: boolean; long: boolean; thicc: boolean };
  punctuation: { on: boolean; off: boolean };
  numbers: { on: boolean; off: boolean };
  date: { last_day: boolean; last_week: boolean; last_month: boolean; last_3months: boolean; all: boolean };
  tags: Record<string, boolean>;
  language: Record<string, boolean>;
  funbox: Record<string, boolean>;
  pb: { yes: boolean; no: boolean };
}

export type ResultFiltersGroup = keyof Omit<ResultFilters, "_id" | "name">;
export type ResultFiltersGroupItem<G extends ResultFiltersGroup> = keyof ResultFilters[G] & string;

export interface User {
  uid?: string;
  id?: string;
  name?: string;
  email?: string;
  banned?: boolean;
  verified?: boolean;
  lbOptOut?: boolean;
  discordId?: string;
  discordAvatar?: string;
  personalBests?: PersonalBests;
  tags?: UserTag[];
  customThemes?: CustomTheme[];
  needsToChangeName?: boolean;
  favoriteQuotes?: Record<string, string[]>;
  quoteRatings?: Record<string, Record<string, number>>;
  quoteMod?: boolean;
  xp?: number;
  inventory?: unknown;
  streak?: { length: number; maxLength: number; hourOffset?: number };
  allTimeLbs?: Record<string, Record<string, Record<string, RankAndCount>>>;
  lbMemory?: Record<string, Record<string, Record<string, number>>>;
  profileDetails?: UserProfileDetails;
  addedAt?: number;
  inboxUnreadSize?: number;
  testActivity?: { testsByDays: number[]; lastDay: string };
  isPremium?: boolean;
  resultFilterPresets?: ResultFilters[];
  config?: Partial<Config>;
  timeTyping?: number;
  startedTests?: number;
  completedTests?: number;
}

export interface Badge {
  id: number;
  selected?: boolean;
  name: string;
  description?: string;
}

export interface CustomTheme {
  _id: string;
  name: string;
  colors: string[];
}

export interface RankAndCount {
  rank: number;
  count: number;
}

export interface UserName {
  name: string;
}



export const UserSchema = z.any();
export const UserNameSchema = z.any();
export const UserEmailSchema = z.any();
export const PasswordSchema = z.any();
export const BadgeSchema = z.any();
export const CustomThemeSchema = z.any();
export const RankAndCountSchema = z.any();
export const ResultFiltersGroupItemSchema = z.any();
export const TagNameSchema = z.any();
export const ResultFiltersSchema = z.any();
export const GithubProfileSchema = z.any();
export const TwitterProfileSchema = z.any();
export const WebsiteSchema = z.any();

export interface UserProfile {
  name?: string;
  bio?: string;
  keyboard?: string;
  socialProfiles?: Record<string, string>;
  xp?: number;
  uid?: string;
  isPremium?: boolean;
  badges?: Badge[];
  allTimeLbs?: Record<string, Record<string, Record<string, RankAndCount>>>;
  personalBests?: any;
  completedTests?: number;
  startedTests?: number;
  timeTyping?: number;
  streak?: { length: number; maxLength: number };
  addedAt?: number;
  banned?: boolean;
  verified?: boolean;
  lbOptOut?: boolean;
  discordId?: string;
  discordAvatar?: string;
  details?: UserProfileDetails;
  typingStats?: TypingStats;
  inventory?: unknown;
  testActivity?: TestActivity;
}

export interface TypingStats {
  timeTyping: number;
  startedTests: number;
  completedTests: number;
}

export interface TestActivity {
  testsByDays: number[];
  lastDay: string;
}

export interface MonkeyMail {
  id: string;
  subject: string;
  body: string;
  timestamp: number;
  read: boolean;
  rewards?: unknown[];
}

export type ReportUserReason = string;

export interface Friend {
  uid: string;
  name: string;
  isPremium?: boolean;
  discordId?: string;
  discordAvatar?: string;
  badgeId?: number;
  personalBests?: any;
  allTimeLbs?: Record<string, Record<string, Record<string, RankAndCount>>>;
  lastActivityTimestamp?: number;
  friendsRank?: number;
  streak?: { length: number; maxLength: number };
  connectionId?: string;
  lastModified?: number;
  top15?: any;
  top60?: any;
  completedTests?: number;
  startedTests?: number;
  timeTyping?: number;
  xp?: number;
}
