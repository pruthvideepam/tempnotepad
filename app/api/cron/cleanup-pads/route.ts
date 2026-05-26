import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getRequestId, logPadEvent } from "@/lib/audit";

export const dynamic = "force-dynamic";

const RETENTION_DAYS = 30;

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
  const cutoff = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

  try {
    const pads = await prisma.pad.findMany({
      where: {
        deletedAt: {
          not: null,
          lt: cutoff,
        },
        legalHold: false,
      },
      select: {
        id: true,
        slug: true,
        content: true,
        deletedAt: true,
      },
      take: 100,
    });

    let deletedCount = 0;

    for (const pad of pads) {
      await logPadEvent({
        padId: pad.id,
        slug: pad.slug,
        action: "HARD_DELETED",
        content: pad.content,
        contentSnapshot:
          pad.content.length <= 5000 ? pad.content : pad.content.slice(0, 5000),
        ipAddress: null,
        userAgent: "system/cron",
        requestId,
        metadata: {
          deletedAt: pad.deletedAt?.toISOString() ?? null,
          retentionDays: RETENTION_DAYS,
          trigger: "scheduled_cleanup",
        },
      });

      await prisma.pad.delete({
        where: { id: pad.id },
      });

      deletedCount += 1;
    }

    return NextResponse.json({
      success: true,
      deletedCount,
      retentionDays: RETENTION_DAYS,
      cutoff: cutoff.toISOString(),
    });
  } catch (error) {
    console.error("GET /api/cron/cleanup-pads error:", error);

    return NextResponse.json(
      { error: "Failed to clean up pads" },
      { status: 500 }
    );
  }
}