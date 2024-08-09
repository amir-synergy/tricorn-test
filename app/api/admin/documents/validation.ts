import { z } from "zod";

export const DocumentsSchema = z.object({
    title: z
        .string()
        .min(1, 'Title cannot be empty')
        .max(255)
        .optional(),

    description: z
        .string()
        .min(1, 'Description cannot be empty')
        .max(65535)
        .optional(),

    url: z
        .string()
        .min(1, 'URL is required')
        .max(65535),
});