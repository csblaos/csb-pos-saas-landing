import type { Lang } from '../lib/lang';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.packages': 'Pricing',
    'nav.services': 'Services',
    'nav.hardware': 'Shop',
    'nav.news': 'News',
    'nav.demo': 'Demo',

    // Hero Section
    'hero.headline': 'Sell Everywhere.\nManage in One Place.',
    'hero.subheadline': 'The ultimate POS for Facebook, TikTok, and WhatsApp sellers. No backend required.',
    'hero.cta.start': 'Start Free Trial',
    'hero.cta.demo': 'View Live Demo',
    'hero.trusted': 'Trusted by 1,000+ shops in SEA',

    // Features
    'features.title': 'Why Sellers Love Us?',
    'features.subtitle': 'Built for speed. Designed for profit.',
    'features.smartPaste': 'Smart Paste',
    'features.smartPaste.desc': 'Paste address from chat. AI auto-fills name, phone, and address instantly.',
    'features.codManagement': 'COD Management',
    'features.codManagement.desc': 'Track Cash on Delivery status. Know exactly when money hits your account.',
    'features.realTimeStock': 'Real-time Stock',
    'features.realTimeStock.desc': 'Inventory cuts automatically across all channels. Never oversell again.',
    'features.instantLabels': 'Instant Labels',
    'features.instantLabels.desc': 'Print shipping labels in one click. Supports standard thermal printers.',
    'features.customerHistory': 'Customer History',
    'features.customerHistory.desc': 'See previous orders and bad behavior tags (Blacklist) before you ship.',
    'features.secureStable': 'Secure & Stable',
    'features.secureStable.desc': '100% Static site architecture means zero downtime and blazing speed.',

    // How It Works
    'howItWorks.title': 'HOW IT WORKS',
    'howItWorks.step1': '1. Paste Order',
    'howItWorks.step1.desc': 'Copy text from Chat. Paste into AstroPOS.',
    'howItWorks.step2': '2. Verify Details',
    'howItWorks.step2.desc': 'System auto-extracts name, address, phone. You just confirm.',
    'howItWorks.step3': '3. Ship & Profit',
    'howItWorks.step3.desc': 'Print label and track delivery. Get paid.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Invest in your business. Cancel anytime.',
    'pricing.select': 'Select Plan',
    'pricing.popular': 'Best Value',
    'pricing.compareFeatures': 'Compare All Features',
    'pricing.readyToStart': 'Ready to Start?',
    'pricing.youSelected': 'You selected:',
    'pricing.plan': 'Plan',
    'pricing.noCreditCard': 'No credit card required for trial.',
    'pricing.confirm': 'Apply via WhatsApp',
    'pricing.checkout': 'Go to Checkout',
    'pricing.perMonth': 'Per Month',

    // Package Features (Starter)
    'pricing.starter.shops': '1 Shop',
    'pricing.starter.users': '1-2 Users',
    'pricing.starter.reports': 'Basic Reports',
    'pricing.starter.channels': 'Facebook Only',

    // Package Features (Pro)
    'pricing.pro.shops': '1 Shop',
    'pricing.pro.users': '3-5 Users',
    'pricing.pro.channels': 'All Channels (FB/TikTok/Line)',
    'pricing.pro.labels': 'Print Labels',
    'pricing.pro.reports': 'Advanced Reports',

    // Package Features (Business)
    'pricing.business.shops': 'Unlimited Shops',
    'pricing.business.users': 'Unlimited Users',
    'pricing.business.rbac': 'RBAC Roles',
    'pricing.business.api': 'API Access',
    'pricing.business.support': 'Dedicated Support',

    // FAQ
    'faq.title': 'FAQ',
    'faq.q1': 'Is there a free trial?',
    'faq.a1': 'Yes! You can try AstroPOS for 14 days completely free. No credit card required.',
    'faq.q2': 'Can I use my own domain?',
    'faq.a2': 'Yes, on the Business plan you can connect your custom domain (e.g., shop.yourbrand.com).',
    'faq.q3': 'Do you support thermal printers?',
    'faq.a3': 'Absolutely. We support all standard 100x150mm thermal printers via Bluetooth or USB.',

    // Services Page
    'services.title': 'More Than Just a POS',
    'services.subtitle': 'We provide a complete ecosystem for modern social sellers.',
    'services.multiChannel': 'Multi-Channel Sync',
    'services.multiChannel.desc': 'Connect Facebook Page, Line OA, and TikTok Shop in one dashboard. Reply to chats and create orders without switching apps.',
    'services.analytics': 'Advanced Analytics',
    'services.analytics.desc': 'Know your best selling products, peak hours, and customer retention rates. Export reports to Excel easily.',
    'services.shipping': 'Instant Shipping Labels',
    'services.shipping.desc': 'Generate Flash/Kerry/J&T tracking numbers instantly. Print 100x150mm labels via Bluetooth or USB.',
    'services.freeWebsite': 'Free Shop Website',
    'services.freeWebsite.desc': 'Get a free [yourname].astropos.shop website for customers to browse catalog and self-checkout.',
    'services.enterprise.title': 'Need a Custom Solution?',
    'services.enterprise.desc': 'We offer API integrations, white-label solutions, and dedicated support for enterprise clients.',
    'services.enterprise.cta': 'Contact Enterprise Sales',

    // Packages Page
    'packages.title': 'Choose Your Weapon',
    'packages.subtitle': 'Fair prices. No hidden fees. Cancel anytime.',
    'packages.comparison.title': 'Feature Comparison',
    'packages.comparison.users': 'Users',
    'packages.comparison.channels': 'Channels',
    'packages.comparison.printer': 'Printer Support',
    'packages.comparison.stock': 'Stock Sync',
    'packages.comparison.domain': 'Custom Domain',
    'packages.comparison.support': 'Priority Support',

    // Footer
    'footer.copyright': '© 2024 AstroPOS. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',

    // Demo
    'demo.title': 'Try it yourself.',
    'demo.subtitle': 'Experience the speed of AstroPOS. No login required.',
    'demo.back': 'Back to Orders',
    // Hardware Page
    'hardware.hero.title': 'Pro Gear for',
    'hardware.hero.title.highlight': 'Pro Sellers',
    'hardware.hero.subtitle': 'Official hardware tested and guaranteed to work perfectly with AstroPOS.',
    'hardware.warranty.title': '1 Year Warranty',
    'hardware.warranty.desc': 'Free replacement for any defects.',
    'hardware.shipping.title': 'Fast Shipping',
    'hardware.shipping.desc': 'Nationwide delivery within 2-3 days.',
    'hardware.setup.title': 'Remote Setup',
    'hardware.setup.desc': 'We help you set up remotely via TeamViewer.',
  },
  th: {
    // Navigation
    'nav.home': 'หน้าหลัก',
    'nav.packages': 'ราคา',
    'nav.services': 'บริการ',
    'nav.hardware': 'ร้านค้า',
    'nav.news': 'บทความ',
    'nav.demo': 'ลองใช้ระบบ',

    // Hero Section
    'hero.headline': 'ขายได้ทุกที่\nจัดการง่ายในที่เดียว',
    'hero.subheadline': 'ระบบ POS ที่ออกแบบมาเพื่อร้านค้า Facebook, TikTok และ WhatsApp โดยเฉพาะ ไม่ต้องมีความรู้เทคนิคก็ใช้ได้',
    'hero.cta.start': 'ทดลองใช้ฟรี',
    'hero.cta.demo': 'ดูตัวอย่างระบบ',
    'hero.trusted': 'ไว้วางใจโดยร้านค้ากว่า 1,000+ แห่ง',

    // Features
    'features.title': 'ทำไมต้อง AstroPOS?',
    'features.subtitle': 'เร็ว แรง เสถียร ช่วยให้คุณปิดการขายได้ไวกว่าเดิม',
    'features.smartPaste': 'ดูดที่อยู่จากแชท',
    'features.smartPaste.desc': 'ก๊อปปี้ที่อยู่ลูกค้ามาวาง ระบบแยกชื่อ-ที่อยู่-เบอร์โทรให้อัตโนมัติ',
    'features.codManagement': 'จัดการ COD',
    'features.codManagement.desc': 'ติดตามสถานะเก็บเงินปลายทาง รู้ทันทีว่าเงินเข้าบัญชีเมื่อไหร่',
    'features.realTimeStock': 'สต็อกแบบเรียลไทม์',
    'features.realTimeStock.desc': 'สินค้าตัดสต็อกอัตโนมัติทุกช่องทาง ไม่มีขายเกินสต็อกอีกต่อไป',
    'features.instantLabels': 'พิมพ์ใบปะหน้าทันที',
    'features.instantLabels.desc': 'พิมพ์ใบปะหน้าพัสดุได้ในคลิกเดียว รองรับเครื่องพิมพ์ความร้อนทั่วไป',
    'features.customerHistory': 'ประวัติลูกค้า',
    'features.customerHistory.desc': 'ดูออเดอร์เก่าและแท็กพฤติกรรมไม่ดี (Blacklist) ก่อนส่งของ',
    'features.secureStable': 'ปลอดภัย เสถียร',
    'features.secureStable.desc': 'สถาปัตยกรรมแบบ Static 100% หมายถึงไม่มีดาวน์ไทม์และความเร็วสูงสุด',

    // How It Works
    'howItWorks.title': 'วิธีการใช้งาน',
    'howItWorks.step1': '1. วางออเดอร์',
    'howItWorks.step1.desc': 'ก๊อปปี้ข้อความจากแชท วางใน AstroPOS',
    'howItWorks.step2': '2. ตรวจสอบข้อมูล',
    'howItWorks.step2.desc': 'ระบบแยกชื่อ ที่อยู่ เบอร์โทรให้อัตโนมัติ คุณแค่ยืนยัน',
    'howItWorks.step3': '3. ส่งของ รับเงิน',
    'howItWorks.step3.desc': 'พิมพ์ใบปะหน้า ติดตามพัสดุ รับเงิน',

    // Pricing
    'pricing.title': 'ราคาที่จริงใจ ไม่มีหมกเม็ด',
    'pricing.subtitle': 'คุ้มค่าแก่การลงทุน ยกเลิกเมื่อไหร่ก็ได้',
    'pricing.select': 'เลือกแพ็กเกจนี้',
    'pricing.popular': 'ขายดีที่สุด',
    'pricing.compareFeatures': 'เปรียบเทียบฟีเจอร์ทั้งหมด',
    'pricing.readyToStart': 'พร้อมเริ่มต้นแล้วใช่ไหม?',
    'pricing.youSelected': 'คุณเลือก:',
    'pricing.plan': 'แพ็กเกจ',
    'pricing.noCreditCard': 'ไม่ต้องใส่บัตรเครดิตสำหรับทดลองใช้',
    'pricing.confirm': 'สมัครผ่าน WhatsApp',
    'pricing.checkout': 'ไปชำระเงิน',
    'pricing.perMonth': 'ต่อเดือน',

    // Package Features (Starter)
    'pricing.starter.shops': '1 ร้านค้า',
    'pricing.starter.users': '1-2 ผู้ใช้',
    'pricing.starter.reports': 'รายงานพื้นฐาน',
    'pricing.starter.channels': 'Facebook เท่านั้น',

    // Package Features (Pro)
    'pricing.pro.shops': '1 ร้านค้า',
    'pricing.pro.users': '3-5 ผู้ใช้',
    'pricing.pro.channels': 'ทุกช่องทาง (FB/TikTok/Line)',
    'pricing.pro.labels': 'พิมพ์ใบปะหน้า',
    'pricing.pro.reports': 'รายงานขั้นสูง',

    // Package Features (Business)
    'pricing.business.shops': 'ร้านค้าไม่จำกัด',
    'pricing.business.users': 'ผู้ใช้ไม่จำกัด',
    'pricing.business.rbac': 'กำหนดสิทธิ์ผู้ใช้ (RBAC)',
    'pricing.business.api': 'เชื่อมต่อ API',
    'pricing.business.support': 'ทีมซัพพอร์ตส่วนตัว',

    // FAQ
    'faq.title': 'คำถามที่พบบ่อย',
    'faq.q1': 'มีทดลองใช้ฟรีไหม?',
    'faq.a1': 'มีครับ! ทดลองใช้ AstroPOS ฟรี 14 วัน ไม่ต้องใส่บัตรเครดิต',
    'faq.q2': 'ใช้โดเมนของตัวเองได้ไหม?',
    'faq.a2': 'ได้ครับ ในแพ็กเกจ Business สามารถเชื่อมต่อโดเมนของคุณเองได้ (เช่น shop.yourbrand.com)',
    'faq.q3': 'รองรับเครื่องพิมพ์ความร้อนไหม?',
    'faq.a3': 'รองรับครับ เครื่องพิมพ์ความร้อน 100x150mm ทุกรุ่น ทั้งแบบ Bluetooth และ USB',

    // Services Page
    'services.title': 'มากกว่าแค่ระบบ POS',
    'services.subtitle': 'เราให้บริการระบบครบวงจรสำหรับร้านค้าออนไลน์ยุคใหม่',
    'services.multiChannel': 'เชื่อมต่อหลายช่องทาง',
    'services.multiChannel.desc': 'เชื่อม Facebook Page, Line OA และ TikTok Shop ในแดชบอร์ดเดียว ตอบแชทและสร้างออเดอร์โดยไม่ต้องสลับแอป',
    'services.analytics': 'วิเคราะห์ข้อมูลขั้นสูง',
    'services.analytics.desc': 'รู้ว่าสินค้าไหนขายดี ช่วงเวลาไหนยอดขายสูง และอัตราลูกค้าประจำ ส่งออกรายงานเป็น Excel ได้ง่าย',
    'services.shipping': 'พิมพ์ใบปะหน้าทันที',
    'services.shipping.desc': 'สร้างเลขพัสดุ Flash/Kerry/J&T ได้ทันที พิมพ์ใบปะหน้า 100x150mm ผ่าน Bluetooth หรือ USB',
    'services.freeWebsite': 'เว็บไซต์ร้านค้าฟรี',
    'services.freeWebsite.desc': 'รับเว็บไซต์ [ชื่อคุณ].astropos.shop ฟรี ให้ลูกค้าดูสินค้าและชำระเงินเองได้',
    'services.enterprise.title': 'ต้องการโซลูชันพิเศษ?',
    'services.enterprise.desc': 'เรามี API integration, white-label solution และทีมซัพพอร์ตเฉพาะสำหรับองค์กรขนาดใหญ่',
    'services.enterprise.cta': 'ติดต่อฝ่ายองค์กร',

    // Packages Page
    'packages.title': 'เลือกแพ็กเกจที่ใช่',
    'packages.subtitle': 'ราคายุติธรรม ไม่มีค่าใช้จ่ายแอบแฝง ยกเลิกได้ทุกเมื่อ',
    'packages.comparison.title': 'เปรียบเทียบฟีเจอร์',
    'packages.comparison.users': 'จำนวนผู้ใช้',
    'packages.comparison.channels': 'ช่องทางขาย',
    'packages.comparison.printer': 'รองรับเครื่องพิมพ์',
    'packages.comparison.stock': 'ซิงค์สต็อก',
    'packages.comparison.domain': 'โดเมนของตัวเอง',
    'packages.comparison.support': 'ซัพพอร์ตพิเศษ',

    // Footer
    'footer.copyright': '© 2024 AstroPOS สงวนลิขสิทธิ์',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'footer.terms': 'ข้อตกลงการใช้งาน',

    // Testimonials
    'testimonials.title': 'เสียงจากผู้ใช้งาน',
    'testimonials.subtitle': 'เรื่องราวความสำเร็จจากร้านค้าที่เติบโตไปกับเรา',
    'testimonials.quote.best.pos.ever': 'นี่คือระบบ POS ที่ดีที่สุดเท่าที่เคยใช้มา ติดตั้งเสร็จใน 5 นาที!',
    'testimonials.quote.saved.my.time': 'เมื่อก่อนเสียวันละ 4 ชม. ทำบัญชี ตอนนี้เหลือแค่ 30 นาทีเอง',
    'testimonials.quote.easy.to.use': 'ขนาดอาม่ายังใช้เป็น ง่ายและเร็วมากๆ ระบบเสถียรสุดๆ',

    // Demo
    'demo.title': 'ลองเล่นให้เห็นกับตา',
    'demo.subtitle': 'สัมผัสความเร็วของ AstroPOS ด้วยตัวเอง ไม่ต้องสมัครสมาชิก',
    'demo.back': 'กลับไปหน้ารายการ',
    // Hardware Page
    'hardware.hero.title': 'อุปกรณ์มือโปร สำหรับ',
    'hardware.hero.title.highlight': 'แม่ค้ามือโปร',
    'hardware.hero.subtitle': 'ฮาร์ดแวร์ที่เราคัดมาแล้วว่า "เสถียร" และทำงานร่วมกับ AstroPOS ได้ 100%',
    'hardware.warranty.title': 'รับประกัน 1 ปี',
    'hardware.warranty.desc': 'เสียเปลี่ยนตัวใหม่ให้ทันที',
    'hardware.shipping.title': 'ส่งไวทั่วไทย',
    'hardware.shipping.desc': 'ถึงมือภายใน 2-3 วันทำการ',
    'hardware.setup.title': 'ติดตั้งฟรี',
    'hardware.setup.desc': 'เราช่วยตั้งค่าผ่าน TeamViewer ให้ฟรี',
  },
  la: {
    // Navigation
    'nav.home': 'ໜ້າຫຼັກ',
    'nav.packages': 'ລາຄາ',
    'nav.services': 'ບໍລິການ',
    'nav.hardware': 'ຮ້ານຄ້າ',
    'nav.news': 'ຂ່າວສານ',
    'nav.demo': 'ທົດລອງໃຊ້',

    // Hero Section
    'hero.headline': 'ຂາຍໄດ້ທຸກບ່ອນ\nຈັດການງ່າຍໃນບ່ອນດຽວ',
    'hero.subheadline': 'ລະບົບ POS ສຳລັບຮ້ານຄ້າ Facebook, TikTok ແລະ WhatsApp. ບໍ່ຕ້ອງມີຄວາມຮູ້ໄອທີກໍໃຊ້ໄດ້.',
    'hero.cta.start': 'ທົດລອງໃຊ້ຟຣີ',
    'hero.cta.demo': 'ເບິ່ງຕົວຢ່າງ',
    'hero.trusted': 'ໄວ້ວາງໃຈໂດຍຮ້ານຄ້າກວ່າ 1,000+ ແຫ່ງ',

    // Features
    'features.title': 'ເປັນຫຍັງຕ້ອງ AstroPOS?',
    'features.subtitle': 'ໄວ, ແຮງ, ໝັ້ນຄົງ ຊ່ວຍໃຫ້ເຈົ້າປິດການຂາຍໄດ້ໄວຂຶ້ນ.',
    'features.smartPaste': 'ດູດທີ່ຢູ່ຈາກແຊັດ',
    'features.smartPaste.desc': 'ກຶບທີ່ຢູ່ລູກຄ້າວາງໃສ່ ລະບົບແຍກຊື່, ທີ່ຢູ່, ເບີໂທ ໃຫ້ອັດຕະໂນມັດ.',
    'features.codManagement': 'ຈັດການ COD',
    'features.codManagement.desc': 'ຕິດຕາມສະຖານະເກັບເງິນປາຍທາງ ຮູ້ທັນທີວ່າເງິນເຂົ້າບັນຊີເມື່ອໃດ',
    'features.realTimeStock': 'ສະຕັອກແບບ Real-time',
    'features.realTimeStock.desc': 'ສິນຄ້າຕັດສະຕັອກອັດຕະໂນມັດທຸກຊ່ອງທາງ ບໍ່ມີຂາຍເກີນສະຕັອກອີກຕໍ່ໄປ',
    'features.instantLabels': 'ພິມໃບປະໜ້າທັນທີ',
    'features.instantLabels.desc': 'ພິມໃບປະໜ້າພັດສະດຸໄດ້ໃນຄລິກດຽວ ຮອງຮັບເຄື່ອງພິມຄວາມຮ້ອນທົ່ວໄປ',
    'features.customerHistory': 'ປະຫວັດລູກຄ້າ',
    'features.customerHistory.desc': 'ເບິ່ງອໍເດີເກົ່າ ແລະ ແທັກພຶດຕິກຳບໍ່ດີ (Blacklist) ກ່ອນສົ່ງຂອງ',
    'features.secureStable': 'ປອດໄພ ໝັ້ນຄົງ',
    'features.secureStable.desc': 'ສະຖາປັດຕະຍະກຳແບບ Static 100% ໝາຍເຖິງບໍ່ມີດາວໄທມ໌ ແລະ ຄວາມໄວສູງສຸດ',

    // How It Works
    'howItWorks.title': 'ວິທີການໃຊ້ງານ',
    'howItWorks.step1': '1. ວາງອໍເດີ',
    'howItWorks.step1.desc': 'ກຶບຂໍ້ຄວາມຈາກແຊັດ ວາງໃນ AstroPOS',
    'howItWorks.step2': '2. ກວດສອບຂໍ້ມູນ',
    'howItWorks.step2.desc': 'ລະບົບແຍກຊື່, ທີ່ຢູ່, ເບີໂທ ໃຫ້ອັດຕະໂນມັດ ເຈົ້າແຄ່ຢືນຢັນ',
    'howItWorks.step3': '3. ສົ່ງຂອງ ຮັບເງິນ',
    'howItWorks.step3.desc': 'ພິມໃບປະໜ້າ ຕິດຕາມພັດສະດຸ ຮັບເງິນ',

    // Pricing
    'pricing.title': 'ລາຄາຈິງໃຈ ບໍ່ມີແອບແຝງ',
    'pricing.subtitle': 'ຄຸ້ມຄ່າການລົງທຶນ ຍົກເລີກເມື່ອໃດກໍໄດ້',
    'pricing.select': 'ເລືອກແພັກເກັດນີ້',
    'pricing.popular': 'ຂາຍດີທີ່ສຸດ',
    'pricing.compareFeatures': 'ປຽບທຽບຟີເຈີທັງໝົດ',
    'pricing.readyToStart': 'ພ້ອມເລີ່ມຕົ້ນແລ້ວບໍ?',
    'pricing.youSelected': 'ເຈົ້າເລືອກ:',
    'pricing.plan': 'ແພັກເກັດ',
    'pricing.noCreditCard': 'ບໍ່ຕ້ອງໃສ່ບັດເຄຣດິດສຳລັບທົດລອງໃຊ້',
    'pricing.confirm': 'ສະໝັກຜ່ານ WhatsApp',
    'pricing.checkout': 'ໄປຊຳລະເງິນ',
    'pricing.perMonth': 'ຕໍ່ເດືອນ',

    // Package Features (Starter)
    'pricing.starter.shops': '1 ຮ້ານຄ້າ',
    'pricing.starter.users': '1-2 ຜູ້ໃຊ້',
    'pricing.starter.reports': 'ລາຍງານພື້ນຖານ',
    'pricing.starter.channels': 'Facebook ເທົ່ານັ້ນ',

    // Package Features (Pro)
    'pricing.pro.shops': '1 ຮ້ານຄ້າ',
    'pricing.pro.users': '3-5 ຜູ້ໃຊ້',
    'pricing.pro.channels': 'ທຸກຊ່ອງທາງ (FB/TikTok/Line)',
    'pricing.pro.labels': 'ພິມໃບປະໜ້າ',
    'pricing.pro.reports': 'ລາຍງານຂັ້ນສູງ',

    // Package Features (Business)
    'pricing.business.shops': 'ຮ້ານຄ້າບໍ່ຈຳກັດ',
    'pricing.business.users': 'ຜູ້ໃຊ້ບໍ່ຈຳກັດ',
    'pricing.business.rbac': 'ກຳນົດສິດຜູ້ໃຊ້ (RBAC)',
    'pricing.business.api': 'ເຊື່ອມຕໍ່ API',
    'pricing.business.support': 'ທີມຊັບພອດສ່ວນຕົວ',

    // FAQ
    'faq.title': 'ຄຳຖາມທີ່ພົບເລື້ອຍ',
    'faq.q1': 'ມີທົດລອງໃຊ້ຟຣີບໍ?',
    'faq.a1': 'ມີແດ່! ທົດລອງໃຊ້ AstroPOS ຟຣີ 14 ວັນ ບໍ່ຕ້ອງໃສ່ບັດເຄຣດິດ',
    'faq.q2': 'ໃຊ້ໂດເມນຂອງຕົວເອງໄດ້ບໍ?',
    'faq.a2': 'ໄດ້ແດ່ ໃນແພັກເກັດ Business ສາມາດເຊື່ອມຕໍ່ໂດເມນຂອງເຈົ້າເອງໄດ້ (ເຊັ່ນ shop.yourbrand.com)',
    'faq.q3': 'ຮອງຮັບເຄື່ອງພິມຄວາມຮ້ອນບໍ?',
    'faq.a3': 'ຮອງຮັບແດ່ ເຄື່ອງພິມຄວາມຮ້ອນ 100x150mm ທຸກຮຸ່ນ ທັງແບບ Bluetooth ແລະ USB',

    // Services Page
    'services.title': 'ຫຼາຍກວ່າແຄ່ລະບົບ POS',
    'services.subtitle': 'ເຮົາໃຫ້ບໍລິການລະບົບຄົບວົງຈອນສຳລັບຮ້ານຄ້າອອນລາຍຍຸກໃໝ່',
    'services.multiChannel': 'ເຊື່ອມຕໍ່ຫຼາຍຊ່ອງທາງ',
    'services.multiChannel.desc': 'ເຊື່ອມ Facebook Page, Line OA ແລະ TikTok Shop ໃນແດັຊບອດດຽວ ຕອບແຊັດ ແລະ ສ້າງອໍເດີໂດຍບໍ່ຕ້ອງສະຫຼັບແອັບ',
    'services.analytics': 'ວິເຄາະຂໍ້ມູນຂັ້ນສູງ',
    'services.analytics.desc': 'ຮູ້ວ່າສິນຄ້າໃດຂາຍດີ ຊ່ວງເວລາໃດຍອດຂາຍສູງ ແລະ ອັດຕາລູກຄ້າປະຈຳ ສົ່ງອອກລາຍງານເປັນ Excel ໄດ້ງ່າຍ',
    'services.shipping': 'ພິມໃບປະໜ້າທັນທີ',
    'services.shipping.desc': 'ສ້າງເລກພັດສະດຸ Flash/Kerry/J&T ໄດ້ທັນທີ ພິມໃບປະໜ້າ 100x150mm ຜ່ານ Bluetooth ຫຼື USB',
    'services.freeWebsite': 'ເວັບໄຊຮ້ານຄ້າຟຣີ',
    'services.freeWebsite.desc': 'ຮັບເວັບໄຊ [ຊື່ເຈົ້າ].astropos.shop ຟຣີ ໃຫ້ລູກຄ້າເບິ່ງສິນຄ້າ ແລະ ຊຳລະເງິນເອງໄດ້',
    'services.enterprise.title': 'ຕ້ອງການໂຊລູຊັນພິເສດ?',
    'services.enterprise.desc': 'ເຮົາມີ API integration, white-label solution ແລະ ທີມຊັບພອດເຉພາະສຳລັບອົງກອນຂະໜາດໃຫຍ່',
    'services.enterprise.cta': 'ຕິດຕໍ່ຝ່າຍອົງກອນ',

    // Packages Page
    'packages.title': 'ເລືອກແພັກເກັດທີ່ໃຊ່',
    'packages.subtitle': 'ລາຄາຍຸຕິທຳ ບໍ່ມີຄ່າໃຊ້ຈ່າຍແອບແຝງ ຍົກເລີກໄດ້ທຸກເມື່ອ',
    'packages.comparison.title': 'ປຽບທຽບຟີເຈີ',
    'packages.comparison.users': 'ຈຳນວນຜູ້ໃຊ້',
    'packages.comparison.channels': 'ຊ່ອງທາງຂາຍ',
    'packages.comparison.printer': 'ຮອງຮັບເຄື່ອງພິມ',
    'packages.comparison.stock': 'ຊິງສະຕັອກ',
    'packages.comparison.domain': 'ໂດເມນຂອງຕົວເອງ',
    'packages.comparison.support': 'ຊັບພອດພິເສດ',

    // Footer
    'footer.copyright': '© 2024 AstroPOS ສະຫງວນລິຂະສິດ.',
    'footer.privacy': 'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ',
    'footer.terms': 'ຂໍ້ຕົກລົງການນຳໃຊ້',

    // Testimonials
    'testimonials.title': 'ສຽງຈາກຜູ້ໃຊ້ງານ',
    'testimonials.subtitle': 'ເລື່ອງລາວຄວາມສຳເລັດຈາກຮ້ານຄ້າທີ່ເຕີບໂຕໄປກັບເຮົາ',
    'testimonials.quote.best.pos.ever': 'ນີ້ຄືລະບົບ POS ທີ່ດີທີ່ສຸດເທົ່າທີ່ເຄີຍໃຊ້ມາ ຕິດຕັ້ງແລ້ວໃນ 5 ນາທີ!',
    'testimonials.quote.saved.my.time': 'ເມື່ອກ່ອນເສຍເວລາ 4 ຊົ່ວໂມງເຮັດບັນຊີ ດຽວນີ້ເຫຼືອແຄ່ 30 ນາທີ',
    'testimonials.quote.easy.to.use': 'ຂະໜາດແມ່ເຖົ້າກໍຍັງໃຊ້ເປັນ ງ່າຍແລະໄວຫຼາຍ ລະບົບສະຖຽນສຸດໆ',

    // Demo
    'demo.title': 'ລອງຫຼິ້ນເບິ່ງ',
    'demo.subtitle': 'ສຳຜັດຄວາມໄວຂອງ AstroPOS ດ້ວຍຕົວເອງ ບໍ່ຕ້ອງສະໝັກສະມາຊິກ.',
    'demo.back': 'ກັບໄປໜ້າລາຍການ',
    // Hardware Page
    'hardware.hero.title': 'ອຸປະກອນມືອາຊີບ ສຳລັບ',
    'hardware.hero.title.highlight': 'ແມ່ຄ້າມືອາຊີບ',
    'hardware.hero.subtitle': 'ຮາດແວທີ່ເຮົາຄັດມາແລ້ວວ່າ "ສະຖຽນ" ແລະ ເຮັດວຽກຮ່ວມກັບ AstroPOS ໄດ້ 100%',
    'hardware.warranty.title': 'ຮັບປະກັນ 1 ປີ',
    'hardware.warranty.desc': 'ເສຍປ່ຽນຕົວໃໝ່ໃຫ້ທັນທີ',
    'hardware.shipping.title': 'ສົ່ງໄວທົ່ວປະເທດ',
    'hardware.shipping.desc': 'ຮອດມືພາຍໃນ 2-3 ວັນທຳການ',
    'hardware.setup.title': 'ຕິດຕັ້ງຟຣີ',
    'hardware.setup.desc': 'ເຮົາຊ່ວຍຕັ້ງຄ່າຜ່ານ TeamViewer ໃຫ້ຟຣີ',
  }
};

export function t(key: string, lang: Lang): string {
  // @ts-ignore
  return translations[lang][key] || translations['en'][key] || key;
}
