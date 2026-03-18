export function tryCatch<T>(
  promise: Promise<T>,
): Promise<{ data: T; error: undefined } | { data: undefined; error: Error }> {
  return promise
    .then((data) => ({ data, error: undefined }) as { data: T; error: undefined })
    .catch((error: Error) => ({ data: undefined, error }) as { data: undefined; error: Error });
}

export function tryCatchSync<T>(fn: () => T): { data: T; error: undefined } | { data: undefined; error: Error } {
  try {
    return { data: fn(), error: undefined };
  } catch (error) {
    return { data: undefined, error: error as Error };
  }
}
