import { notFound } from "next/navigation";
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

async function getPadData(slug: string): Promise<{
  content: string;
  legalHold: boolean;
}> {
  const pad = await prisma.pad.findUnique({
    where: { slug },
    select: {
      content: true,
      deletedAt: true,
      legalHold: true,
    },
  });

  if (!pad || pad.deletedAt !== null) {
    return {
      content: "",
      legalHold: false,
    };
  }

  return {
    content: pad.content,
    legalHold: pad.legalHold,
  };
}

export default async function PadPage({ params }: PageProps) {
  const { slug } = await params;

  if (RESERVED_SLUGS.has(slug)) {
    notFound();
  }

  const pad = await getPadData(slug);

  return (
    <PadEditor
      slug={slug}
      initialContent={pad.content}
      legalHold={pad.legalHold}
    />
  );
}