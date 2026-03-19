import { z } from "zod";

export interface ApeKey {
    _id: string;
    name: string;
    enabled: boolean;
    createdOn: number;
    modifiedOn: number;
    useCount: number;
    lastUsedOn?: number;
}

export const ApeKeySchema = z.any();
