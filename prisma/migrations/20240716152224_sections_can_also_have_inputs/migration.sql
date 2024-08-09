-- DropForeignKey
ALTER TABLE `Inputs` DROP FOREIGN KEY `Inputs_subSectionId_fkey`;

-- AlterTable
ALTER TABLE `Inputs` ADD COLUMN `sectionId` VARCHAR(191) NULL,
    MODIFY `subSectionId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Inputs` ADD CONSTRAINT `Inputs_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inputs` ADD CONSTRAINT `Inputs_subSectionId_fkey` FOREIGN KEY (`subSectionId`) REFERENCES `SubSections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
