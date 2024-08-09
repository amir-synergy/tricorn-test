import { z } from "zod";

export const ResponsesSchema = z.object({
    assessmentId: z
        .string()
        .min(1, 'Assessment ID is required')
        .max(255),

    step: z
        .string()
        .min(1, 'Step is required')
        .max(255),

    name: z
        .string()
        .min(1, 'Name is required')
        .max(255),

    value: z
        .string()
        .max(65535)
        .optional()
        .nullable(),
});