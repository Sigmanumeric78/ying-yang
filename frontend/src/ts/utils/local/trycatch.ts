export function tryCatch<T>(
  promise: Promise<T>,
): Promise<[undefined, T] | [Error, undefined]> {
  return promise
    .then((data) => [undefined, data] as [undefined, T])
    .catch((error: Error) => [error, undefined] as [Error, undefined]);
}

export function tryCatchSync<T>(fn: () => T): [Error | undefined, T | undefined] {
  try {
    return [undefined, fn()];
  } catch (error) {
    return [error as Error, undefined];
  }
}
