/*
  Warnings:

  - You are about to drop the column `name` on the `Responses` table. All the data in the column will be lost.
  - You are about to drop the column `step` on the `Responses` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Responses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Responses` DROP COLUMN `name`,
    DROP COLUMN `step`,
    DROP COLUMN `value`;
