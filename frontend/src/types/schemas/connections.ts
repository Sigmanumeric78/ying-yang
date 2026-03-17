import { z } from "zod";

export interface Connection {
  id: string;
  userId: string;
  connectedAt: string;
}

export const ConnectionSchema = z.any();
