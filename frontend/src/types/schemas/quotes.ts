import { z } from "zod";

export interface QuoteDataQuote {
  id: number;
  text: string;
  source: string;
  length: number;
  britishText?: string;
}

export interface QuoteData {
  language: string;
  groups: [number, number][];
  quotes: QuoteDataQuote[];
}

export interface Quote {
  _id?: string;
  id: number;
  text: string;
  source?: string;
  length?: number;
  language?: string;
  timestamp?: number;
  group?: number;
}

export type QuoteReportReason = string;

export const QuoteSchema = z.any();
export const QuoteDataSchema = z.any();
export const QuoteDataQuoteSchema = z.any();
