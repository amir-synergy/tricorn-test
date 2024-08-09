-- AlterTable
ALTER TABLE `SubSections` MODIFY `title` VARCHAR(255) NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `visible` BOOLEAN NULL DEFAULT true;
