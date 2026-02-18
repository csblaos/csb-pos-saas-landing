import React, { useState, useEffect } from 'react';

interface OrderNotification {
    id: number;
    customer: string;
    channel: string;
    channelColor: string;
    channelIcon: string;
    amount: string;
    item: string;
}

const notifications: OrderNotification[] = [
    { id: 1, customer: 'Somchai J.', channel: 'Facebook', channelColor: '#1877F2', channelIcon: 'FB', amount: '฿1,500', item: '2x T-Shirt' },
    { id: 2, customer: 'Nancy D.', channel: 'LINE', channelColor: '#06C755', channelIcon: 'LN', amount: '฿2,400', item: '1x Sneakers' },
    { id: 3, customer: 'John D.', channel: 'TikTok', channelColor: '#000000', channelIcon: 'TT', amount: '฿890', item: '3x Cap' },
    { id: 4, customer: 'Kanya P.', channel: 'WhatsApp', channelColor: '#25D366', channelIcon: 'WA', amount: '฿3,200', item: '1x Bag' },
    { id: 5, customer: 'Mike R.', channel: 'Shopee', channelColor: '#EE4D2D', channelIcon: 'SP', amount: '฿650', item: '5x Socks' },
    { id: 6, customer: 'Lisa M.', channel: 'Lazada', channelColor: '#0F146D', channelIcon: 'LZ', amount: '฿4,100', item: '1x Watch' },
];

interface Props {
    title?: string;
    subtitle?: string;
    cta?: string;
    ctaLink?: string;
}

export default function SidebarLiveOrders({
    title = 'Orders Coming In',
    subtitle = 'See orders flow in real-time from every channel.',
    cta = 'Start Free Trial →',
    ctaLink = '/en/packages'
}: Props) {
    const [visibleOrders, setVisibleOrders] = useState<OrderNotification[]>([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => {
                const next = prev + 1;
                const notification = notifications[next % notifications.length];
                const newOrder = { ...notification, id: next };

                setVisibleOrders(prev => {
                    const updated = [newOrder, ...prev];
                    return updated.slice(0, 4); // Keep max 4 visible
                });

                return next;
            });
        }, 2500);

        // Show first one immediately
        setVisibleOrders([{ ...notifications[0], id: 0 }]);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-1 border-black bg-white p-0 shadow-[2px_2px_0px_0px_black] relative overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-black text-white px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-green-400">LIVE</span>
                </div>
                <h3 className="text-base font-black leading-tight">{title}</h3>
                <p className="text-[11px] text-gray-400 font-bold mt-1">{subtitle}</p>
            </div>

            {/* Animated Order Feed */}
            <div className="p-3 pb-4 space-y-2 h-[200px] overflow-hidden bg-gray-50">
                {visibleOrders.map((order, i) => (
                    <div
                        key={order.id}
                        className="flex items-center gap-2.5 p-2.5 bg-white border border-gray-200 rounded-md text-xs transition-all duration-500"
                        style={{
                            animation: i === 0 ? 'slideInOrder 0.4s ease-out' : undefined,
                            opacity: 1 - (i * 0.15),
                        }}
                    >
                        {/* Channel Badge */}
                        <div
                            className="w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-[9px] shrink-0"
                            style={{ backgroundColor: order.channelColor }}
                        >
                            {order.channelIcon}
                        </div>
                        {/* Order Info */}
                        <div className="flex-1 min-w-0">
                            <div className="font-black text-[11px] truncate">{order.customer}</div>
                            <div className="text-[9px] text-gray-400 truncate">{order.item}</div>
                        </div>
                        {/* Amount */}
                        <div className="text-right shrink-0">
                            <div className="font-black text-[11px] text-green-600">{order.amount}</div>
                            <div className="text-[8px] text-gray-400">just now</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="p-3 border-t border-gray-200">
                <a
                    href={ctaLink}
                    className="block w-full text-center font-black text-xs py-2.5 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                    {cta}
                </a>
            </div>

            {/* Keyframe animation via style tag */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideInOrder {
          0% { 
            opacity: 0; 
            transform: translateY(-12px) scale(0.95);
            max-height: 0;
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            max-height: 60px;
          }
        }
      `}} />
        </div>
    );
}
