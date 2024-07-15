/*
  Warnings:

  - You are about to drop the column `arrangment` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `arrangment` on the `SubSections` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `SubSections` table. All the data in the column will be lost.
  - Added the required column `arrangement` to the `Sections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrangement` to the `SubSections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sections` DROP COLUMN `arrangment`,
    DROP COLUMN `visibility`,
    ADD COLUMN `arrangement` INTEGER NOT NULL,
    ADD COLUMN `visible` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `SubSections` DROP COLUMN `arrangment`,
    DROP COLUMN `visibility`,
    ADD COLUMN `arrangement` INTEGER NOT NULL,
    ADD COLUMN `visible` BOOLEAN NOT NULL DEFAULT true;
