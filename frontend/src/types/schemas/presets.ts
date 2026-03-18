import { z } from "zod";

export interface Preset {
  _id?: string;
  id: string;
  name: string;
  config: Record<string, unknown>;
  settingGroups?: string[];
}

export type PresetName = string;
export type PresetType = z.infer<typeof PresetTypeSchema>;

export const PresetSchema = z.any();
export const PresetNameSchema = z.any();
export const PresetTypeSchema = z.enum(["full", "partial"]);

