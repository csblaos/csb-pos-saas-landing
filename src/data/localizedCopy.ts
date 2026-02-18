import type { Lang } from '../lib/lang';

export const fromLang = <T extends Record<Lang, unknown>>(localized: T, lang: string): T[Lang] => {
  const key: Lang = (lang in localized ? lang : 'en') as Lang;
  return localized[key];
};

export const aboutPageCopy = {
  en: {
    badge: 'About Us',
    title: 'Built for social sellers who need speed.',
    subtitle:
      'AstroPOS helps merchants close orders faster, track stock in real-time, and ship with confidence.',
    missionTitle: 'Our Mission',
    missionBody:
      'Make modern POS tools simple for small and medium businesses in Southeast Asia.',
    visionTitle: 'Our Vision',
    visionBody:
      'Enable every seller to run their business from one clear, reliable system.',
    founded: 'Founded',
    based: 'Based in',
    support: 'Support',
    valuesTitle: 'What We Care About',
    value1Title: 'Speed',
    value1Body: 'Fast workflows that help teams process more orders every day.',
    value2Title: 'Reliability',
    value2Body: 'Stable tools that work consistently even in high-volume periods.',
    value3Title: 'Practical Support',
    value3Body: 'Real humans who help with setup, onboarding, and operations.',
    ctaTitle: 'Ready to grow with AstroPOS?',
    ctaWhatsapp: 'Chat with Sales',
    ctaPackages: 'View Packages',
  },
  th: {
    badge: 'เกี่ยวกับเรา',
    title: 'สร้างมาเพื่อร้านค้าที่ต้องการความเร็วในการขาย',
    subtitle:
      'AstroPOS ช่วยให้ปิดออเดอร์ไวขึ้น เช็กสต็อกแบบเรียลไทม์ และส่งของได้อย่างมั่นใจ',
    missionTitle: 'พันธกิจของเรา',
    missionBody:
      'ทำให้เครื่องมือ POS สมัยใหม่ใช้ง่ายสำหรับธุรกิจขนาดเล็กและกลางในเอเชียตะวันออกเฉียงใต้',
    visionTitle: 'วิสัยทัศน์ของเรา',
    visionBody:
      'ให้ทุกร้านค้าบริหารธุรกิจได้จากระบบเดียวที่ชัดเจนและเชื่อถือได้',
    founded: 'ก่อตั้งเมื่อ',
    based: 'ตั้งอยู่ที่',
    support: 'ซัพพอร์ต',
    valuesTitle: 'สิ่งที่เราให้ความสำคัญ',
    value1Title: 'ความเร็ว',
    value1Body: 'ขั้นตอนทำงานที่เร็วขึ้น ช่วยให้ทีมจัดการออเดอร์ได้มากขึ้นทุกวัน',
    value2Title: 'ความเสถียร',
    value2Body: 'ระบบที่ทำงานนิ่ง ใช้ได้ต่อเนื่องแม้ช่วงออเดอร์พุ่ง',
    value3Title: 'ซัพพอร์ตที่ใช้งานได้จริง',
    value3Body: 'มีทีมจริงคอยช่วยตั้งค่า เริ่มใช้งาน และแก้ปัญหาหน้างาน',
    ctaTitle: 'พร้อมโตไปกับ AstroPOS แล้วหรือยัง?',
    ctaWhatsapp: 'คุยกับฝ่ายขาย',
    ctaPackages: 'ดูแพ็กเกจ',
  },
  la: {
    badge: 'ກ່ຽວກັບພວກເຮົາ',
    title: 'ສ້າງມາເພື່ອຮ້ານຄ້າທີ່ຕ້ອງການຄວາມໄວໃນການຂາຍ',
    subtitle:
      'AstroPOS ຊ່ວຍໃຫ້ປິດອໍເດີໄດ້ໄວຂຶ້ນ ກວດສະຕັອກແບບເວລາຈິງ ແລະ ສົ່ງຂອງໄດ້ຢ່າງໝັ້ນໃຈ',
    missionTitle: 'ພາລະກິດຂອງພວກເຮົາ',
    missionBody:
      'ເຮັດໃຫ້ເຄື່ອງມື POS ສະໄໝໃໝ່ນຳໃຊ້ງ່າຍ ສຳລັບທຸລະກິດນ້ອຍ-ກາງໃນອາຊີຕາເວັນອອກສຽງໃຕ້',
    visionTitle: 'ວິໄສທັດຂອງພວກເຮົາ',
    visionBody:
      'ໃຫ້ທຸກຮ້ານຄ້າບໍລິຫານທຸລະກິດໄດ້ຈາກລະບົບດຽວທີ່ຊັດເຈນ ແລະ ໜ້າເຊື່ອຖື',
    founded: 'ເລີ່ມຕົ້ນ',
    based: 'ຕັ້ງຢູ່',
    support: 'ຊັບພອດ',
    valuesTitle: 'ສິ່ງທີ່ພວກເຮົາໃຫ້ຄວາມສຳຄັນ',
    value1Title: 'ຄວາມໄວ',
    value1Body: 'ຂັ້ນຕອນການເຮັດວຽກໄວຂຶ້ນ ຊ່ວຍໃຫ້ທີມຈັດການອໍເດີໄດ້ຫຼາຍຂຶ້ນ',
    value2Title: 'ຄວາມໝັ້ນຄົງ',
    value2Body: 'ລະບົບເຮັດວຽກນິ່ງ ແມ່ນຍຳ ແມ້ໃນຊ່ວງອໍເດີສູງ',
    value3Title: 'ຊັບພອດທີ່ນຳໃຊ້ໄດ້ຈິງ',
    value3Body: 'ມີທີມງານຈິງຊ່ວຍຕັ້ງຄ່າ ເລີ່ມໃຊ້ງານ ແລະ ແກ້ບັນຫາ',
    ctaTitle: 'ພ້ອມເຕີບໂຕໄປກັບ AstroPOS ຫຼືຍັງ?',
    ctaWhatsapp: 'ຄຸຍກັບຝ່າຍຂາຍ',
    ctaPackages: 'ເບິ່ງແພັກເກັດ',
  },
} as const;

