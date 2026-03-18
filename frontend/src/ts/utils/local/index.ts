export * from "./numbers";
export * from "./trycatch";
export * from "./json";
export * from "./arrays";
export * from "./dev";
export * from "./predicates";
export * from "./date-and-time";

export const COMPATIBILITY_CHECK = "compatibility-check";
export const COMPATIBILITY_CHECK_HEADER = "x-compatibility-check";

// Contract stub that provides route namespaces for the Ape client.
// Each namespace is typed as `any` so ts-rest creates a loosely-typed client.
export const contract = {
    users: {},
    presets: {},
    results: {},
    leaderboards: {},
    apeKeys: {},
    configs: {},
    connections: {},
    quotes: {},
    configuration: {},
} as any;
