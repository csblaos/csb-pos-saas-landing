import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('AstroPOS Team'),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    'news': newsCollection,
};