export const aboutWhatsappMessage = {
  en: 'Hello, I want to learn more about AstroPOS.',
  th: 'สวัสดีครับ สนใจคุยรายละเอียดการใช้งาน AstroPOS',
  la: 'ສະບາຍດີ ຂ້ອຍສົນໃຈສອບຖາມລາຍລະອຽດການໃຊ້ງານ AstroPOS',
} as const;

export const blogIndexSidebarCopy = {
  en: {
    tags: 'Popular Topics',
    demoBadge: 'TRY IT',
    demoTitle: 'See AstroPOS in Action',
    demoDesc: 'Try our live POS demo. No signup needed.',
    demoCta: 'Open Demo ->',
    readArticle: 'Read ->',
    liveTitle: 'Orders Coming In',
    liveSubtitle: 'See orders flow in real-time from every channel.',
    liveCta: 'Start Free Trial ->',
  },
  th: {
    tags: 'หัวข้อยอดนิยม',
    demoBadge: 'ลองเลย',
    demoTitle: 'ดู AstroPOS ทำงานจริง',
    demoDesc: 'ลอง POS Demo สดๆ ไม่ต้องสมัคร',
    demoCta: 'เปิด Demo ->',
    readArticle: 'อ่าน ->',
    liveTitle: 'ออเดอร์กำลังเข้า',
    liveSubtitle: 'ดูออเดอร์ไหลเข้าจากทุกช่องทาง',
    liveCta: 'เริ่มทดลองฟรี ->',
  },
  la: {
    tags: 'ຫົວຂໍ້ຍອດນິຍົມ',
    demoBadge: 'ລອງເລີຍ',
    demoTitle: 'ເບິ່ງ AstroPOS ເຮັດວຽກຈິງ',
    demoDesc: 'ລອງ POS Demo ສົດໆ ບໍ່ຕ້ອງສະໝັກ',
    demoCta: 'ເປີດ Demo ->',
    readArticle: 'ອ່ານ ->',
    liveTitle: 'ອໍເດີກຳລັງເຂົ້າ',
    liveSubtitle: 'ເບິ່ງອໍເດີໄຫລເຂົ້າຈາກທຸກຊ່ອງທາງ',
    liveCta: 'ເລີ່ມທົດລອງຟຣີ ->',
  },
} as const;

