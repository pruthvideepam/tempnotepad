import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import PadEditor from "@/components/PadEditor";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const RESERVED_SLUGS = new Set([
  "blog",
  "privacy",
  "terms",
  "contact",
  "faq",
  "sitemap.xml",
  "robots.txt",
  "favicon.ico",
]);

const MAX_NEW_PADS_PER_IP_PER_DAY = 5;

function getClientIpFromHeaders(headersList: Headers): string {
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = headersList.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

function startOfCurrentUtcDay() {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
}

async function getPadData(slug: string): Promise<{
  content: string;
  legalHold: boolean;
  exists: boolean;
}> {
  const pad = await prisma.pad.findUnique({
    where: { slug },
    select: {
      id: true,
      content: true,
      deletedAt: true,
      legalHold: true,
    },
  });

  if (!pad) {
    return {
      content: "",
      legalHold: false,
      exists: false,
    };
  }

  if (pad.deletedAt !== null) {
    return {
      content: "",
      legalHold: false,
      exists: false,
    };
  }

  await prisma.pad.update({
    where: { id: pad.id },
    data: {
      lastViewedAt: new Date(),
    },
  });

  return {
    content: pad.content,
    legalHold: pad.legalHold,
    exists: true,
  };
}

async function getCreationPolicy(ipAddress: string) {
  const creationWindowStart = startOfCurrentUtcDay();

  const createdTodayCount = await prisma.padAuditLog.count({
    where: {
      action: "CREATED",
      ipAddress,
      createdAt: {
        gte: creationWindowStart,
      },
    },
  });

  return {
    canCreateNewPad: createdTodayCount < MAX_NEW_PADS_PER_IP_PER_DAY,
    maxNewPadsPerDay: MAX_NEW_PADS_PER_IP_PER_DAY,
    createdTodayCount,
    creationWindowStart: creationWindowStart.toISOString(),
  };
}

export default async function PadPage({ params }: PageProps) {
  const { slug } = await params;

  if (RESERVED_SLUGS.has(slug)) {
    notFound();
  }

  const headersList = await headers();
  const ipAddress = getClientIpFromHeaders(headersList);

  const pad = await getPadData(slug);

  let canCreateNewPad = true;

  if (!pad.exists) {
    const creationPolicy = await getCreationPolicy(ipAddress);
    canCreateNewPad = creationPolicy.canCreateNewPad;
  }

  return (
    <PadEditor
      slug={slug}
      initialContent={pad.content}
      legalHold={pad.legalHold}
      creationBlocked={!pad.exists && !canCreateNewPad}
    />
  );
}