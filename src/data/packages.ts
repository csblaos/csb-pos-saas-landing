import type { Lang } from '../lib/lang';
import { t } from './i18n';
import { pricingConfig, type PlanId } from '../config/pricing';

type ComparisonValue = boolean | string | { key: string };

export interface PackagePlan {
  id: PlanId;
  name: string;
  price: number;
  priceLak: number;
  popular?: boolean;
  features: string[];
}

interface PackageComparisonRowConfig {
  featureKey: string;
  start: ComparisonValue;
  pro: ComparisonValue;
  biz: ComparisonValue;
}

export interface PackageComparisonRow {
  feature: string;
  start: boolean | string;
  pro: boolean | string;
  biz: boolean | string;
}

export const packagePlans: PackagePlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: pricingConfig.plans.starter.monthlyUsd,
    priceLak: pricingConfig.plans.starter.monthlyLak,
    features: ['pricing.starter.shops', 'pricing.starter.users', 'pricing.starter.reports', 'pricing.starter.channels']
  },
  {
    id: 'pro',
    name: 'Professional',
    price: pricingConfig.plans.pro.monthlyUsd,
    priceLak: pricingConfig.plans.pro.monthlyLak,
    popular: true,
    features: ['pricing.pro.shops', 'pricing.pro.users', 'pricing.pro.channels', 'pricing.pro.labels', 'pricing.pro.reports']
  },
  {
    id: 'business',
    name: 'Premium',
    price: pricingConfig.plans.business.monthlyUsd,
    priceLak: pricingConfig.plans.business.monthlyLak,
    features: ['pricing.business.shops', 'pricing.business.users', 'pricing.business.rbac', 'pricing.business.api', 'pricing.business.support']
  }
];

const packageComparisonConfig: PackageComparisonRowConfig[] = [
  { featureKey: 'packages.comparison.users', start: '1-2', pro: '3-5', biz: { key: 'packages.comparison.unlimited' } },
  { featureKey: 'packages.comparison.channels', start: 'Facebook', pro: { key: 'packages.comparison.allChannels' }, biz: { key: 'packages.comparison.allApi' } },
  { featureKey: 'packages.comparison.stock', start: true, pro: true, biz: true },
  { featureKey: 'packages.comparison.printer', start: false, pro: true, biz: true },
  { featureKey: 'packages.comparison.reports', start: { key: 'packages.comparison.basic' }, pro: { key: 'packages.comparison.advanced' }, biz: { key: 'packages.comparison.realtime' } },
  { featureKey: 'packages.comparison.orders', start: '100/mo', pro: { key: 'packages.comparison.unlimited' }, biz: { key: 'packages.comparison.unlimited' } },
  { featureKey: 'packages.comparison.domain', start: false, pro: false, biz: true },
  { featureKey: 'packages.comparison.support', start: false, pro: true, biz: 'VIP 24/7' },
  { featureKey: 'packages.comparison.api', start: false, pro: false, biz: true },
  { featureKey: 'packages.comparison.training', start: false, pro: true, biz: '1-on-1' }
];

function resolveComparisonValue(value: ComparisonValue, lang: Lang): boolean | string {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value;
  return t(value.key, lang);
}

export function getPackageComparisonRows(lang: Lang): PackageComparisonRow[] {
  return packageComparisonConfig.map((row) => ({
    feature: t(row.featureKey, lang),
    start: resolveComparisonValue(row.start, lang),
    pro: resolveComparisonValue(row.pro, lang),
    biz: resolveComparisonValue(row.biz, lang)
  }));
}
