export interface Quote {
  id: number;
  text: string;
  source?: string;
  length?: number;
}

export const QuoteSchema = { parse: (v: unknown) => v };
