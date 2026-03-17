import { z } from "zod";

export interface User {
  id: string;
  name?: string;
  email?: string;
}

export interface Badge {
  id: number;
  name: string;
  description?: string;
}

export interface CustomTheme {
  name: string;
  colors: Record<string, string>;
}

export interface RankAndCount {
  rank: number;
  count: number;
}

export interface UserName {
  name: string;
}

export interface ResultFiltersGroupItem {
  _id: string;
  name: string;
}

export const UserSchema = z.any();
export const UserNameSchema = z.any();
export const UserEmailSchema = z.any();
export const PasswordSchema = z.any();
export const BadgeSchema = z.any();
export const CustomThemeSchema = z.any();
export const CustomThemeColorsSchema = z.any();
export const RankAndCountSchema = z.any();
export const ResultFiltersGroupItemSchema = z.any();
export const IdSchema = z.any();
export const TagNameSchema = z.any();
export const ResultFiltersSchema = z.any();
export const GithubProfileSchema = z.any();
export const TwitterProfileSchema = z.any();
export const WebsiteSchema = z.any();
