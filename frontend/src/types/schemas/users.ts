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

export const UserNameSchema = { parse: (v: unknown) => v };
export const RankAndCountSchema = { parse: (v: unknown) => v };
