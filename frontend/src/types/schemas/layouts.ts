import { z } from "zod";

export interface LayoutObject {
  name: string;
  keys: string[][];
}

export type LayoutName = string;

export const LayoutObjectSchema = z.any();
export const LayoutNameSchema = z.any();
