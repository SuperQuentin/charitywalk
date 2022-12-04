/*
  Warnings:

  - You are about to drop the column `userId` on the `Trackpoint` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Trackpoint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trackpoint" DROP CONSTRAINT "Trackpoint_userId_fkey";

-- AlterTable
ALTER TABLE "Trackpoint" DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Trackpoint" ADD CONSTRAINT "Trackpoint_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
