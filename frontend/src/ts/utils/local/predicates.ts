export const not = <T extends (...args: unknown[]) => boolean>(fn: T) => {
  return (...args: Parameters<T>): boolean => !fn(...args);
};
