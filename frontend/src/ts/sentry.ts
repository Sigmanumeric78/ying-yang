export async function activateSentry(): Promise<void> {
  console.log("Sentry disabled in local development");
}

export async function setUser(_uid: string, _name: string): Promise<void> {}

export async function clearUser(): Promise<void> {}

export async function captureException(_error: Error): Promise<void> {}

export function toggleDebug(): void {
  console.log("Sentry debug disabled");
}
