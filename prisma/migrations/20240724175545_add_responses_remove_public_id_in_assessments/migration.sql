/*
  Warnings:

  - You are about to drop the column `publicId` on the `Assessments` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Assessments_publicId_key` ON `Assessments`;

-- AlterTable
ALTER TABLE `Assessments` DROP COLUMN `publicId`;

-- CreateTable
CREATE TABLE `Responses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `assessmentId` VARCHAR(191) NOT NULL,
    `inputId` VARCHAR(191) NULL,
    `name` VARCHAR(255) NOT NULL,
    `value` TEXT NOT NULL,
    `type` VARCHAR(255) NULL,
    `group` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Responses` ADD CONSTRAINT `Responses_assessmentId_fkey` FOREIGN KEY (`assessmentId`) REFERENCES `Assessments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responses` ADD CONSTRAINT `Responses_inputId_fkey` FOREIGN KEY (`inputId`) REFERENCES `Inputs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
