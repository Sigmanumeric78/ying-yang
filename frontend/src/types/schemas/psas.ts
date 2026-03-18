import { z } from "zod";

export interface PSA {
    _id: string;
    message: string;
    date?: number;
    level?: number;
    sticky?: boolean;
}

export const PSASchema = z.any();
