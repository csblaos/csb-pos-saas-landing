import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { t } from '../../data/i18n';
import type { Lang } from '../../lib/lang';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
    name: string;
    role: string;
    shop: string;
    quote: string;
    image: string;
    stars: number;
    color: string;
}

interface Props {
    lang: Lang;
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ lang, testimonials }: Props) {
    return (
        <div className="w-full testimonial-carousel relative px-4 md:px-12">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                centeredSlides={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                    // Mobile
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // Tablet/Desktop
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    }
                }}
                className="pb-16"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-1 border-black p-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full min-h-[350px]">
                            <div className="flex gap-1 mb-6 text-2xl">
                                {Array.from({ length: item.stars }).map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>

                            <blockquote className="text-xl font-bold italic mb-8 min-h-[100px] flex-1">
                                "{t(`testimonials.quote.${item.quote}`, lang)}"
                            </blockquote>

                            <div className="flex items-center gap-4 border-t-1 border-black/10 pt-6 mt-auto">
                                <div className={`w-14 h-14 rounded-full border-1 border-black overflow-hidden shrink-0 ${item.color}`}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="overflow-hidden">
                                    <div className="font-black text-lg uppercase leading-none mb-1 truncate">{item.name}</div>
                                    <div className="text-sm font-bold opacity-60 flex flex-col truncate">
                                        <span>{item.role}</span>
                                        <span className="text-xs uppercase tracking-wider">@ {item.shop}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-white border-1 border-black items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 bg-white border-1 border-black items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            <style>{`
        .testimonial-carousel .swiper-pagination-bullet {
          background: #000;
          opacity: 0.2;
          width: 10px;
          height: 10px;
          border-radius: 0;
          border: 1px solid #000;
          margin: 0 6px !important;
        }
        .testimonial-carousel .swiper-pagination-bullet-active {
          background: #bef264; /* lime-300 */
          opacity: 1;
          width: 32px;
          border-radius: 0;
        }
      `}</style>
        </div>
    );
}
