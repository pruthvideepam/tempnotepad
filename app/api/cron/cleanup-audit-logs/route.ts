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
    console.warn(
      JSON.stringify({
        event: "cron.audit_logs_cleanup.unauthorized",
        path: "/api/cron/cleanup-audit-logs",
      })
    );

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const requestId = getRequestId();
  const now = new Date();
  const cutoff = new Date(
    now.getTime() - AUDIT_LOG_RETENTION_DAYS * 24 * 60 * 60 * 1000
  );

  console.log(
    JSON.stringify({
      event: "cron.audit_logs_cleanup.started",
      requestId,
      retentionDays: AUDIT_LOG_RETENTION_DAYS,
      cutoff: cutoff.toISOString(),
      executedAt: now.toISOString(),
    })
  );

  try {
    const matchingCount = await prisma.padAuditLog.count({
      where: {
        createdAt: {
          lt: cutoff,
        },
      },
    });

    const result = await prisma.padAuditLog.deleteMany({
      where: {
        createdAt: {
          lt: cutoff,
        },
      },
    });

    console.log(
      JSON.stringify({
        event: "cron.audit_logs_cleanup.completed",
        requestId,
        retentionDays: AUDIT_LOG_RETENTION_DAYS,
        cutoff: cutoff.toISOString(),
        matchingCount,
        deletedCount: result.count,
        executedAt: new Date().toISOString(),
      })
    );

    return NextResponse.json({
      success: true,
      requestId,
      matchingCount,
      deletedCount: result.count,
      retentionDays: AUDIT_LOG_RETENTION_DAYS,
      cutoff: cutoff.toISOString(),
      executedAt: now.toISOString(),
    });
  } catch (error) {
    console.error(
      JSON.stringify({
        event: "cron.audit_logs_cleanup.failed",
        requestId,
        retentionDays: AUDIT_LOG_RETENTION_DAYS,
        cutoff: cutoff.toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      })
    );

    return NextResponse.json(
      { error: "Failed to clean up audit logs" },
      { status: 500 }
    );
  }
}