import { z } from "zod";
import { InputTags, InputTypes } from "@prisma/client";

export const SectionsSchema = z.object({
    arrangement: z
        .number()
        .min(1, 'Arrangement is required'),

    numeration: z
        .number()
        .min(1, 'Numeration is required'),

    title: z
        .string()
        .min(1, 'Title is required')
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
        .min(1, 'Numeration can not be empty')
        .optional(),

    title: z
        .string()
        .min(1, 'Title can not be empty')
        .max(255)
        .optional(),

    description: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    visible: z
        .boolean()
        .optional(),
});

export const InputsSchema = z.object({
    sectionId: z
        .string()
        .min(1, 'SectionId can not be empty')
        .optional(),

    subSectionId: z
        .string()
        .min(1, 'SubSectionId can not be empty')
        .optional(),

    arrangement: z
        .number()
        .min(1, 'Arrangement is required'),

    title: z
        .string()
        .min(1)
        .max(255)
        .optional(),

    description: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    label: z
        .string()
        .min(1)
        .max(500)
        .optional(),

    tag: z.nativeEnum(InputTags),

    type: z
        .nativeEnum(InputTypes)
        .optional(),

    name: z
        .string()
        .min(1, 'Name is required')
        .max(255),

    value: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    placeholder: z
        .string()
        .min(1)
        .max(255)
        .optional(),

    accept: z
        .string()
        .min(1)
        .max(255)
        .optional(),

    options: z
        .string()
        .min(1)
        .max(65535)
        .optional(),

    max: z
        .number()
        .optional(),

    min: z
        .number()
        .optional(),

    maxLength: z
        .number()
        .optional(),

    minLength: z
        .number()
        .optional(),

    required: z
        .boolean()
        .optional(),

    multiple: z
        .boolean()
        .optional(),

    pattern: z
        .string()
        .min(1, 'Pattern cannot be empty')
        .max(255)
        .optional(),

    visible: z
        .boolean()
        .optional(),
});