export function parseWithSchema<T>(
  jsonString: string,
  schema: { parse: (data: unknown) => T },
  options?: {
    migrate?: (value: Record<string, unknown> | unknown[]) => T;
  },
): T {
  let data = JSON.parse(jsonString);
  if (options?.migrate) {
    data = options.migrate(data);
  }
  return schema.parse(data);
}

export function isZodError(error: unknown): error is { issues: unknown[] } {
  return (
    error !== null &&
    typeof error === "object" &&
    "issues" in error &&
    Array.isArray((error as { issues: unknown[] }).issues)
  );
}
