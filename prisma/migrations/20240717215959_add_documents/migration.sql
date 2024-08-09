-- CreateTable
CREATE TABLE `Documents` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `url` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `assessmentsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Documents` ADD CONSTRAINT `Documents_assessmentsId_fkey` FOREIGN KEY (`assessmentsId`) REFERENCES `Assessments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
