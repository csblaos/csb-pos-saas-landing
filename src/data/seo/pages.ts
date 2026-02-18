import type { Lang } from '../../lib/lang';

export type SeoPageKey =
    | 'home'
    | 'packages'
    | 'hardware'
    | 'solutions'
    | 'about'
    | 'blog'
    | 'help'
    | 'privacy'
    | 'terms'
    | 'demo'
    | 'checkout';

type LocalizedSeoContent = {
    title: string;
    description: string;
    image?: string;
};

type SeoPageMap = Record<SeoPageKey, Record<Lang, LocalizedSeoContent>>;

export const seoPages: SeoPageMap = {
    home: {
        en: {
            title: 'AstroPOS | POS for Facebook, TikTok, and WhatsApp Sellers',
            description: 'Manage sales, orders, and inventory from one POS built for social commerce.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'AstroPOS | ระบบ POS สำหรับร้านค้าออนไลน์',
            description: 'จัดการออเดอร์ สต๊อก และยอดขายจาก Facebook, TikTok และ WhatsApp ในที่เดียว',
            image: '/images/og/home.png'
        },
        la: {
            title: 'AstroPOS | ລະບົບ POS ສຳລັບຮ້ານອອນລາຍ',
            description: 'ຈັດການອໍເດີ, ສະຕ໋ອກ ແລະ ຍອດຂາຍຈາກ Facebook, TikTok ແລະ WhatsApp ໃນທີ່ດຽວ',
            image: '/images/og/home.png'
        }
    },
    packages: {
        en: {
            title: 'AstroPOS Packages | Pricing Plans for Growing Shops',
            description: 'Compare Starter, Professional, and Premium plans. Start free and scale when ready.',
            image: '/images/og/og-packages.png'
        },
        th: {
            title: 'แพ็กเกจ AstroPOS | ราคาและแผนการใช้งาน',
            description: 'เปรียบเทียบแพ็กเกจ Starter, Professional และ Premium พร้อมเริ่มใช้งานได้ทันที',
            image: '/images/og/og-packages.png'
        },
        la: {
            title: 'ແພັກເກດ AstroPOS | ລາຄາ ແລະ ແຜນການໃຊ້ງານ',
            description: 'ປຽບທຽບ Starter, Professional ແລະ Premium ເພື່ອເລືອກແຜນທີ່ເໝາະກັບຮ້ານ',
            image: '/images/og/og-packages.png'
        }
    },
    hardware: {
        en: {
            title: 'AstroPOS Hardware | Printers, Scanners, and Supplies',
            description: 'Shop compatible hardware for faster packing and order fulfillment.',
            image: '/images/og/og-hardware.png'
        },
        th: {
            title: 'อุปกรณ์ AstroPOS | เครื่องพิมพ์ สแกนเนอร์ และอุปกรณ์เสริม',
            description: 'เลือกซื้ออุปกรณ์ที่ใช้งานร่วมกับระบบ AstroPOS เพื่อแพ็กและจัดส่งได้เร็วขึ้น',
            image: '/images/og/og-hardware.png'
        },
        la: {
            title: 'ອຸປະກອນ AstroPOS | ເຄື່ອງພິມ, ສະແກນ ແລະ ອຸປະກອນເສີມ',
            description: 'ເລືອກອຸປະກອນທີ່ໃຊ້ຮ່ວມກັບ AstroPOS ເພື່ອຊ່ວຍໃຫ້ຈັດສົ່ງໄວຂຶ້ນ',
            image: '/images/og/og-hardware.png'
        }
    },
    solutions: {
        en: {
            title: 'AstroPOS Solutions | Multi-Channel Commerce Tools',
            description: 'Discover tools for social selling, analytics, shipping labels, and operations.',
            image: '/images/og/og-services.png'
        },
        th: {
            title: 'โซลูชัน AstroPOS | เครื่องมือสำหรับขายหลายช่องทาง',
            description: 'ครบทั้งการขายบนโซเชียล รายงาน การพิมพ์ใบปะหน้า และการจัดการหลังบ้าน',
            image: '/images/og/og-services.png'
        },
        la: {
            title: 'ໂຊລູຊັນ AstroPOS | ເຄື່ອງມືຂາຍຫຼາຍຊ່ອງທາງ',
            description: 'ຈັດການການຂາຍ, ລາຍງານ, ການພິມໃບຂົນສົ່ງ ແລະ ງານຫຼັງຮ້ານໃນລະບົບດຽວ',
            image: '/images/og/og-services.png'
        }
    },
    about: {
        en: {
            title: 'About AstroPOS | Built for Southeast Asia Sellers',
            description: 'Learn our mission, values, and support approach for growing online shops.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'เกี่ยวกับ AstroPOS | ระบบที่ออกแบบเพื่อร้านค้าในอาเซียน',
            description: 'รู้จักทีม วิสัยทัศน์ และแนวทางซัพพอร์ตของ AstroPOS',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ກ່ຽວກັບ AstroPOS | ສ້າງເພື່ອພໍ່ຄ້າໃນອາຊຽນ',
            description: 'ຮູ້ຈັກວິໄສທັດ ແລະ ແນວທາງການຊ່ວຍເຫຼືອຂອງ AstroPOS',
            image: '/images/og/home.png'
        }
    },
    blog: {
        en: {
            title: 'AstroPOS Blog | E-commerce Tips and Growth Playbooks',
            description: 'Read practical strategies to increase conversion, reduce COD risk, and scale operations.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'บล็อก AstroPOS | เทคนิคอีคอมเมิร์ซและการเติบโต',
            description: 'รวมแนวทางเพิ่มยอดขาย ลดปัญหา COD และทำงานให้เร็วขึ้น',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ບລັອກ AstroPOS | ເຄັດລັບ E-commerce ແລະ ການເຕີບໂຕ',
            description: 'ອ່ານເນື້ອຫາທີ່ຊ່ວຍເພີ່ມຍອດຂາຍ ແລະ ລົດຄວາມສ່ຽງ COD',
            image: '/images/og/home.png'
        }
    },
    help: {
        en: {
            title: 'AstroPOS Help Center | Guides and Support',
            description: 'Find setup guides, FAQs, and direct support channels for your store.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'ศูนย์ช่วยเหลือ AstroPOS | คู่มือและการซัพพอร์ต',
            description: 'ค้นหาคู่มือเริ่มต้น คำถามที่พบบ่อย และช่องทางติดต่อทีมซัพพอร์ต',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ສູນຊ່ວຍເຫຼືອ AstroPOS | ຄູ່ມື ແລະ ການຊ່ວຍເຫຼືອ',
            description: 'ເບິ່ງຄູ່ມື, FAQ ແລະ ຊ່ອງທາງຕິດຕໍ່ທີມງານ',
            image: '/images/og/home.png'
        }
    },
    privacy: {
        en: {
            title: 'Privacy Policy | AstroPOS',
            description: 'Understand how AstroPOS collects, uses, and protects your data.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'นโยบายความเป็นส่วนตัว | AstroPOS',
            description: 'รายละเอียดการเก็บ ใช้งาน และคุ้มครองข้อมูลผู้ใช้งาน AstroPOS',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ນະໂຍບາຍຄວາມເປັນສ່ວນໂຕ | AstroPOS',
            description: 'ລາຍລະອຽດການເກັບ ແລະ ການນຳໃຊ້ຂໍ້ມູນຂອງ AstroPOS',
            image: '/images/og/home.png'
        }
    },
    terms: {
        en: {
            title: 'Terms of Service | AstroPOS',
            description: 'Review AstroPOS service terms, payments, and user responsibilities.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'ข้อกำหนดการใช้งาน | AstroPOS',
            description: 'เงื่อนไขการใช้บริการ การชำระเงิน และความรับผิดชอบของผู้ใช้งาน',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ເງື່ອນໄຂການໃຊ້ບໍລິການ | AstroPOS',
            description: 'ເງື່ອນໄຂການໃຊ້ງານ, ການຊຳລະເງິນ ແລະ ຄວາມຮັບຜິດຊອບຜູ້ໃຊ້',
            image: '/images/og/home.png'
        }
    },
    demo: {
        en: {
            title: 'AstroPOS Demo | Try the Live POS Experience',
            description: 'Preview how AstroPOS works before starting your package.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'เดโม AstroPOS | ทดลองใช้งานระบบ POS',
            description: 'ดูการทำงานจริงของ AstroPOS ก่อนเลือกแพ็กเกจ',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ສາທິດ AstroPOS | ທົດລອງປະສົບການ POS',
            description: 'ເບິ່ງການເຮັດວຽກຈິງຂອງ AstroPOS ກ່ອນເລືອກແພັກເກດ',
            image: '/images/og/home.png'
        }
    },
    checkout: {
        en: {
            title: 'Checkout | AstroPOS',
            description: 'Complete your AstroPOS order and confirm payment securely.',
            image: '/images/og/home.png'
        },
        th: {
            title: 'ชำระเงิน | AstroPOS',
            description: 'ยืนยันคำสั่งซื้อและชำระเงินสำหรับแพ็กเกจ AstroPOS',
            image: '/images/og/home.png'
        },
        la: {
            title: 'ຊຳລະເງິນ | AstroPOS',
            description: 'ຢືນຢັນຄຳສັ່ງຊື້ ແລະ ຊຳລະເງິນຢ່າງປອດໄພ',
            image: '/images/og/home.png'
        }
    }
};
