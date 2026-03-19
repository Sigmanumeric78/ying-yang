// Stub for @whitespaces/contracts/util/api
// Provides common response types used by the API client

export type CommonResponsesType = {
    status: number;
    body: {
        message: string;
        data?: unknown;
        validationErrors?: string[];
    };
};
