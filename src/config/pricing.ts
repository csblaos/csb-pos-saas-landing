import type { Lang } from '../lib/lang';

export type PlanId = 'starter' | 'pro' | 'business';
export type BillingCycle = 'monthly' | 'yearly';

const supportedLangs: Lang[] = ['en', 'th', 'la'];

function toLang(lang: string): Lang {
  return supportedLangs.includes(lang as Lang) ? (lang as Lang) : 'en';
}

export const pricingConfig = {
  trial: {
    enabled: true,
    days: 14,
    planIds: ['starter', 'pro', 'business'] as PlanId[],
  },
  yearly: {
    payMonths: 12,
    getMonths: 14,
  },
  plans: {
    starter: {
      monthlyUsd: 9,
      monthlyLak: 200000,
    },
    pro: {
      monthlyUsd: 19,
      monthlyLak: 420000,
    },
    business: {
      monthlyUsd: 49,
      monthlyLak: 1100000,
    },
  } as Record<PlanId, { monthlyUsd: number; monthlyLak: number }>,
} as const;

export function getYearlyBonusMonths(): number {
  return Math.max(0, pricingConfig.yearly.getMonths - pricingConfig.yearly.payMonths);
}

export function getPlanPriceLak(planId: PlanId, billingCycle: BillingCycle): number {
  const monthlyLak = pricingConfig.plans[planId].monthlyLak;
  if (billingCycle === 'yearly') {
    return monthlyLak * pricingConfig.yearly.payMonths;
  }
  return monthlyLak;
}

export function isTrialAvailable(planId: PlanId, billingCycle: BillingCycle): boolean {
  return (
    pricingConfig.trial.enabled &&
    billingCycle === 'monthly' &&
    pricingConfig.trial.planIds.includes(planId)
  );
}

export function getYearlyFreeMonthsLabel(lang: string): string {
  const bonusMonths = getYearlyBonusMonths();
  const safeLang = toLang(lang);
  if (safeLang === 'th') return `ฟรี +${bonusMonths} เดือน`;
  if (safeLang === 'la') return `ຟຣີ +${bonusMonths} ເດືອນ`;
  return `+${bonusMonths} Months FREE`;
}

export function getYearlyBonusLabel(lang: string): string {
  const { payMonths, getMonths } = pricingConfig.yearly;
  const safeLang = toLang(lang);
  if (safeLang === 'th') return `จ่าย ${payMonths} เดือน ได้ใช้ ${getMonths} เดือน!`;
  if (safeLang === 'la') return `ຈ່າຍ ${payMonths} ເດືອນ ໄດ້ໃຊ້ ${getMonths} ເດືອນ!`;
  return `Pay ${payMonths} months, Get ${getMonths} months!`;
}

export function getStartTrialLabel(lang: string): string {
  const safeLang = toLang(lang);
  const days = pricingConfig.trial.days;
  if (safeLang === 'th') return `เริ่มทดลองใช้ฟรี ${days} วัน`;
  if (safeLang === 'la') return `ລອງໃຊ້ຟຣີ ${days} ວັນ`;
  return `Start ${days}-Day Free Trial`;
}

export function getTrialBadgeLabel(lang: string): string {
  const safeLang = toLang(lang);
  const days = pricingConfig.trial.days;
  if (safeLang === 'th') return `ทดลองใช้ฟรี ${days} วัน`;
  if (safeLang === 'la') return `ທົດລອງຟຣີ ${days} ມື້`;
  return `FREE ${days} DAYS`;
}

export function getTrialHintLabel(lang: string): string {
  const safeLang = toLang(lang);
  const days = pricingConfig.trial.days;
  if (safeLang === 'th') {
    return `ทุกแพ็กเกจแบบรายเดือน เริ่มทดลองใช้ฟรี ${days} วัน ก่อนตัดสินใจ`;
  }
  if (safeLang === 'la') {
    return `ທຸກແພັກເກັດແບບລາຍເດືອນ ເລີ່ມທົດລອງຟຣີ ${days} ມື້ ກ່ອນຕັດສິນໃຈ`;
  }
  return `All monthly plans include a ${days}-day free trial before you decide.`;
}

export function getTrialPhrase(lang: string): string {
  const safeLang = toLang(lang);
  const days = pricingConfig.trial.days;
  if (safeLang === 'th') return `ทดลองใช้ฟรี ${days} วัน`;
  if (safeLang === 'la') return `ທົດລອງຟຣີ ${days} ມື້`;
  return `${days}-day free trial`;
}

