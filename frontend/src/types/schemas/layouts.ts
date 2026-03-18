import { z } from "zod";

export interface LayoutObject {
  name: string;
  keys: string[][];
  row1?: string[];
  row2?: string[];
  row3?: string[];
  row4?: string[];
  row5?: string[];
  matrixShowRightColumn?: boolean;
  keymapShowTopRow?: string;
  type?: string;
}

export type LayoutName = string;

export const LayoutObjectSchema = z.any();
export const LayoutNameSchema = z.any();
