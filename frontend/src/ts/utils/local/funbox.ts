export interface FunboxMetadata {
  name: string;
  canGetPb: boolean;
}

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

export function checkCompatibility(
  funboxes: FunboxMetadata[],
): { valid: boolean; error?: string } {
  return { valid: true };
}
