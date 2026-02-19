export const appConfig = {
  site: {
    name: 'AstroPOS',
    domain: 'https://www.codesabai.com',
    defaultImage: '/images/og/home.png',
  },
  i18n: {
    defaultLang: 'th',
    languages: {
      en: { label: 'English', flag: '🇺🇸', locale: 'en_US' },
      th: { label: 'ไทย', flag: '🇹🇭', locale: 'th_TH' },
      la: { label: 'ລາວ', flag: '🇱🇦', locale: 'lo_LA' },
    },
  },
} as const;

