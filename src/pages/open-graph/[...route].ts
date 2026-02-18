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

// Helper to download image to temp file
const getType = (url: string) => {
    const ext = path.extname(url).split('?')[0];
    if (ext) return ext;
    return '.jpg';
};

const downloadImage = async (url: string, id: string) => {
    const tmpDir = path.join(process.cwd(), 'node_modules/.cache/og-images');
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
    }
    const ext = getType(url);
    const filename = `${id}${ext}`;
    const filePath = path.join(tmpDir, filename);

    if (fs.existsSync(filePath)) {
        return filePath;
    }

    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));
        return filePath;
    } catch (e) {
        console.error(`Failed to download image for ${id}:`, e);
        return path.join(process.cwd(), 'public/favicon.svg'); // Fallback
    }
};

// @ts-ignore
const route = await OGImageRoute({
    param: 'route',
    pages,
    getImageOptions: async (path: any, page: any) => {
        // Cast page to the correct type since astro-og-canvas might not infer it perfectly with the dynamic pages object
        const { product, lang } = page as { product: Product; lang: Lang };

        // Download product image to use as logo
        const productImagePath = await downloadImage(product.image, product.id);

        return {
            title: '', // User requested to remove large text
            description: '', // User requested to remove description
            bgGradient: [[10, 10, 10]], // Darker, premium black background
            border: { color: [163, 230, 53], width: 20 }, // Signature Lime Green Border
            padding: 20, // Reduce padding to maximize image space
            font: {
                title: {
                    size: 0, // Hide title
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    weight: 'Black',
                    color: [0, 0, 0, 0], // Transparent
                },
                description: {
                    size: 0, // Hide description
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    color: [0, 0, 0, 0], // Transparent
                }
            },
            logo: {
                path: productImagePath,
                size: [550], // Maximize product image size (vertical height of card is ~630px)
            },
            fonts: [
                process.cwd() + '/public/fonts/NotoSansThai-Black.ttf',
                process.cwd() + '/public/fonts/NotoSansThai-Regular.ttf',
                process.cwd() + '/public/fonts/NotoSansLao-Black.ttf',
                process.cwd() + '/public/fonts/NotoSansLao-Regular.ttf',
            ],
        };
    },
} as any);

export const { getStaticPaths, GET } = route;
