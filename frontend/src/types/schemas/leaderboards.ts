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
  uid?: string;
  badgeId?: number;
  isPb?: boolean;
  friendsRank?: number;
}

export interface XpLeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  totalXp?: number;
  uid?: string;
  lastActivityTimestamp?: number;
  badgeId?: number;
  timeTypedSeconds?: number;
  discordId?: string;
  discordAvatar?: string;
  isPremium?: boolean;
}
