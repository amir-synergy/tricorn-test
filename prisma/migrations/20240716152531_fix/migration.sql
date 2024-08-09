/*
  Warnings:

  - Made the column `title` on table `SubSections` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Sections` MODIFY `numeration` INTEGER NULL,
    MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `SubSections` MODIFY `title` VARCHAR(255) NOT NULL;
