import { z } from "zod";

export interface Preset {
  id: string;
  name: string;
  config: Record<string, unknown>;
}

export type PresetName = string;

export const PresetSchema = z.any();
export const PresetNameSchema = z.any();
export const PresetTypeSchema = z.any();
