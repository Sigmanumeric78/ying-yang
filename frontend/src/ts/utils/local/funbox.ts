export interface FunboxMetadata {
  name: string;
  canGetPb: boolean;
  alias?: string;
  properties?: string[];
  description?: string;
  every?: string;
}

export type FunboxProperty = string;

const funboxes: Record<string, FunboxMetadata> = {
  "none": { name: "none", canGetPb: true },
  "wobbly": { name: "wobbly", canGetPb: false },
  "nospace": { name: "nospace", canGetPb: false },
};

export function getFunbox(name: string): FunboxMetadata | undefined {
  return funboxes[name];
}

export function getAllFunboxes(): FunboxMetadata[] {
  return Object.values(funboxes);
}

export function getFunboxNames(): string[] {
  return Object.keys(funboxes);
}

export function getFunboxObject(): Record<string, FunboxMetadata> {
  return funboxes;
}

export function checkCompatibility(
  funboxes: FunboxMetadata[] | string[],
): { valid: boolean; error?: string } | boolean {
  return { valid: true };
}