export const blogPostCopy = {
  en: {
    shareTitle: 'Share this article',
    copy: 'Copy Link',
    copied: 'Copied!',
    back: 'Back to Blog',
    readNext: 'Read Next',
    related: 'Related Articles',
    liveTitle: 'Orders Coming In',
    liveSubtitle: 'See orders flow in real-time from every channel.',
    liveCta: 'Start Free Trial ->',
    demoBadge: 'TRY IT',
    demoTitle: 'See It In Action',
    demoDesc: 'Try our live POS demo.',
    demoCta: 'Open Demo ->',
  },
  th: {
    shareTitle: 'แชร์บทความนี้',
    copy: 'คัดลอกลิงก์',
    copied: 'คัดลอกแล้ว!',
    back: 'กลับไปหน้าบทความ',
    readNext: 'บทความแนะนำ',
    related: 'บทความที่เกี่ยวข้อง',
    liveTitle: 'ออเดอร์กำลังเข้า',
    liveSubtitle: 'ดูออเดอร์ไหลเข้าจากทุกช่องทาง',
    liveCta: 'เริ่มทดลองฟรี ->',
    demoBadge: 'ลองเลย',
    demoTitle: 'ดูการทำงานจริง',
    demoDesc: 'ลอง POS Demo สดๆ',
    demoCta: 'เปิด Demo ->',
  },
  la: {
    shareTitle: 'ແບ່ງປັນບົດຄວາມນີ້',
    copy: 'ຄັດລອກລິ້ງ',
    copied: 'ຄັດລອກແລ້ວ!',
    back: 'ກັບໄປໜ້າບົດຄວາມ',
    readNext: 'ບົດຄວາມແນະນຳ',
    related: 'ບົດຄວາມທີ່ກ່ຽວຂ້ອງ',
    liveTitle: 'ອໍເດີກຳລັງເຂົ້າ',
    liveSubtitle: 'ເບິ່ງອໍເດີໄຫລເຂົ້າຈາກທຸກຊ່ອງທາງ',
    liveCta: 'ເລີ່ມທົດລອງຟຣີ ->',
    demoBadge: 'ລອງເລີຍ',
    demoTitle: 'ເບິ່ງການເຮັດວຽກຈິງ',
    demoDesc: 'ລອງ POS Demo ສົດໆ',
    demoCta: 'ເປີດ Demo ->',
  },
} as const;

export const helpPageCopy = {
  en: {
    heroTitle: 'Help Center',
    heroSubtitle: 'How can we help you today?',
    searchPlaceholder: 'Search for help...',
    stuckTitle: 'Still stuck?',
    chatSupport: 'Chat Support',
    emailUs: 'Email Us',
    supportMessage: 'Hello, I need support with AstroPOS.',
  },
  th: {
    heroTitle: 'ศูนย์ช่วยเหลือ',
    heroSubtitle: 'เราจะช่วยอะไรคุณได้บ้าง?',
    searchPlaceholder: 'ค้นหาปัญหาของคุณ...',
    stuckTitle: 'ยังไม่เจอคำตอบ?',
    chatSupport: 'แชตซัพพอร์ต',
    emailUs: 'อีเมลหาเรา',
    supportMessage: 'สวัสดีครับ ต้องการติดต่อทีมซัพพอร์ต AstroPOS',
  },
  la: {
    heroTitle: 'ສູນຊ່ວຍເຫຼືອ',
    heroSubtitle: 'ເຮົາຊ່ວຍຫຍັງເຈົ້າໄດ້ແດ່?',
    searchPlaceholder: 'ຄົ້ນຫາບັນຫາຂອງທ່ານ...',
    stuckTitle: 'ຍັງບໍ່ພົບຄຳຕອບ?',
    chatSupport: 'ແຊັດຊັບພອດ',
    emailUs: 'ອີເມວຫາພວກເຮົາ',
    supportMessage: 'ສະບາຍດີ ຕ້ອງການຕິດຕໍ່ທີມຊັບພອດ AstroPOS',
  },
} as const;

