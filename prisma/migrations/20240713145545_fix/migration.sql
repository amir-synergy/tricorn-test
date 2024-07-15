-- AlterTable
ALTER TABLE `Sections` MODIFY `description` TEXT NOT NULL DEFAULT '',
    MODIFY `visibility` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `SubSections` MODIFY `description` TEXT NOT NULL DEFAULT '',
    MODIFY `visibility` BOOLEAN NOT NULL DEFAULT true;
