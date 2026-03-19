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
  totalXp: number;
  uid: string;
  name: string;
  lastActivityTimestamp: number;
  badgeId?: number;
  timeTypedSeconds: number;
  friendsRank?: number;
  wpm?: number;
  raw?: number;
  acc?: number;
  consistency?: number;
  isPremium?: boolean;
  discordId?: string;
  discordAvatar?: string;
  allTimeLbs?: Record<string, Record<string, Record<string, any>>>;
}