export const helpCategoriesCopy = {
  en: [
    { title: 'Getting Started', desc: 'Setup your account and hardware' },
    { title: 'Video Tutorials', desc: 'Step-by-step video guides' },
    { title: 'FAQ', desc: 'Common questions & answers' },
  ],
  th: [
    { title: 'เริ่มต้นใช้งาน', desc: 'การตั้งค่าบัญชีและอุปกรณ์' },
    { title: 'วิดีโอสอนใช้งาน', desc: 'คู่มือการใช้งานแบบวิดีโอ' },
    { title: 'คำถามที่พบบ่อย', desc: 'รวมคำถามและคำตอบทั่วไป' },
  ],
  la: [
    { title: 'ເລີ່ມຕົ້ນການນຳໃຊ້', desc: 'ການຕັ້ງຄ່າບັນຊີ ແລະ ອຸປະກອນ' },
    { title: 'ວິດີໂອສອນການນຳໃຊ້', desc: 'ຄູ່ມືການນຳໃຊ້ແບບວິດີໂອ' },
    { title: 'ຄຳຖາມທີ່ພົບເລື້ອຍ', desc: 'ລວມຄຳຖາມ ແລະ ຄຳຕອບທົ່ວໄປ' },
  ],
} as const;

export const hardwareDetailCopy = {
  en: {
    back: 'Back to Shop',
    specs: 'Specifications',
    buy: 'Buy via WhatsApp',
    warrantyTitle: 'Warranty & Support',
    warrantyPoint1: '1-year warranty for factory defects',
    warrantyPoint2: 'Claim via WhatsApp with fast response',
    warrantyPoint3: 'Real support team after purchase',
    warrantyTerms: 'View warranty terms',
    shareTitle: 'Share this product',
    shareCopy: 'Copy Link',
    shareCopied: 'Copied!',
    rating: '(5.0/5.0 reviews)',
    trustLine: 'Secure Payment • Fast Shipping • 1 Year Warranty',
  },
  th: {
    back: 'กลับไปหน้าร้าน',
    specs: 'ข้อมูลจำเพาะ',
    buy: 'สั่งซื้อผ่าน WhatsApp',
    warrantyTitle: 'รับประกันและซัพพอร์ต',
    warrantyPoint1: 'รับประกัน 1 ปี กรณีเสียจากการผลิต',
    warrantyPoint2: 'เคลมผ่าน WhatsApp และตอบกลับเร็ว',
    warrantyPoint3: 'มีทีมดูแลหลังการขายจริง',
    warrantyTerms: 'ดูเงื่อนไขการรับประกัน',
    shareTitle: 'แชร์สินค้า',
    shareCopy: 'คัดลอกลิงก์',
    shareCopied: 'คัดลอกแล้ว!',
    rating: '(รีวิว 5.0/5.0)',
    trustLine: 'ชำระเงินปลอดภัย • ส่งไว • รับประกัน 1 ปี',
  },
  la: {
    back: 'ກັບໄປໜ້າຮ້ານ',
    specs: 'ຂໍ້ມູນຈຳເພາະ',
    buy: 'ສັ່ງຊື້ຜ່ານ WhatsApp',
    warrantyTitle: 'ຮັບປະກັນ ແລະ ຊັບພອດ',
    warrantyPoint1: 'ຮັບປະກັນ 1 ປີ ກໍລະນີເສຍຈາກໂຮງງານ',
    warrantyPoint2: 'ເຄລມຜ່ານ WhatsApp ແລະ ຕອບກັບໄວ',
    warrantyPoint3: 'ມີທີມຊ່ວຍເຫຼືອຫຼັງການຂາຍ',
    warrantyTerms: 'ເບິ່ງເງື່ອນໄຂການຮັບປະກັນ',
    shareTitle: 'ແບ່ງປັນສິນຄ້າ',
    shareCopy: 'ຄັດລອກລິ້ງ',
    shareCopied: 'ຄັດລອກແລ້ວ!',
    rating: '(ຣີວິວ 5.0/5.0)',
    trustLine: 'ຊຳລະເງິນປອດໄພ • ສົ່ງໄວ • ຮັບປະກັນ 1 ປີ',
  },
} as const;

