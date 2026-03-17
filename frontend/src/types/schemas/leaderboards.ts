export interface LeaderboardEntry {
  rank: number;
  wpm: number;
  acc: number;
  raw: number;
  consistency: number;
  timestamp: number;
  discordId?: string;
  discordAvatar?: string;
  name: string;
  isPremium?: boolean;
}

export interface XpLeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  discordId?: string;
  discordAvatar?: string;
  isPremium?: boolean;
}
