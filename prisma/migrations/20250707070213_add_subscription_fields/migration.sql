/*
  Warnings:

  - A unique constraint covering the columns `[stripe_subscription_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "current_period_end" TIMESTAMP(3),
ADD COLUMN     "current_period_start" TIMESTAMP(3),
ADD COLUMN     "stripe_price_id" TEXT,
ADD COLUMN     "stripe_product_id" TEXT,
ADD COLUMN     "stripe_subscription_id" TEXT,
ADD COLUMN     "subscription_status" TEXT,
ALTER COLUMN "stripe_payment_intent_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_stripe_subscription_id_key" ON "payments"("stripe_subscription_id");

-- CreateIndex
CREATE INDEX "payments_stripe_subscription_id_idx" ON "payments"("stripe_subscription_id");
