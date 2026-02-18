import type { Lang } from '../lib/lang';

export interface Product {
    id: string;
    name: {
        en: string;
        th: string;
        la: string;
    };
    price: number;
    priceLak: number;
    description: {
        en: string;
        th: string;
        la: string;
    };
    image: string;
    badge?: {
        en: string;
        th: string;
        la: string;
    };
    category: 'printer' | 'scanner' | 'supplies';
    specs: string[];
}

export const hardwareProducts: Product[] = [
    {
        id: 'printer-x1',
        name: {
            en: 'AstroThermal X1',
            th: 'เครื่องพิมพ์ใบปะหน้า AstroThermal X1',
            la: 'ເຄື່ອງພິມໃບປະໜ້າ AstroThermal X1'
        },
        price: 1990,
        priceLak: 1400000,
        description: {
            en: 'Professional 100x150mm Label Printer. Bluetooth + USB Support. High speed printing.',
            th: 'เครื่องพิมพ์ใบปะหน้ามืออาชีพ 100x150mm รองรับ Bluetooth + USB พิมพ์เร็ว คมชัด',
            la: 'ເຄື່ອງພິມໃບປະໜ້າມືອາຊີບ 100x150mm ຮອງຮັບ Bluetooth + USB ພິມໄວ ຄົມຊັດ'
        },
        image: 'https://image.made-in-china.com/2f0j00HNyWCLctMkom/Restaurant-Handy-Handheld-Android-POS-Terminal-with-Fingerprint-Holder-GPRS-for-Bus.jpg',
        badge: {
            en: 'Best Seller',
            th: 'ขายดี',
            la: 'ຂາຍດີ'
        },
        category: 'printer',
        specs: ['Bluetooth 4.0', 'USB-C', '152mm/s Speed', 'Win/Mac/iOS/Android']
    },
    {
        id: 'scanner-pro',
        name: {
            en: 'ScanBolt Pro',
            th: 'เครื่องสแกนบาร์โค้ด ScanBolt Pro',
            la: 'ເຄື່ອງສະແກນບາໂຄດ ScanBolt Pro'
        },
        price: 890,
        priceLak: 620000,
        description: {
            en: 'Wireless 2D/QR Code Scanner. Long battery life and instant connection.',
            th: 'เครื่องสแกนไร้สาย อ่านได้ทั้ง 2D และ QR Code แบตอึด เชื่อมต่อง่าย',
            la: 'ເຄື່ອງສະແກນໄຮ້ສາຍ ອ່ານໄດ້ທັງ 2D ແລະ QR Code ແບັດທົນ ເຊື່ອມຕໍ່ງ່າຍ'
        },
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1000',
        category: 'scanner',
        specs: ['Wireless 2.4G', 'Bluetooth', 'QR/Barcodes', 'Rugged Design']
    },
    {
        id: 'paper-pack',
        name: {
            en: 'Thermal Paper (3 Rolls)',
            th: 'กระดาษความร้อน (แพ็ค 3 ม้วน)',
            la: 'ເຈ້ຍຄວາມຮ້ອນ (ແພັກ 3 ມ້ວນ)'
        },
        price: 250,
        priceLak: 175000,
        description: {
            en: 'Premium quality thermal paper. Water and oil resistant. 350 labels per roll.',
            th: 'กระดาษความร้อนเกรดพรีเมียม กันน้ำ กันน้ำมัน 350 แผ่นต่อม้วน',
            la: 'ເຈ້ຍຄວາມຮ້ອນເກດພີເມຍ ກັນນ້ຳ ກັນນ້ຳມັນ 350 ແຜ່ນຕໍ່ມ້ວນ'
        },
        image: 'https://th.bing.com/th/id/R.ae44fad9df735ae1692c1db8d5d3330b?rik=ONik0JJTvqC6EQ&riu=http%3a%2f%2fwww.zjiang.com%2fasset%2fupload%2f15536718248119.png&ehk=yyVh1BFDVAU2b8RE0B%2fZLJ5gLhcKYWeLfZHiWxSC5rI%3d&risl=&pid=ImgRaw&r=0',
        badge: {
            en: 'Value Pack',
            th: 'สุดคุ้ม',
            la: 'ສຸດຄຸ້ມ'
        },
        category: 'supplies',
        specs: ['100x150mm', 'Waterproof', 'Oil-proof', 'Scratch-resistant']
    }
];

export const getHardwareTranslations = (lang: Lang) => {
    return {
        tabs: {
            all: { en: 'All Items', th: 'ทั้งหมด', la: 'ທັງໝົດ' }[lang],
            printer: { en: 'Printers', th: 'เครื่องพิมพ์', la: 'ເຄື່ອງພິມ' }[lang],
            scanner: { en: 'Scanners', th: 'สแกนเนอร์', la: 'ສະແກນເນີ' }[lang],
            supplies: { en: 'Supplies', th: 'อุปกรณ์สิ้นเปลือง', la: 'ອຸປະກອນສິ້ນເປືອງ' }[lang],
        },
        price: { en: 'Price', th: 'ราคา', la: 'ລາຄາ' }[lang],
        buyNow: { en: 'View Details', th: 'ดูรายละเอียด', la: 'ເບິ່ງລາຍລະອຽດ' }[lang],
    };
};
