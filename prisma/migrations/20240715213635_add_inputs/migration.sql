/*
  Warnings:

  - Added the required column `assessmentDate` to the `Assessments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyCity` to the `Assessments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyManager` to the `Assessments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyState` to the `Assessments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyStreet` to the `Assessments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyZip` to the `Assessments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Assessments` ADD COLUMN `assessmentDate` DATETIME(3) NOT NULL,
    ADD COLUMN `propertyCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyManager` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyState` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyStreet` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyZip` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Inputs` (
    `id` VARCHAR(191) NOT NULL,
    `subSectionId` VARCHAR(191) NOT NULL,
    `arrangement` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `tag` ENUM('INPUT', 'TEXTAREA', 'SELECT') NOT NULL,
    `type` ENUM('TEXT', 'NUMBER', 'EMAIL', 'TEL', 'URL', 'PASSWORD', 'FILE', 'CHECKBOX', 'RADIO', 'DATE', 'TIME', 'DATETIME', 'MONTH', 'WEEK', 'COLOR', 'RANGE') NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `value` TEXT NULL,
    `placeholder` TEXT NULL,
    `accept` TEXT NULL,
    `options` TEXT NULL,
    `max` INTEGER NULL,
    `min` INTEGER NULL,
    `maxLength` INTEGER NULL,
    `minLength` INTEGER NULL,
    `required` BOOLEAN NOT NULL DEFAULT true,
    `visible` BOOLEAN NOT NULL DEFAULT true,
    `multiple` BOOLEAN NOT NULL DEFAULT false,
    `pattern` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inputs` ADD CONSTRAINT `Inputs_subSectionId_fkey` FOREIGN KEY (`subSectionId`) REFERENCES `SubSections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
