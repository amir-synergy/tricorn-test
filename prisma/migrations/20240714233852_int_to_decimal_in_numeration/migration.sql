/*
  Warnings:

  - You are about to alter the column `numeration` on the `Sections` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.
  - You are about to alter the column `numeration` on the `SubSections` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `Sections` MODIFY `numeration` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `SubSections` MODIFY `numeration` DECIMAL(10, 2) NOT NULL;
