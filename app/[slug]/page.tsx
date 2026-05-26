import { prisma } from "@/lib/prisma";
import PadEditor from "@/components/PadEditor";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
  const pad = await getPadData(slug);

  return (
    <PadEditor
      slug={slug}
      initialContent={pad.content}
      legalHold={pad.legalHold}
    />
  );
}