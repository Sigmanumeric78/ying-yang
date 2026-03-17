export interface Connection {
  id: string;
  userId: string;
  connectedAt: string;
}

export const ConnectionSchema = { parse: (v: unknown) => v };
