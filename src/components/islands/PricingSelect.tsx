import React, { useState } from 'react';
import { Check, Gift } from 'lucide-react';
import type { Lang } from '../../lib/lang';
import { t } from '../../data/i18n';
import { buildWhatsAppLink, storeSettings } from '../../data/store';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: 9,
        priceLak: 200000,
        features: ['pricing.starter.shops', 'pricing.starter.users', 'pricing.starter.reports', 'pricing.starter.channels']
    },
    {
        id: 'pro',
        name: 'Professional',
        price: 19,
        priceLak: 420000,
        popular: true,
        features: ['pricing.pro.shops', 'pricing.pro.users', 'pricing.pro.channels', 'pricing.pro.labels', 'pricing.pro.reports']
    },
    {
        id: 'business',
        name: 'Premium',
        price: 49,
        priceLak: 1100000,
        features: ['pricing.business.shops', 'pricing.business.users', 'pricing.business.rbac', 'pricing.business.api', 'pricing.business.support']
    }
];

export default function PricingSelect({ lang = 'th' }: { lang?: Lang }) {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const getWhatsAppLink = (planId: string) => {
        const plan = plans.find(p => p.id === planId);
        if (!plan) return '#';

        const isYearly = billingCycle === 'yearly';
        // Yearly = full price × 12 months (bonus: get 14 months)
        const finalPrice = isYearly ? plan.priceLak * 12 : plan.priceLak;
        const finalUsd = isYearly ? plan.price * 12 : plan.price;
        const period = isYearly ? t('pricing.yearly', lang) : t('pricing.monthly', lang);
        const bonus = isYearly ? ` (${t('pricing.yearlyBonus', lang)})` : '';

        // Format LAK with commas
        const formattedPrice = finalPrice.toLocaleString();

        // Localized Message
        let message = '';
        if (lang === 'th') {
            message = `สวัสดี สนใจแพ็กเกจ *${plan.name}* (${formattedPrice}₭ / ${period})${bonus}\n\nชื่อร้าน: \nเบอร์โทร: \n\nขอรายละเอียดการชำระเงินด้วยครับ`;
        } else if (lang === 'la') {
            message = `ສະບາຍດີ ສົນໃຈແພັກເກັດ *${plan.name}* (${formattedPrice}₭ / ${period})${bonus}\n\nຊື່ຮ້ານ: \nເບີໂທ: \n\nຂໍລາຍລະອຽດການຊຳລະເງິນແດ່`;
        } else {
            message = `Hello, I want to subscribe to *${plan.name} Plan* (${formattedPrice} LAK / ${period})${bonus}\n\nMy Shop: \nPhone: \n\nPlease send me payment details.`;
        }

        return buildWhatsAppLink(storeSettings.whatsapp.packageSales, message);
    };

    return (
        <div className="space-y-12">
            {/* Billing Toggle */}
            <div className="flex justify-center items-center gap-4">
                <span className={`font-bold ${billingCycle === 'monthly' ? 'text-[var(--color-text)]' : 'text-gray-400'}`}>
                    {t('pricing.monthly', lang)}
                </span>
                <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative w-16 h-8 bg-black rounded-full transition-colors focus:outline-none ring-2 ring-offset-2 ring-lime-400"
                >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${billingCycle === 'yearly' ? 'left-9' : 'left-1'}`} />
                </button>
                <div className="flex items-center gap-2">
                    <span className={`font-bold ${billingCycle === 'yearly' ? 'text-[var(--color-text)]' : 'text-gray-400'}`}>
                        {t('pricing.yearly', lang)}
                    </span>
                    <span className="bg-pink-400 text-white text-xs px-2 py-1 font-black border-1 border-black shadow-[2px_2px_0px_0px_black] flex items-center gap-1">
                        <Gift size={12} /> {t('pricing.2monthsFree', lang)}
                    </span>
                </div>
            </div>

            {/* Plan Selection Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {plans.map((plan) => {
                    const isYearly = billingCycle === 'yearly';
                    // Yearly = full price × 12 (pay 12 months, get 14 months)
                    const displayPrice = isYearly ? plan.priceLak * 12 : plan.priceLak;

                    return (
                        <div
                            key={plan.id}
                            className={`
                                relative p-6 transition-all border-1 border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[2px_2px_0px_0px_var(--color-shadow)]
                                hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-shadow)] flex flex-col h-full
                                ${plan.popular ? 'ring-2 ring-offset-4 ring-lime-400' : ''}
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-black border-1 border-black px-4 py-1 text-sm font-black uppercase shadow-[2px_2px_0px_0px_black]">
                                    {t('pricing.popular', lang)}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-[var(--color-text)] mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black">₭{displayPrice.toLocaleString()}</span>
                                    <span className="text-gray-500 font-bold">/ {isYearly ? t('pricing.perYear', lang) : t('pricing.perMonth', lang)}</span>
                                </div>

                                {isYearly && (
                                    <div className="mt-3 bg-lime-100 border-1 border-lime-400 px-3 py-2 inline-flex items-center gap-1.5">
                                        <Gift size={14} className="text-lime-700" />
                                        <span className="text-xs text-lime-800 font-black">
                                            {t('pricing.yearlyBonus', lang)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8 text-sm text-[var(--color-text)] flex-grow">
                                {plan.features.map((featureKey, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check size={18} className="text-lime-600 mt-0.5 flex-shrink-0" />
                                        <span className="font-semibold">{t(featureKey, lang)}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Direct CTA Buttons */}
                            {plan.id === 'starter' ? (
                                <a
                                    href={getWhatsAppLink(plan.id)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 font-black border-2 border-[var(--color-border)] text-center transition-all bg-[var(--color-bg)] hover:bg-gray-100 text-[var(--color-text)] uppercase"
                                >
                                    {t('pricing.startTrial', lang)}
                                </a>
                            ) : plan.id === 'business' ? (
                                <a
                                    href={getWhatsAppLink(plan.id)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 font-black border-1 border-[var(--color-border)] text-center transition-all bg-black text-white hover:bg-gray-800 uppercase"
                                >
                                    {t('pricing.getBusiness', lang)}
                                </a>
                            ) : (
                                <a
                                    href={getWhatsAppLink(plan.id)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 font-black border-1 border-black text-center transition-all bg-lime-400 text-black hover:bg-lime-300 shadow-[2px_2px_0px_0px_black] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_black] uppercase"
                                >
                                    {t('pricing.getPro', lang)}
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-600 font-semibold">
                    {t('pricing.noCreditCard', lang)} • {t('pricing.2monthsFree', lang)} {t('pricing.yearly', lang)}
                </p>
            </div>
        </div>
    );
}
