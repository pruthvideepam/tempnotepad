import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import { PadAuditAction, Prisma } from "@prisma/client";

type LogPadEventInput = {
  padId?: string | null;
  slug: string;
  action: PadAuditAction;
  content?: string | null;
  contentSnapshot?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  requestId?: string | null;
  metadata?: Record<string, unknown> | null;
};

export function sha256Hex(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function getRequestId(): string {
  return crypto.randomUUID();
}

export function getUserAgent(request: Request): string | null {
  return request.headers.get("user-agent");
}

export async function logPadEvent(input: LogPadEventInput) {
  const contentHash =
    typeof input.content === "string" ? sha256Hex(input.content) : null;

  return prisma.padAuditLog.create({
    data: {
      padId: input.padId ?? null,
      slug: input.slug,
      action: input.action,
      contentHash,
      contentSnapshot: input.contentSnapshot ?? null,
      ipAddress: input.ipAddress ?? null,
      userAgent: input.userAgent ?? null,
      requestId: input.requestId ?? null,
      metadata: input.metadata as Prisma.InputJsonValue | undefined,
    },
  });
}