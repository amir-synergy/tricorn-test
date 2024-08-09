-- CreateTable
CREATE TABLE `ImageResponses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `assessmentId` VARCHAR(191) NOT NULL,
    `step` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `fileName` VARCHAR(255) NOT NULL,
    `filePath` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImageResponses` ADD CONSTRAINT `ImageResponses_assessmentId_fkey` FOREIGN KEY (`assessmentId`) REFERENCES `Assessments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