export const buildHardwareWhatsappMessage = (
  lang: string,
  productName: string,
  priceLak: number,
  currentUrl: string,
) => {
  const builders: Record<Lang, (name: string, price: number, url: string) => string> = {
    en: (name, price, url) => `I'm interested in: ${name}\nPrice: ${price.toLocaleString()} LAK\n\n${url}`,
    th: (name, price, url) => `สนใจสินค้า: ${name}\nราคา: ${price.toLocaleString()} LAK\n\n${url}`,
    la: (name, price, url) => `ສົນໃຈສິນຄ້າ: ${name}\nລາຄາ: ${price.toLocaleString()} LAK\n\n${url}`,
  };
  return fromLang(builders, lang)(productName, priceLak, currentUrl);
};

export const hardwareGridCopy = {
  en: {
    tabs: {
      all: 'All Items',
      printer: 'Printers',
      scanner: 'Scanners',
      supplies: 'Supplies',
    },
    price: 'Price',
    buyNow: 'View Details',
  },
  th: {
    tabs: {
      all: 'ทั้งหมด',
      printer: 'เครื่องพิมพ์',
      scanner: 'สแกนเนอร์',
      supplies: 'อุปกรณ์สิ้นเปลือง',
    },
    price: 'ราคา',
    buyNow: 'ดูรายละเอียด',
  },
  la: {
    tabs: {
      all: 'ທັງໝົດ',
      printer: 'ເຄື່ອງພິມ',
      scanner: 'ສະແກນເນີ',
      supplies: 'ອຸປະກອນສິ້ນເປືອງ',
    },
    price: 'ລາຄາ',
    buyNow: 'ເບິ່ງລາຍລະອຽດ',
  },
} as const;

export const hardwareWarrantyCopy = {
  en: {
    badge: 'Official Warranty',
    title: 'Protected Purchase. Fast Support.',
    subtitle: 'Every hardware item includes clear warranty coverage and direct after-sales support.',
    point1: '1-year replacement for manufacturing defects',
    point2: 'Guided setup by our team after delivery',
    point3: 'Fast nationwide shipping and response',
    claim: 'Claim via WhatsApp',
    terms: 'View warranty terms',
    covered: 'Covered:',
    coveredItems: 'Factory defects, dead-on-arrival, non-user damage',
    notCovered: 'Not covered:',
    notCoveredItems: 'Drops, water damage, unauthorized modifications',
    supportLabel: 'Warranty Support',
  },
  th: {
    badge: 'รับประกันอย่างเป็นทางการ',
    title: 'ซื้อมั่นใจ มีทีมดูแลหลังการขาย',
    subtitle: 'อุปกรณ์ทุกชิ้นมีเงื่อนไขรับประกันชัดเจน และมีทีมช่วยเหลือหลังซื้อโดยตรง',
    point1: 'เปลี่ยนใหม่ภายใน 1 ปี กรณีเสียจากการผลิต',
    point2: 'มีทีมช่วยแนะนำการติดตั้งหลังรับสินค้า',
    point3: 'จัดส่งไว พร้อมตอบกลับรวดเร็วทั่วประเทศ',
    claim: 'เคลมผ่าน WhatsApp',
    terms: 'ดูเงื่อนไขการรับประกัน',
    covered: 'ครอบคลุม:',
    coveredItems: 'ความเสียหายจากการผลิต, สินค้าเสียตั้งแต่เปิดกล่อง, ความผิดปกติที่ไม่เกิดจากผู้ใช้',
    notCovered: 'ไม่ครอบคลุม:',
    notCoveredItems: 'ตกกระแทก, โดนน้ำ, ดัดแปลงอุปกรณ์เอง',
    supportLabel: 'ทีมเคลมและซัพพอร์ต',
  },
  la: {
    badge: 'ຮັບປະກັນທາງການ',
    title: 'ຊື້ແລ້ວໝັ້ນໃຈ ມີທີມດູແລຫຼັງການຂາຍ',
    subtitle: 'ອຸປະກອນທຸກຊິ້ນມີເງື່ອນໄຂການຮັບປະກັນຊັດເຈນ ແລະ ມີທີມຊ່ວຍເຫຼືອຫຼັງການຂາຍ',
    point1: 'ປ່ຽນໃໝ່ໃນ 1 ປີ ກໍລະນີຄວາມຜິດພາດຈາກໂຮງງານ',
    point2: 'ມີທີມຊ່ວຍແນະນຳການຕິດຕັ້ງຫຼັງຮັບສິນຄ້າ',
    point3: 'ຈັດສົ່ງໄວ ແລະ ຕອບກັບຮວດເລັວທົ່ວປະເທດ',
    claim: 'ເຄລມຜ່ານ WhatsApp',
    terms: 'ເບິ່ງເງື່ອນໄຂການຮັບປະກັນ',
    covered: 'ຄຸ້ມຄອງ:',
    coveredItems: 'ຄວາມເສຍຫາຍຈາກໂຮງງານ, ສິນຄ້າເສຍຕັ້ງແຕ່ເປີດກ່ອງ, ຄວາມຜິດປົກກະຕິທີ່ບໍ່ໄດ້ເກີດຈາກຜູ້ໃຊ້',
    notCovered: 'ບໍ່ຄຸ້ມຄອງ:',
    notCoveredItems: 'ຕົກກະແທກ, ໂດນນ້ຳ, ດັດແປງອຸປະກອນເອງ',
    supportLabel: 'ທີມເຄລມ ແລະ ຊັບພອດ',
  },
} as const;

