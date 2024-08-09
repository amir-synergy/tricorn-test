/*
  Warnings:

  - You are about to drop the column `assessmentDate` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyCity` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyManager` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyName` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyState` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyStreet` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `propertyZip` on the `Assessments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Assessments` DROP COLUMN `assessmentDate`,
    DROP COLUMN `propertyCity`,
    DROP COLUMN `propertyManager`,
    DROP COLUMN `propertyName`,
    DROP COLUMN `propertyState`,
    DROP COLUMN `propertyStreet`,
    DROP COLUMN `propertyZip`;
