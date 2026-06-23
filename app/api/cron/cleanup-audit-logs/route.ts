import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getRequestId } from "@/lib/audit";

export const dynamic = "force-dynamic";

const AUDIT_LOG_RETENTION_DAYS = 90;

function isAuthorized(request: Request) {
  const authHeader = request.headers.get("authorization");
  const expected = process.env.CRON_SECRET;

  if (!expected) return true;
  return authHeader === `Bearer ${expected}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const requestId = getRequestId();
  const now = new Date();
  const cutoff = new Date(
    now.getTime() - AUDIT_LOG_RETENTION_DAYS * 24 * 60 * 60 * 1000
  );

  try {
    const result = await prisma.padAuditLog.deleteMany({
      where: {
        createdAt: {
          lt: cutoff,
        },
      },
    });

    return NextResponse.json({
      success: true,
      requestId,
      deletedCount: result.count,
      retentionDays: AUDIT_LOG_RETENTION_DAYS,
      cutoff: cutoff.toISOString(),
      executedAt: now.toISOString(),
    });
  } catch (error) {
    console.error("GET /api/cron/cleanup-audit-logs error:", error);

    return NextResponse.json(
      { error: "Failed to clean up audit logs" },
      { status: 500 }
    );
  }
}