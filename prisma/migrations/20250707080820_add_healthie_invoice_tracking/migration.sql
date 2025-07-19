/*
  Warnings:

  - The `healthie_invoice_status` column on the `payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "HealthieInvoiceStatus" AS ENUM ('PENDING', 'SENT', 'VIEWED', 'PAID', 'PARTIALLY_PAID', 'OVERDUE', 'CANCELLED', 'REFUNDED', 'FAILED', 'DISPUTED');

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "healthie_invoice_amount" INTEGER,
ADD COLUMN     "healthie_invoice_due_date" TIMESTAMP(3),
ADD COLUMN     "healthie_invoice_notes" TEXT,
ADD COLUMN     "healthie_invoice_paid_date" TIMESTAMP(3),
ADD COLUMN     "healthie_invoice_url" TEXT,
ADD COLUMN     "healthie_last_sync_at" TIMESTAMP(3),
DROP COLUMN "healthie_invoice_status",
ADD COLUMN     "healthie_invoice_status" "HealthieInvoiceStatus";
