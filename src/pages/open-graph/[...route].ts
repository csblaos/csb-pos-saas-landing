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
            title: product.name[lang],
            description: product.description[lang],
            bgGradient: [[20, 20, 20]], // Dark gray background
            border: { color: [163, 230, 53], width: 20 }, // Lime border
            padding: 40,
            font: {
                title: {
                    size: 60,
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    weight: 'Black',
                    color: [255, 255, 255],
                },
                description: {
                    size: 30,
                    families: ['Noto Sans Thai', 'Noto Sans Lao', 'Inter'],
                    color: [200, 200, 200],
                }
            },
            logo: {
                path: productImagePath,
                size: [300], // Large size for product image
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
        };
    },
} as any);

export const { getStaticPaths, GET } = route;
