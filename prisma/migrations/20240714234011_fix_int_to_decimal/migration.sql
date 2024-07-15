/*
  Warnings:

  - You are about to alter the column `numeration` on the `Sections` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Int`.
  - You are about to alter the column `numeration` on the `SubSections` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,1)`.

*/
-- AlterTable
ALTER TABLE `Sections` MODIFY `numeration` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `SubSections` MODIFY `numeration` DECIMAL(10, 1) NOT NULL;
