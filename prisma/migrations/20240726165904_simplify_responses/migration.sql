/*
  Warnings:

  - You are about to drop the column `group` on the `Responses` table. All the data in the column will be lost.
  - You are about to drop the column `inputId` on the `Responses` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Responses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Responses` DROP FOREIGN KEY `Responses_inputId_fkey`;

-- AlterTable
ALTER TABLE `Responses` DROP COLUMN `group`,
    DROP COLUMN `inputId`,
    DROP COLUMN `type`;
