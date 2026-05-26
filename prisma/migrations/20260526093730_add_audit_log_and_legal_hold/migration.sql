-- CreateEnum
CREATE TYPE "PadAuditAction" AS ENUM ('CREATED', 'VIEWED', 'UPDATED', 'SOFT_DELETED', 'RESTORED', 'HARD_DELETED', 'RATE_LIMITED');

-- AlterTable
ALTER TABLE "Pad" ADD COLUMN     "legalHold" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "PadAuditLog" (
    "id" TEXT NOT NULL,
    "padId" TEXT,
    "slug" TEXT NOT NULL,
    "action" "PadAuditAction" NOT NULL,
    "contentHash" TEXT,
    "contentSnapshot" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "requestId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PadAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PadAuditLog_slug_idx" ON "PadAuditLog"("slug");

-- CreateIndex
CREATE INDEX "PadAuditLog_action_idx" ON "PadAuditLog"("action");

-- CreateIndex
CREATE INDEX "PadAuditLog_createdAt_idx" ON "PadAuditLog"("createdAt");

-- CreateIndex
CREATE INDEX "PadAuditLog_ipAddress_idx" ON "PadAuditLog"("ipAddress");

-- CreateIndex
CREATE INDEX "PadAuditLog_padId_idx" ON "PadAuditLog"("padId");

-- CreateIndex
CREATE INDEX "Pad_lastViewedAt_idx" ON "Pad"("lastViewedAt");

-- CreateIndex
CREATE INDEX "Pad_legalHold_idx" ON "Pad"("legalHold");

-- AddForeignKey
ALTER TABLE "PadAuditLog" ADD CONSTRAINT "PadAuditLog_padId_fkey" FOREIGN KEY ("padId") REFERENCES "Pad"("id") ON DELETE SET NULL ON UPDATE CASCADE;
