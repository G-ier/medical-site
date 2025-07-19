/*
  Warnings:

  - A unique constraint covering the columns `[progress_session_id,form_type,step_id]` on the table `form_data` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "form_data_progress_session_id_step_id_key";

-- AlterTable
ALTER TABLE "form_data" ADD COLUMN     "form_type" TEXT NOT NULL DEFAULT 'onboarding_step',
ALTER COLUMN "step_id" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "form_data_form_type_idx" ON "form_data"("form_type");

-- CreateIndex
CREATE UNIQUE INDEX "form_data_progress_session_id_form_type_step_id_key" ON "form_data"("progress_session_id", "form_type", "step_id");