export const hardwareWarrantyClaimMessage = {
  en: 'Hello, I need to claim warranty for AstroPOS hardware.',
  th: 'สวัสดีครับ ต้องการแจ้งเคลมอุปกรณ์ฮาร์ดแวร์ AstroPOS',
  la: 'ສະບາຍດີ ຕ້ອງການແຈ້ງເຄລມອຸປະກອນ Hardware AstroPOS',
} as const;

export const demoPreviewCopy = {
  en: {
    pending: 'Pending',
    shipped: 'Shipped',
    paid: 'Paid',
    order: 'Order',
    customer: 'Customer',
    channel: 'Channel',
    status: 'Status',
    total: 'Total',
    back: 'Go back to Orders',
  },
  th: {
    pending: 'รอโอน',
    shipped: 'ส่งแล้ว',
    paid: 'โอนแล้ว',
    order: 'ออเดอร์',
    customer: 'ลูกค้า',
    channel: 'ช่องทาง',
    status: 'สถานะ',
    total: 'ยอดรวม',
    back: 'กลับไปหน้ารายการ',
  },
  la: {
    pending: 'ລໍຖ້າໂອນ',
    shipped: 'ສົ່ງແລ້ວ',
    paid: 'ໂອນແລ້ວ',
    order: 'ອໍເດີ',
    customer: 'ລູກຄ້າ',
    channel: 'ຊ່ອງທາງ',
    status: 'ສະຖານະ',
    total: 'ລວມ',
    back: 'ກັບໄປໜ້າລາຍການ',
  },
} as const;

