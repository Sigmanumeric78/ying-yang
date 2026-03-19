// Stub for @whitespaces/contracts/leaderboards
export type LeaderboardsContractType = Record<string, unknown>;
export const leaderboardsContract = {} as any;

export type PaginationQuery = {
    page?: number;
    pageSize?: number;
};

export type FriendsOnlyQuery = {
    friendsOnly?: boolean;
};
