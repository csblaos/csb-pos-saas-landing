import { OGImageRoute } from 'astro-og-canvas';
import { hardwareProducts } from '../../data/hardware';
import { languages } from '../../lib/lang';

import fs from 'fs';
import path from 'path';

type Product = typeof hardwareProducts[0];
type Lang = keyof typeof languages;

// Helper to get product data with language
const pages: Record<string, { product: Product; lang: Lang }> = {};

hardwareProducts.forEach(product => {
    Object.keys(languages).forEach(lang => {
        pages[`${lang}/hardware/${product.id}`] = { product, lang: lang as Lang };
    });
});

const getFont = (filename: string) => {
    return fs.readFileSync(path.join(process.cwd(), 'public/fonts', filename));
};

// @ts-ignore
const route = await OGImageRoute({
    param: 'route',
    pages,
    getImageOptions: (path: any, page: any) => {
        // Cast page to the correct type since astro-og-canvas might not infer it perfectly with the dynamic pages object
        const { product, lang } = page as { product: Product; lang: Lang };
        return {
            title: product.name[lang],
            description: product.description[lang],
            bgGradient: [[0, 0, 0]], // Solid black background
            border: { color: [163, 230, 53], width: 20 }, // Lime border
            padding: 60,
            font: {
                title: {
                    size: 80,
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    weight: 'Black',
                    color: [255, 255, 255],
                },
                description: {
                    size: 40,
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    color: [200, 200, 200],
                }
            },
            logo: {
                path: './public/favicon.svg',
                size: [100],
            },
        };
    },
    fonts: [
        {
            name: 'Noto Sans Thai',
            data: getFont('NotoSansThai-Black.ttf'),
            weight: 900,
            style: 'normal',
        },
        {
            name: 'Noto Sans Thai',
            data: getFont('NotoSansThai-Regular.ttf'),
            weight: 400,
            style: 'normal',
        },
        {
            name: 'Noto Sans Lao',
            data: getFont('NotoSansLao-Black.ttf'),
            weight: 900,
            style: 'normal',
        },
        {
            name: 'Noto Sans Lao',
            data: getFont('NotoSansLao-Regular.ttf'),
            weight: 400,
            style: 'normal',
        },
    ],
} as any);

export const { getStaticPaths, GET } = route;
