/*
  Warnings:

  - Added the required column `name` to the `Responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `step` to the `Responses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Responses` ADD COLUMN `name` VARCHAR(255) NOT NULL,
    ADD COLUMN `step` VARCHAR(255) NOT NULL,
    ADD COLUMN `value` TEXT NULL;
