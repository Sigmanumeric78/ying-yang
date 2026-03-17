export interface LayoutObject {
  name: string;
  keys: string[][];
}

export type LayoutName = string;

export const LayoutSchema = { parse: (v: unknown) => v };
