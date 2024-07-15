/*
  Warnings:

  - The primary key for the `Sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SubSections` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `SubSections` DROP FOREIGN KEY `SubSections_sectionId_fkey`;

-- AlterTable
ALTER TABLE `Sections` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `SubSections` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `sectionId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `SubSections` ADD CONSTRAINT `SubSections_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Sections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
