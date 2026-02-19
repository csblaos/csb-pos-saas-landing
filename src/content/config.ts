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

const adLocaleSchema = z.object({
    badge: z.string(),
    title: z.string(),
    desc: z.string(),
    cta: z.string(),
});

const adsCollection = defineCollection({
    schema: z.object({
        pubDate: z.date(),
        active: z.boolean().default(true),
        tier: z.enum(['normal', 'premium', 'platinum']).default('normal'),
        displayMode: z.enum(['card', 'image-only']).default('card'),
        type: z.enum(['promo', 'feature', 'demo', 'seasonal', 'case-study']).default('promo'),
        style: z.enum(['neo-dark', 'neo-light', 'neo-gradient', 'neo-blue']).default('neo-dark'),
        placements: z.array(z.enum(['blog-sidebar'])).default(['blog-sidebar']),
        ctaUrl: z.string(),
        bannerImage: z.string().optional(),
        content: z.object({
            en: adLocaleSchema,
            th: adLocaleSchema.optional(),
            la: adLocaleSchema.optional(),
        }),
    }),
});

export const collections = {
    'news': newsCollection,
    'ads': adsCollection,
};
