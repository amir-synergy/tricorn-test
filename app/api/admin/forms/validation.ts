import { z } from "zod";

export const SectionsSchema = z.object({
    arrangement: z
        .number()
        .min(1, 'Arrangement is required'),

    numeration: z
        .number()
        .min(1, 'Numeration is required'),

    title: z
        .string()
        .min(1, 'Description is required')
        .max(255),

    description: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    visible: z
        .boolean()
        .optional(),
});

export const SubSectionsSchema = z.object({
    sectionId: z
        .string()
        .min(1, 'SectionId is required'),

    arrangement: z
        .number()
        .min(1, 'Arrangement is required'),

    numeration: z
        .number()
        .min(1, 'Numeration is required'),

    title: z
        .string()
        .min(1, 'Description is required')
        .max(255),

    description: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    visible: z
        .boolean()
        .optional(),
});