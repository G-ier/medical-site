-- CreateTable
CREATE TABLE "form_data" (
    "id" SERIAL NOT NULL,
    "progress_session_id" INTEGER NOT NULL,
    "step_id" TEXT NOT NULL,
    "form_data" JSONB NOT NULL,
    "is_valid" BOOLEAN NOT NULL DEFAULT false,
    "validation_errors" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "form_data_progress_session_id_idx" ON "form_data"("progress_session_id");

-- CreateIndex
CREATE INDEX "form_data_step_id_idx" ON "form_data"("step_id");

-- CreateIndex
CREATE UNIQUE INDEX "form_data_progress_session_id_step_id_key" ON "form_data"("progress_session_id", "step_id");

-- AddForeignKey
ALTER TABLE "form_data" ADD CONSTRAINT "form_data_progress_session_id_fkey" FOREIGN KEY ("progress_session_id") REFERENCES "progress_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
