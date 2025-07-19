/*
  Warnings:

  - You are about to drop the column `billing_frequency` on the `subscriptions` table. All the data in the column will be lost.
  - Added the required column `billing_interval` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "billing_frequency",
ADD COLUMN     "billing_interval" TEXT NOT NULL,
ADD COLUMN     "billing_interval_count" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "healthie_user_id" TEXT,
ADD COLUMN     "plan_description" TEXT;
