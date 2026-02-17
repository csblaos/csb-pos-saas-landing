import React, { useState } from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import type { Lang } from '../../lib/lang';

// Mock translation inside component for simplicity, real app should import
const t = (key: string, lang: Lang) => {
    const dict: any = {
        en: { select: 'Select', popular: 'Recommended', confirm: 'Apply via WhatsApp', checkout: 'Go to Checkout' },
        th: { select: 'เลือก', popular: 'แนะนำ', confirm: 'สมัครผ่าน WhatsApp', checkout: 'ไปชำระเงิน' },
        la: { select: 'ເລືອກ', popular: 'ແນະນຳ', confirm: 'ສະໝັກຜ່ານ WhatsApp', checkout: 'ໄປຊຳລະເງິນ' }
    };
    return dict[lang]?.[key] || key;
};

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: 9,
        lak: '200,000',
        features: ['1 Shop', '1-2 Users', 'Basic Reports', 'Facebook Only']
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 19,
        lak: '420,000',
        popular: true,
        features: ['1 Shop', '3-5 Users', 'All Channels (FB/TikTok/Line)', 'Print Labels', 'Advanced Reports']
    },
    {
        id: 'business',
        name: 'Business',
        price: 49,
        lak: '1,100,000',
        features: ['Unlimited Shops', 'Unlimited Users', 'RBAC Roles', 'API Access', 'Dedicated Support']
    }
];

export default function PricingSelect({ lang = 'th' }: { lang?: Lang }) {
    const [selectedPlan, setSelectedPlan] = useState('pro');

    const getWhatsAppLink = (planId: string) => {
        const plan = plans.find(p => p.id === planId);
        if (!plan) return '#';

        // Localized Message
        let message = '';
        if (lang === 'th') {
            message = `สวัสดี สนใจแพ็กเกจ *${plan.name}* (${plan.price}$)\n\nชื่อร้าน: \nเบอร์โทร: \n\nขอรายละเอียดการชำระเงินด้วยครับ`;
        } else if (lang === 'la') {
            message = `ສະບາຍດີ ສົນໃຈແພັກເກັດ *${plan.name}* (${plan.price}$)\n\nຊື່ຮ້ານ: \nເບີໂທ: \n\nຂໍລາຍລະອຽດການຊຳລະເງິນແດ່`;
        } else {
            message = `Hello, I want to subscribe to *${plan.name} Plan* (${plan.price}$).\n\nMy Shop: \nPhone: \n\nPlease send me payment details.`;
        }

        return `https://wa.me/8562012345678?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="space-y-8">
            {/* Plan Selection Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`
              relative p-6 transition-all cursor-pointer card-neo
              ${selectedPlan === plan.id ? 'ring-2 ring-lime-400 -translate-y-2' : 'hover:-translate-y-1'}
            `}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-400 text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase shadow-sm">
                                {t('popular', lang)}
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-black text-[var(--color-text)]">{plan.name}</h3>
                                <p className="text-sm text-gray-500">Per Month</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center ${selectedPlan === plan.id ? 'bg-lime-400' : 'bg-[var(--color-bg-card)]'}`}>
                                {selectedPlan === plan.id && <div className="w-3 h-3 bg-black rounded-full" />}
                            </div>
                        </div>

                        <div className="mb-6 text-[var(--color-text)]">
                            <span className="text-4xl font-black">${plan.price}</span>
                            <span className="text-sm font-bold text-gray-400 ml-2">≈ ₭{plan.lak}</span>
                        </div>

                        <ul className="space-y-2 mb-6 text-sm text-[var(--color-text)]">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check size={16} className="text-lime-600" />
                                    <span className="font-bold">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-2 font-bold border-2 border-[var(--color-border)] text-center transition-colors ${selectedPlan === plan.id ? 'bg-[var(--color-text)] text-[var(--color-bg)]' : 'bg-[var(--color-bg)] text-[var(--color-text)]'}`}>
                            {t('select', lang)} {plan.name}
                        </button>
                    </div>
                ))}
            </div>

            {/* Checkout Action Area */}
            <div className="bg-lime-100 dark:bg-lime-900 border-2 border-[var(--color-border)] p-6 md:p-8 shadow-[6px_6px_0px_0px_var(--color-shadow)] max-w-2xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-black text-black dark:text-white">Ready to Start?</h3>
                <p className="font-bold text-black dark:text-gray-200">You selected: <span className="underline decoration-wavy decoration-pink-500 text-xl">{plans.find(p => p.id === selectedPlan)?.name} Plan</span></p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href={getWhatsAppLink(selectedPlan)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_black] transition-all"
                    >
                        <MessageCircle size={24} />
                        {t('confirm', lang)}
                    </a>

                    <a
                        href={`/checkout?plan=${selectedPlan}&lang=${lang}`}
                        className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold border-2 border-black shadow-[4px_4px_0px_0px_black] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_black] transition-all"
                    >
                        {t('checkout', lang)}
                        <ArrowRight size={20} />
                    </a>
                </div>
                <p className="text-xs text-gray-500 font-bold">No credit card required for trial.</p>
            </div>
        </div>
    );
}