export const contactSectionCopy = {
  en: {
    title: 'Need Help Choosing The Right Plan?',
    subtitle: 'Talk to our team for setup, pricing, and onboarding support.',
    whatsapp: 'Chat on WhatsApp',
    demo: 'Open POS Demo',
    about: 'About AstroPOS',
    direct: 'Direct Contact',
    sales: 'Sales',
    support: 'Support',
    response: 'Avg. response within 10 minutes',
  },
  th: {
    title: 'ยังไม่แน่ใจว่าแพ็กเกจไหนเหมาะ?',
    subtitle: 'คุยกับทีมเราได้ทันที เรื่องราคา การติดตั้ง และการเริ่มต้นใช้งาน',
    whatsapp: 'คุยผ่าน WhatsApp',
    demo: 'เปิด POS Demo',
    about: 'รู้จัก AstroPOS',
    direct: 'ติดต่อโดยตรง',
    sales: 'ฝ่ายขาย',
    support: 'ฝ่ายซัพพอร์ต',
    response: 'ตอบกลับเฉลี่ยภายใน 10 นาที',
  },
  la: {
    title: 'ຍັງບໍ່ແນ່ໃຈວ່າແພັກເກັດໃດເໝາະ?',
    subtitle: 'ຄຸຍກັບທີມງານໄດ້ທັນທີ ເລື່ອງລາຄາ ການຕິດຕັ້ງ ແລະ ການເລີ່ມໃຊ້ງານ',
    whatsapp: 'ຄຸຍຜ່ານ WhatsApp',
    demo: 'ເປີດ POS Demo',
    about: 'ຮູ້ຈັກ AstroPOS',
    direct: 'ຕິດຕໍ່ໂດຍກົງ',
    sales: 'ຝ່າຍຂາຍ',
    support: 'ຝ່າຍຊັບພອດ',
    response: 'ຕອບກັບສະເລ່ຍໃນ 10 ນາທີ',
  },
} as const;

export const contactSectionMessage = {
  en: 'Hello, I need help choosing the best package for my store.',
  th: 'สวัสดีครับ สนใจขอคำแนะนำแพ็กเกจที่เหมาะกับร้านของผม',
  la: 'ສະບາຍດີ ຂ້ອຍສົນໃຈຂໍຄຳແນະນຳແພັກເກັດທີ່ເໝາະກັບຮ້ານຂອງຂ້ອຍ',
} as const;

export const footerHelpCenterCopy = {
  en: 'Help Center',
  th: 'ช่วยเหลือ',
  la: 'ຊ່ວຍເຫຼືອ',
} as const;

export const homeBusinessTypeCopy = {
  en: {
    title: 'Who is AstroPOS for?',
    retail: 'Retail Stores',
    cafe: 'Cafe & Restaurant',
    service: 'Service Business',
  },
  th: {
    title: 'ระบบนี้เหมาะกับใคร?',
    retail: 'ร้านค้าปลีก',
    cafe: 'ร้านอาหาร & คาเฟ่',
    service: 'ธุรกิจบริการ',
  },
  la: {
    title: 'ລະບົບນີ້ເຫມາະກັບໃຜ?',
    retail: 'ຮ້ານຂາຍຍ່ອຍ',
    cafe: 'ຮ້ານອາຫານ & ຄາເຟ່',
    service: 'ທຸລະກິດບໍລິການ',
  },
} as const;

