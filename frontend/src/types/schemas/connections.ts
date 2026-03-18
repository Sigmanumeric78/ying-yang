import { z } from "zod";

export interface Connection {
  _id?: string;
  id: string;
  userId: string;
  connectedAt: string;
  type?: string;
  initiatorUid?: string;
  receiverUid?: string;
  initiatorName?: string;
  status?: string;
  lastModified?: number;
}

export type ConnectionStatus = "pending" | "accepted" | "blocked" | "incoming";

export const ConnectionSchema = z.any();
export const ConnectionStatusSchema = z.any();
