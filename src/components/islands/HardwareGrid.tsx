import React, { useState } from 'react';
import { ShoppingCart, Check, Star } from 'lucide-react';
import { hardwareProducts, getHardwareTranslations } from '../../data/hardware';
import type { Lang } from '../../lib/lang';

interface HardwareGridProps {
    lang: Lang;
}

export default function HardwareGrid({ lang }: HardwareGridProps) {
    const [filter, setFilter] = useState<'all' | 'printer' | 'scanner' | 'supplies'>('all');
    const t = getHardwareTranslations(lang);

    const filteredProducts = filter === 'all'
        ? hardwareProducts
        : hardwareProducts.filter(p => p.category === filter);

    const handleBuy = (productName: string, price: number) => {
        const message = encodeURIComponent(
            `Hello AstroPOS, I am interested in buying: ${productName} (${price.toLocaleString()} THB). Please provide more details.`
        );
        window.open(`https://wa.me/8562059083986?text=${message}`, '_blank');
    };

    const tabs = [
        { id: 'all', label: t.tabs.all },
        { id: 'printer', label: t.tabs.printer },
        { id: 'scanner', label: t.tabs.scanner },
        { id: 'supplies', label: t.tabs.supplies },
    ] as const;

    return (
        <div className="flex flex-col gap-12">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setFilter(tab.id)}
                        className={`
                            px-6 py-3 font-black uppercase text-lg border-2 border-black transition-all
                            ${filter === tab.id
                                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] translate-x-[2px] translate-y-[2px]'
                                : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col">
                        {/* Badge */}
                        {product.badge && (
                            <div className="absolute -top-4 -right-4 bg-yellow-400 border-2 border-black px-4 py-1 font-black text-sm uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 rotate-3 group-hover:rotate-6 transition-transform">
                                {product.badge[lang]}
                            </div>
                        )}

                        {/* Image Area */}
                        <div className="aspect-square border-b-2 border-black overflow-hidden relative bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.name[lang]}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-black uppercase leading-tight">{product.name[lang]}</h3>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-bold text-black font-mono">5.0</span>
                                </div>
                            </div>

                            <p className="text-gray-600 font-medium mb-4 text-sm flex-1">{product.description[lang]}</p>

                            {/* Specs */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {product.specs.map((spec, i) => (
                                    <span key={i} className="text-xs font-bold border border-black px-2 py-1 bg-gray-50 flex items-center gap-1">
                                        <Check size={10} className="stroke-[4]" /> {spec}
                                    </span>
                                ))}
                            </div>

                            {/* Price & Action */}
                            <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between gap-4 mt-auto">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase">{t.price}</p>
                                    <p className="text-2xl font-black font-mono tracking-tight">฿{product.price.toLocaleString()}</p>
                                </div>
                                <a
                                    href={`/${lang}/hardware/${product.id}`}
                                    className="flex-1 bg-lime-400 hover:bg-lime-300 text-black border-2 border-black font-black px-4 py-3 flex items-center justify-center gap-2 uppercase text-sm active:translate-y-[1px] transition-all"
                                >
                                    <ShoppingCart size={18} /> {t.buyNow}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