export const pricingLeadFormCopy = {
  en: {
    title: 'Send Package Details',
    subtitle: 'Fill quick details to help our team respond faster.',
    packageLabel: 'Package',
    periodLabel: 'Billing',
    totalLabel: 'Total',
    contactName: 'Your Name',
    storeName: 'Store Name',
    phone: 'Phone Number',
    contactPlaceholder: 'e.g. John',
    storePlaceholder: 'e.g. John Mart',
    phonePlaceholder: 'e.g. 020XXXXXXXX',
    requiredName: 'Please enter your name',
    sendWithDetails: 'Send with Details',
    sendQuick: 'Quick Send',
    trialBadge: 'FREE 14 DAYS',
    trialHint: 'Starter includes a 14-day free trial before you decide.',
    close: 'Close',
  },
  th: {
    title: 'ส่งรายละเอียดแพ็กเกจ',
    subtitle: 'กรอกข้อมูลสั้นๆ เพื่อให้ทีมตอบกลับได้ไวขึ้น',
    packageLabel: 'แพ็กเกจ',
    periodLabel: 'รอบบิล',
    totalLabel: 'ยอดรวม',
    contactName: 'ชื่อผู้ติดต่อ',
    storeName: 'ชื่อร้าน',
    phone: 'เบอร์โทร',
    contactPlaceholder: 'เช่น สมชาย',
    storePlaceholder: 'เช่น ร้านสมชาย',
    phonePlaceholder: 'เช่น 020XXXXXXXX',
    requiredName: 'กรุณากรอกชื่อผู้ติดต่อ',
    sendWithDetails: 'ส่งพร้อมข้อมูล',
    sendQuick: 'ส่งด่วน',
    trialBadge: 'ทดลองใช้ฟรี 14 วัน',
    trialHint: 'แพ็กเกจ Starter เริ่มใช้ฟรี 14 วัน ก่อนตัดสินใจ',
    close: 'ปิด',
  },
  la: {
    title: 'ສົ່ງລາຍລະອຽດແພັກເກັດ',
    subtitle: 'ກອກຂໍ້ມູນສັ້ນໆ ເພື່ອໃຫ້ທີມຕອບໄວຂຶ້ນ',
    packageLabel: 'ແພັກເກັດ',
    periodLabel: 'ຮອບບິນ',
    totalLabel: 'ລວມ',
    contactName: 'ຊື່ຜູ້ຕິດຕໍ່',
    storeName: 'ຊື່ຮ້ານ',
    phone: 'ເບີໂທ',
    contactPlaceholder: 'ເຊັ່ນ Somchai',
    storePlaceholder: 'ເຊັ່ນ Somchai Mart',
    phonePlaceholder: 'ເຊັ່ນ 020XXXXXXXX',
    requiredName: 'ກະລຸນາກອກຊື່ຜູ້ຕິດຕໍ່',
    sendWithDetails: 'ສົ່ງພ້ອມຂໍ້ມູນ',
    sendQuick: 'ສົ່ງດ່ວນ',
    trialBadge: 'ທົດລອງຟຣີ 14 ມື້',
    trialHint: 'ແພັກເກັດ Starter ເລີ່ມທົດລອງຟຣີ 14 ມື້ ກ່ອນຕັດສິນໃຈ',
    close: 'ປິດ',
  },
} as const;

export const buildPricingSelectMessage = (
  lang: string,
  planName: string,
  formattedPrice: string,
  period: string,
  bonus: string,
  lead?: {
    contactName?: string;
    storeName?: string;
    phone?: string;
  },
) => {
  const clean = {
    contactName: lead?.contactName?.trim() ?? '',
    storeName: lead?.storeName?.trim() ?? '',
    phone: lead?.phone?.trim() ?? '',
  };

  const hasLead = clean.contactName || clean.storeName || clean.phone;

  const builders: Record<Lang, (name: string, price: string, periodLabel: string, bonusText: string) => string> = {
    en: (name, price, periodLabel, bonusText) => {
      let message = `Hello, I want to subscribe to *${name} Plan* (${price} LAK / ${periodLabel})${bonusText}\n\nPlease send me payment details.`;
      if (hasLead) {
        message += `\n\nLead Details:\nContact: ${clean.contactName || '-'}\nStore: ${clean.storeName || '-'}\nPhone: ${clean.phone || '-'}`;
      }
      return message;
    },
    th: (name, price, periodLabel, bonusText) => {
      let message = `สวัสดี สนใจแพ็กเกจ *${name}* (${price}₭ / ${periodLabel})${bonusText}\n\nขอรายละเอียดการชำระเงินด้วยครับ`;
      if (hasLead) {
        message += `\n\nข้อมูลผู้สนใจ:\nชื่อผู้ติดต่อ: ${clean.contactName || '-'}\nชื่อร้าน: ${clean.storeName || '-'}\nเบอร์โทร: ${clean.phone || '-'}`;
      }
      return message;
    },
    la: (name, price, periodLabel, bonusText) => {
      let message = `ສະບາຍດີ ສົນໃຈແພັກເກັດ *${name}* (${price}₭ / ${periodLabel})${bonusText}\n\nຂໍລາຍລະອຽດການຊຳລະເງິນແດ່`;
      if (hasLead) {
        message += `\n\nຂໍ້ມູນຜູ້ສົນໃຈ:\nຊື່ຜູ້ຕິດຕໍ່: ${clean.contactName || '-'}\nຊື່ຮ້ານ: ${clean.storeName || '-'}\nເບີໂທ: ${clean.phone || '-'}`;
      }
      return message;
    },
  };
  return fromLang(builders, lang)(planName, formattedPrice, period, bonus);
};
