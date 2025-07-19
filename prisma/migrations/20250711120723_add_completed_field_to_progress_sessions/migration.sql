-- AlterTable
ALTER TABLE "progress_sessions" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "progress_sessions_completed_idx" ON "progress_sessions"("completed");
