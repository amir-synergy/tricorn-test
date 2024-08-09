/*
  Warnings:

  - You are about to drop the column `key` on the `Responses` table. All the data in the column will be lost.
  - Added the required column `name` to the `Responses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Responses` DROP COLUMN `key`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL;
