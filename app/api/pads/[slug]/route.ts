import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getRequestId, getUserAgent, logPadEvent } from "@/lib/audit";

const MAX_CONTENT_LENGTH = 50 * 1024; // 50 KB

const GET_LIMIT = 120;
const PUT_LIMIT = 30;
const WINDOW_MS = 60 * 1000; // 1 minute

function rateLimitHeaders(limit: number, remaining: number, resetAt: number) {
  return {
    "X-RateLimit-Limit": String(limit),
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(resetAt),
  };
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const requestId = getRequestId();
  const ipAddress = getClientIp(request);
  const userAgent = getUserAgent(request);

  try {
    const rate = checkRateLimit({
      key: `get:${ipAddress}`,
      limit: GET_LIMIT,
      windowMs: WINDOW_MS,
    });

    const { slug } = await params;

    if (!rate.allowed) {
      await logPadEvent({
        slug,
        action: "RATE_LIMITED",
        ipAddress,
        userAgent,
        requestId,
        metadata: {
          method: "GET",
          limit: GET_LIMIT,
          windowMs: WINDOW_MS,
        },
      });

      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        {
          status: 429,
          headers: rateLimitHeaders(GET_LIMIT, rate.remaining, rate.resetAt),
        }
      );
    }

    const pad = await prisma.pad.findUnique({
      where: { slug },
    });

    if (!pad || pad.deletedAt !== null) {
      await logPadEvent({
        padId: pad?.id ?? null,
        slug,
        action: "VIEWED",
        ipAddress,
        userAgent,
        requestId,
        metadata: {
          exists: false,
          deleted: pad?.deletedAt !== null,
        },
      });

      return NextResponse.json(
        {
          exists: false,
          content: "",
        },
        {
          status: 200,
          headers: rateLimitHeaders(GET_LIMIT, rate.remaining, rate.resetAt),
        }
      );
    }

    await prisma.pad.update({
      where: { slug },
      data: {
        lastViewedAt: new Date(),
      },
    });

    await logPadEvent({
      padId: pad.id,
      slug,
      action: "VIEWED",
      content: pad.content,
      ipAddress,
      userAgent,
      requestId,
      metadata: {
        exists: true,
        deleted: false,
      },
    });

    return NextResponse.json(
      {
        exists: true,
        pad: {
          id: pad.id,
          slug: pad.slug,
          content: pad.content,
          createdAt: pad.createdAt,
          updatedAt: pad.updatedAt,
          legalHold: pad.legalHold,
        },
      },
      {
        status: 200,
        headers: rateLimitHeaders(GET_LIMIT, rate.remaining, rate.resetAt),
      }
    );
  } catch (error) {
    console.error("GET /api/pads/[slug] error:", error);

    return NextResponse.json(
      { error: "Failed to fetch pad" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const requestId = getRequestId();
  const ipAddress = getClientIp(request);
  const userAgent = getUserAgent(request);

  try {
    const rate = checkRateLimit({
      key: `put:${ipAddress}`,
      limit: PUT_LIMIT,
      windowMs: WINDOW_MS,
    });

    const { slug } = await params;

    if (!rate.allowed) {
      await logPadEvent({
        slug,
        action: "RATE_LIMITED",
        ipAddress,
        userAgent,
        requestId,
        metadata: {
          method: "PUT",
          limit: PUT_LIMIT,
          windowMs: WINDOW_MS,
        },
      });

      return NextResponse.json(
        { error: "Too many save requests. Please wait a bit and try again." },
        {
          status: 429,
          headers: rateLimitHeaders(PUT_LIMIT, rate.remaining, rate.resetAt),
        }
      );
    }

    const body = await request.json();
    const content = body?.content;

    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "content must be a string" },
        { status: 400 }
      );
    }

    const contentSize = Buffer.byteLength(content, "utf8");

    if (contentSize > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { error: "Pad content exceeds 50 KB limit" },
        { status: 413 }
      );
    }

    const trimmedContent = content.trim();

    const existingPad = await prisma.pad.findUnique({
  where: { slug },
});

if (!existingPad && trimmedContent.length === 0) {
  return NextResponse.json(
    {
      success: true,
      skipped: true,
      deleted: false,
      message: "Empty new pad was not saved",
    },
    {
      status: 200,
      headers: rateLimitHeaders(PUT_LIMIT, rate.remaining, rate.resetAt),
    }
  );
}

if (existingPad?.legalHold) {
  return NextResponse.json(
    {
      error:
        "This pad is under legal hold and cannot be modified or deleted.",
    },
    {
      status: 423,
      headers: rateLimitHeaders(PUT_LIMIT, rate.remaining, rate.resetAt),
    }
  );
}

if (existingPad && trimmedContent.length === 0) {

      const deletedPad = await prisma.pad.update({
        where: { slug },
        data: {
          deletedAt: new Date(),
          content: "",
          lastViewedAt: new Date(),
        },
      });

      await logPadEvent({
        padId: deletedPad.id,
        slug,
        action: "SOFT_DELETED",
        content,
        contentSnapshot: "",
        ipAddress,
        userAgent,
        requestId,
        metadata: {
          reason: "emptied_by_user",
        },
      });

      return NextResponse.json(
        {
          success: true,
          skipped: false,
          deleted: true,
          pad: {
            id: deletedPad.id,
            slug: deletedPad.slug,
            content: deletedPad.content,
            createdAt: deletedPad.createdAt,
            updatedAt: deletedPad.updatedAt,
            deletedAt: deletedPad.deletedAt,
            legalHold: deletedPad.legalHold,
          },
        },
        {
          status: 200,
          headers: rateLimitHeaders(PUT_LIMIT, rate.remaining, rate.resetAt),
        }
      );
    }

    const wasDeleted = existingPad?.deletedAt !== null;

    const pad = await prisma.pad.upsert({
      where: { slug },
      update: {
        content,
        deletedAt: null,
        lastViewedAt: new Date(),
      },
      create: {
        slug,
        content,
        deletedAt: null,
        lastViewedAt: new Date(),
      },
    });

    await logPadEvent({
      padId: pad.id,
      slug,
      action: wasDeleted ? "RESTORED" : existingPad ? "UPDATED" : "CREATED",
      content,
      contentSnapshot:
        content.length <= 5000 ? content : content.slice(0, 5000),
      ipAddress,
      userAgent,
      requestId,
      metadata: {
        restoredFromSoftDelete: wasDeleted,
        contentBytes: contentSize,
      },
    });

    return NextResponse.json(
      {
        success: true,
        skipped: false,
        deleted: false,
        pad: {
          id: pad.id,
          slug: pad.slug,
          content: pad.content,
          createdAt: pad.createdAt,
          updatedAt: pad.updatedAt,
          legalHold: pad.legalHold,
        },
      },
      {
        status: 200,
        headers: rateLimitHeaders(PUT_LIMIT, rate.remaining, rate.resetAt),
      }
    );
  } catch (error) {
    console.error("PUT /api/pads/[slug] error:", error);

    return NextResponse.json(
      { error: "Failed to save pad" },
      { status: 500 }
    );
  }
}