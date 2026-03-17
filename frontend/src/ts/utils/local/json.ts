export function parseWithSchema<T>(
  jsonString: string,
  schema: { parse: (data: unknown) => T },
): T {
  const data = JSON.parse(jsonString);
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
