-- CreateTable
CREATE TABLE "Pad" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "lastViewedAt" TIMESTAMP(3),

    CONSTRAINT "Pad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pad_slug_key" ON "Pad"("slug");

-- CreateIndex
CREATE INDEX "Pad_deletedAt_idx" ON "Pad"("deletedAt");

-- CreateIndex
CREATE INDEX "Pad_updatedAt_idx" ON "Pad"("updatedAt");
