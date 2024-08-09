/*
  Warnings:

  - You are about to alter the column `propertyZip` on the `Assessments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Assessments` DROP FOREIGN KEY `Assessments_userId_fkey`;

-- AlterTable
ALTER TABLE `Assessments` MODIFY `userId` VARCHAR(255) NOT NULL,
    MODIFY `propertyName` VARCHAR(255) NULL,
    MODIFY `assessmentDate` DATETIME(3) NULL,
    MODIFY `propertyCity` VARCHAR(255) NULL,
    MODIFY `propertyManager` VARCHAR(255) NULL,
    MODIFY `propertyState` VARCHAR(255) NULL,
    MODIFY `propertyStreet` VARCHAR(255) NULL,
    MODIFY `propertyZip` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Assessments` ADD CONSTRAINT `Assessments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
