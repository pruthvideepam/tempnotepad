import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getRequestId, logPadEvent } from "@/lib/audit";

export const dynamic = "force-dynamic";

const INACTIVE_DAYS = 30;
const RETENTION_DAYS = 30;
const BATCH_SIZE = 100;

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
  const inactivityCutoff = new Date(
    now.getTime() - INACTIVE_DAYS * 24 * 60 * 60 * 1000
  );
  const retentionCutoff = new Date(
    now.getTime() - RETENTION_DAYS * 24 * 60 * 60 * 1000
  );

  try {
    const activePadsToSoftDelete = await prisma.pad.findMany({
      where: {
        deletedAt: null,
        legalHold: false,
        updatedAt: { lt: inactivityCutoff },
        OR: [
          { lastViewedAt: null },
          { lastViewedAt: { lt: inactivityCutoff } },
        ],
      },
      select: {
        id: true,
        slug: true,
        content: true,
        updatedAt: true,
        lastViewedAt: true,
      },
      take: BATCH_SIZE,
    });

    let softDeletedCount = 0;

    for (const pad of activePadsToSoftDelete) {
      const deletedAt = new Date();

      await prisma.pad.update({
        where: { id: pad.id },
        data: {
          deletedAt,
        },
      });

      await logPadEvent({
        padId: pad.id,
        slug: pad.slug,
        action: "SOFT_DELETED",
        content: pad.content,
        contentSnapshot:
          pad.content.length <= 5000 ? pad.content : pad.content.slice(0, 5000),
        ipAddress: null,
        userAgent: "system/cron",
        requestId,
        metadata: {
          trigger: "inactive_cleanup",
          inactiveDays: INACTIVE_DAYS,
          previousUpdatedAt: pad.updatedAt.toISOString(),
          previousLastViewedAt: pad.lastViewedAt?.toISOString() ?? null,
          deletedAt: deletedAt.toISOString(),
        },
      });

      softDeletedCount += 1;
    }

    const padsToHardDelete = await prisma.pad.findMany({
      where: {
        deletedAt: {
          not: null,
          lt: retentionCutoff,
        },
        legalHold: false,
      },
      select: {
        id: true,
        slug: true,
        content: true,
        deletedAt: true,
      },
      take: BATCH_SIZE,
    });

    let hardDeletedCount = 0;

    for (const pad of padsToHardDelete) {
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

      hardDeletedCount += 1;
    }

    return NextResponse.json({
      success: true,
      softDeletedCount,
      hardDeletedCount,
      inactiveDays: INACTIVE_DAYS,
      retentionDays: RETENTION_DAYS,
      inactivityCutoff: inactivityCutoff.toISOString(),
      retentionCutoff: retentionCutoff.toISOString(),
    });
  } catch (error) {
    console.error("GET /api/cron/cleanup-pads error:", error);

    return NextResponse.json(
      { error: "Failed to clean up pads" },
      { status: 500 }
    );
  }
}