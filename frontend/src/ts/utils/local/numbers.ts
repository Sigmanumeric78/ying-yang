export function roundTo2(num: number): number {
  return Math.round(num * 100) / 100;
}

export function roundTo1(num: number): number {
  return Math.round(num * 10) / 10;
}

export function randomIntFromRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mean(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function stdDev(arr: number[]): number {
  if (arr.length === 0) return 0;
  const avg = mean(arr);
  const squareDiffs = arr.map((value) => Math.pow(value - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function isSafeNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}

export function safeNumber(n: unknown): number {
  return typeof n === "number" && !isNaN(n) ? n : 0;
}

export function kogasa(cov: number): number {
  return 100 * (1 - Math.tanh(cov + Math.pow(cov, 3) / 3 + Math.pow(cov, 5) / 5));
}
