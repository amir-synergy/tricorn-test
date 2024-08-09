/*
  Warnings:

  - You are about to drop the column `assessmentsId` on the `Documents` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Documents` DROP FOREIGN KEY `Documents_assessmentsId_fkey`;

-- AlterTable
ALTER TABLE `Documents` DROP COLUMN `assessmentsId`;
