export const storeSettings = {
  whatsapp: {
    packageSales: '8562059083986',
    productSales: '8562059083986',
    paymentSupport: '8562012345678',
  },
  emails: {
    support: 'support@astropos.com',
    sales: 'sales@astropos.com',
    enterprise: 'enterprise@astropos.com',
    privacy: 'privacy@astropos.com',
  },
  company: {
    legalName: 'Astro POS Systems',
    location: 'Vientiane, Laos',
    foundedYear: '2024',
  },
  links: {
    posDemo: 'https://pos.codesabai.com',
  },
} as const;

export function buildWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
