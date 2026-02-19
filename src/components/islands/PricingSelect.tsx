import React, { useEffect, useState } from 'react';
import { Check, Gift, X } from 'lucide-react';
import type { Lang } from '../../lib/lang';
import { t } from '../../data/i18n';
import { buildWhatsAppLink, storeSettings } from '../../data/store';
import { buildPricingSelectMessage, fromLang, pricingLeadFormCopy } from '../../data/localizedCopy';
import { packagePlans } from '../../data/packages';
import {
    getPlanPriceLak,
    getStartTrialLabel,
    getTrialBadgeLabel,
    getTrialHintLabel,
    getYearlyBonusLabel,
    getYearlyFreeMonthsLabel,
    isTrialAvailable,
    type BillingCycle,
    type PlanId,
} from '../../config/pricing';

export default function PricingSelect({ lang = 'th' }: { lang?: Lang }) {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
    const [selectedPlanId, setSelectedPlanId] = useState<PlanId | null>(null);
    const [isModalAnimatedIn, setIsModalAnimatedIn] = useState(false);
    const [leadForm, setLeadForm] = useState({ contactName: '', storeName: '', phone: '' });
    const [showNameError, setShowNameError] = useState(false);
    const formCopy = fromLang(pricingLeadFormCopy, lang);

    const getPlanById = (planId: PlanId) => packagePlans.find((p) => p.id === planId);

    const getPlanMeta = (plan: (typeof packagePlans)[number]) => {
        const isYearly = billingCycle === 'yearly';
        const finalPrice = getPlanPriceLak(plan.id, billingCycle);
        const period = isYearly ? t('pricing.yearly', lang) : t('pricing.monthly', lang);
        const bonus = isYearly ? ` (${getYearlyBonusLabel(lang)})` : '';

        return {
            isYearly,
            finalPrice,
            period,
            bonus,
            formattedPrice: finalPrice.toLocaleString(),
        };
    };

    const getWhatsAppLink = (
        planId: PlanId,
        lead?: { contactName?: string; storeName?: string; phone?: string }
    ) => {
        const plan = getPlanById(planId);
        if (!plan) return '#';

        const { formattedPrice, period, bonus, isYearly } = getPlanMeta(plan);
        const includeTrial = isTrialAvailable(plan.id, isYearly ? 'yearly' : 'monthly');
        const message = buildPricingSelectMessage(lang, plan.name, formattedPrice, period, bonus, includeTrial, lead);

        return buildWhatsAppLink(storeSettings.whatsapp.packageSales, message);
    };

    const openLeadForm = (planId: PlanId) => {
        setIsModalAnimatedIn(false);
        setSelectedPlanId(planId);
        setLeadForm({ contactName: '', storeName: '', phone: '' });
        setShowNameError(false);
    };

    const closeLeadForm = () => {
        setIsModalAnimatedIn(false);
        setSelectedPlanId(null);
        setShowNameError(false);
    };

    useEffect(() => {
        if (!selectedPlanId) return;
        const rafId = window.requestAnimationFrame(() => setIsModalAnimatedIn(true));
        return () => window.cancelAnimationFrame(rafId);
    }, [selectedPlanId]);

    const handleSendWithDetails = () => {
        if (!selectedPlanId) return;
        if (!leadForm.contactName.trim()) {
            setShowNameError(true);
            return;
        }

        const link = getWhatsAppLink(selectedPlanId, leadForm);
        window.open(link, '_blank', 'noopener,noreferrer');
        closeLeadForm();
    };

    const handleQuickSend = () => {
        if (!selectedPlanId) return;
        const link = getWhatsAppLink(selectedPlanId);
        window.open(link, '_blank', 'noopener,noreferrer');
        closeLeadForm();
    };

    const sanitizePhoneInput = (value: string) => {
        const cleaned = value.replace(/[^\d+]/g, '');
        const plusCount = (cleaned.match(/\+/g) || []).length;
        if (plusCount <= 1 && (plusCount === 0 || cleaned.startsWith('+'))) {
            return cleaned;
        }
        return cleaned.replace(/\+/g, '');
    };

    const selectedPlan = selectedPlanId ? getPlanById(selectedPlanId) : null;
    const selectedPlanMeta = selectedPlan ? getPlanMeta(selectedPlan) : null;

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
                    <div className={`absolute top-1 w-6 h-6 bg-white dark:bg-lime-400 rounded-full transition-transform duration-200 ${billingCycle === 'yearly' ? 'left-9' : 'left-1'}`} />
                </button>
                <div className="flex items-center gap-2">
                    <span className={`font-bold ${billingCycle === 'yearly' ? 'text-[var(--color-text)]' : 'text-gray-400'}`}>
                        {t('pricing.yearly', lang)}
                    </span>
                    <span className="bg-pink-400 text-white text-xs px-2 py-1 font-black border-1 border-black shadow-[2px_2px_0px_0px_black] flex items-center gap-1">
                        <Gift size={12} /> {getYearlyFreeMonthsLabel(lang)}
                    </span>
                </div>
            </div>

            {/* Plan Selection Grid */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {packagePlans.map((plan) => {
                    const isYearly = billingCycle === 'yearly';
                    const isTrialCycle = isTrialAvailable(plan.id, billingCycle);
                    const planButtonClass =
                        plan.id === 'business'
                            ? 'border-[var(--color-border)] bg-black text-white hover:bg-gray-800'
                            : plan.id === 'pro'
                                ? 'border-black bg-lime-400 text-black hover:bg-lime-300 shadow-[2px_2px_0px_0px_black] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_black]'
                                : 'border-[var(--color-border)] bg-[var(--color-bg)] hover:bg-gray-100 text-[var(--color-text)]';
                    const displayPrice = getPlanPriceLak(plan.id, billingCycle);

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
                                            {getYearlyBonusLabel(lang)}
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

                            <button
                                type="button"
                                onClick={() => openLeadForm(plan.id)}
                                className={`w-full py-3 font-black border-1 text-center transition-all uppercase ${planButtonClass}`}
                            >
                                {isTrialCycle
                                    ? getStartTrialLabel(lang)
                                    : plan.id === 'business'
                                        ? t('pricing.getBusiness', lang)
                                        : plan.id === 'pro'
                                            ? t('pricing.getPro', lang)
                                            : t('pricing.select', lang)}
                            </button>
                        </div>
                    );
                })}
            </div>

            {selectedPlan && selectedPlanMeta && (
                <div className="fixed inset-0 z-[200]" onClick={closeLeadForm} role="dialog" aria-modal="true">
                    <div
                        className={`fixed inset-0 h-dvh w-screen bg-black/60 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                            isModalAnimatedIn ? 'opacity-100' : 'opacity-0'
                        }`}
                    />

                    <div className="relative flex h-full w-full items-center justify-center p-4">
                        <div
                            className={`relative w-full max-w-lg bg-white border-1 border-black shadow-[2px_2px_0px_0px_black] p-5 md:p-6 transition-all duration-300 ease-out motion-reduce:transition-none ${
                                isModalAnimatedIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                            }`}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-black uppercase">{formCopy.title}</h3>
                                <p className="mt-1 text-sm font-semibold text-gray-600">{formCopy.subtitle}</p>
                            </div>
                            <button
                                type="button"
                                onClick={closeLeadForm}
                                className="p-1 border-1 border-black bg-white hover:bg-gray-100"
                                aria-label={formCopy.close}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3 text-xs md:text-sm">
                            <div className="border border-black p-2">
                                <p className="font-black uppercase text-gray-500">{formCopy.packageLabel}</p>
                                <p className="mt-1 font-bold">{selectedPlan.name}</p>
                            </div>
                            <div className="border border-black p-2">
                                <p className="font-black uppercase text-gray-500">{formCopy.periodLabel}</p>
                                <p className="mt-1 font-bold">{selectedPlanMeta.period}</p>
                            </div>
                            <div className="border border-black p-2">
                                <p className="font-black uppercase text-gray-500">{formCopy.totalLabel}</p>
                                <p className="mt-1 font-bold">₭{selectedPlanMeta.formattedPrice}</p>
                            </div>
                        </div>

                        {isTrialAvailable(selectedPlan.id, billingCycle) && (
                            <div className="mt-4 border-1 border-black bg-lime-100 p-3">
                                <span className="inline-block bg-black text-lime-300 px-2 py-1 text-[10px] md:text-xs font-black uppercase">
                                    {getTrialBadgeLabel(lang)}
                                </span>
                                <p className="mt-2 text-xs md:text-sm font-bold text-black">
                                    {getTrialHintLabel(lang)}
                                </p>
                            </div>
                        )}

                        <div className="mt-5 space-y-3">
                            <label className="block">
                                <span className="text-xs font-black uppercase">{formCopy.contactName} *</span>
                                <input
                                    value={leadForm.contactName}
                                    onChange={(e) => {
                                        setLeadForm((prev) => ({ ...prev, contactName: e.target.value }));
                                        if (showNameError && e.target.value.trim()) setShowNameError(false);
                                    }}
                                    placeholder={formCopy.contactPlaceholder}
                                    className="mt-1 w-full border-1 border-black px-3 py-2 font-semibold focus:outline-none"
                                />
                                {showNameError && (
                                    <p className="mt-1 text-xs font-bold text-red-600">{formCopy.requiredName}</p>
                                )}
                            </label>

                            <label className="block">
                                <span className="text-xs font-black uppercase">{formCopy.storeName}</span>
                                <input
                                    value={leadForm.storeName}
                                    onChange={(e) => setLeadForm((prev) => ({ ...prev, storeName: e.target.value }))}
                                    placeholder={formCopy.storePlaceholder}
                                    className="mt-1 w-full border-1 border-black px-3 py-2 font-semibold focus:outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="text-xs font-black uppercase">{formCopy.phone}</span>
                                <input
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    enterKeyHint="done"
                                    pattern="[0-9+]*"
                                    value={leadForm.phone}
                                    onChange={(e) =>
                                        setLeadForm((prev) => ({
                                            ...prev,
                                            phone: sanitizePhoneInput(e.target.value),
                                        }))
                                    }
                                    placeholder={formCopy.phonePlaceholder}
                                    className="mt-1 w-full border-1 border-black px-3 py-2 font-semibold focus:outline-none"
                                />
                            </label>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={handleSendWithDetails}
                                className="flex-1 py-3 font-black uppercase border-1 border-black bg-lime-400 text-black hover:bg-lime-300"
                            >
                                {formCopy.sendWithDetails}
                            </button>
                            <button
                                type="button"
                                onClick={handleQuickSend}
                                className="flex-1 py-3 font-black uppercase border-1 border-black bg-white text-black hover:bg-gray-100"
                            >
                                {formCopy.sendQuick}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="text-center">
                <p className="text-sm text-gray-600 font-semibold">
                    {t('pricing.noCreditCard', lang)} • {getYearlyFreeMonthsLabel(lang)} {t('pricing.yearly', lang)}
                </p>
            </div>
        </div>
    );
}
