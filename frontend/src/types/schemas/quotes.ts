import { z } from "zod";

export interface Quote {
  id: number;
  text: string;
  source?: string;
  length?: number;
}

export const QuoteSchema = z.any();
