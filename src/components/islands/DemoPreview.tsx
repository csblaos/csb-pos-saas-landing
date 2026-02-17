import React, { useState } from 'react';
import { Package, Users, ShoppingCart, Activity, Search, Plus, Trash2, Printer, X } from 'lucide-react';
import type { Lang } from '../../lib/lang';

// Mock translations
const t = (key: string, lang: Lang) => {
    const dict: any = {
        en: { pending: 'Pending', shipped: 'Shipped', paid: 'Paid', order: 'Order', customer: 'Customer', channel: 'Channel', status: 'Status', total: 'Total', back: 'Go back to Orders' },
        th: { pending: 'รอโอน', shipped: 'ส่งแล้ว', paid: 'โอนแล้ว', order: 'ออเดอร์', customer: 'ลูกค้า', channel: 'ช่องทาง', status: 'สถานะ', total: 'ยอดรวม', back: 'กลับไปหน้ารายการ' },
        la: { pending: 'ລໍຖ້າໂອນ', shipped: 'ສົ່ງແລ້ວ', paid: 'ໂອນແລ້ວ', order: 'ອໍເດີ', customer: 'ລູກຄ້າ', channel: 'ຊ່ອງທາງ', status: 'ສະຖານະ', total: 'ລວມ', back: 'ກັບໄປໜ້າລາຍການ' }
    };
    return dict[lang]?.[key] || key;
};

export default function DemoPreview({ lang = 'th' }: { lang?: Lang }) {
    const [activeTab, setActiveTab] = useState('orders');
    const [orders, setOrders] = useState([
        { id: 'ORD-001', customer: 'Somchai Jaidee', status: 'Pending', total: 1500, channel: 'Facebook' },
        { id: 'ORD-002', customer: 'Nancy Drew', status: 'Shipped', total: 2400, channel: 'WhatsApp' },
        { id: 'ORD-003', customer: 'John Doe', status: 'Paid', total: 500, channel: 'TikTok' },
    ]);

    const [inputOrder, setInputOrder] = useState('');

    const handleSmartPaste = () => {
        // Simulate smart paste parsing
        if (!inputOrder) return;

        // Fake parsing delay
        setTimeout(() => {
            const newOrder = {
                id: `ORD-00${orders.length + 1}`,
                customer: 'New Customer (Parsed)',
                status: 'Pending',
                total: 990,
                channel: 'Direct'
            };
            setOrders([newOrder, ...orders]);
            setInputOrder('');
            alert('Order Parsed Successfully! (Mock)');
        }, 500);
    };

    return (
        <div className="w-full max-w-5xl mx-auto h-[700px] bg-gray-100 dark:bg-gray-800 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_black] dark:shadow-[8px_8px_0px_0px_white] rounded-lg overflow-hidden flex flex-col md:flex-row font-sans">

            {/* Sidebar */}
            <div className="w-full md:w-20 bg-black dark:bg-white text-white dark:text-black flex md:flex-col items-center py-4 gap-6 overflow-x-auto md:overflow-visible shrink-0">
                <div className="w-10 h-10 bg-lime-400 rounded-full border-2 border-white dark:border-black mb-4 hidden md:block"></div>

                <button
                    onClick={() => setActiveTab('orders')}
                    className={`p-3 rounded-lg transition-all ${activeTab === 'orders' ? 'bg-lime-400 text-black' : 'hover:bg-gray-800 dark:hover:bg-gray-200'}`}
                >
                    <ShoppingCart size={24} />
                </button>
                <button
                    onClick={() => setActiveTab('products')}
                    className={`p-3 rounded-lg transition-all ${activeTab === 'products' ? 'bg-lime-400 text-black' : 'hover:bg-gray-800 dark:hover:bg-gray-200'}`}
                >
                    <Package size={24} />
                </button>
                <button
                    onClick={() => setActiveTab('customers')}
                    className={`p-3 rounded-lg transition-all ${activeTab === 'customers' ? 'bg-lime-400 text-black' : 'hover:bg-gray-800 dark:hover:bg-gray-200'}`}
                >
                    <Users size={24} />
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`p-3 rounded-lg transition-all ${activeTab === 'reports' ? 'bg-lime-400 text-black' : 'hover:bg-gray-800 dark:hover:bg-gray-200'}`}
                >
                    <Activity size={24} />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white dark:bg-gray-900 border-b-2 border-black dark:border-white flex items-center justify-between px-6">
                    <h2 className="text-xl font-black uppercase text-black dark:text-white">{activeTab}</h2>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-green-100 border-2 border-green-500 rounded-full text-xs font-bold text-green-700 items-center gap-2 hidden sm:flex">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            System Online
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-black dark:border-white"></div>
                    </div>
                </header>

                {/* Workspace */}
                <main className="flex-1 p-6 overflow-auto bg-[#f8fafc] dark:bg-black">

                    {activeTab === 'orders' && (
                        <div className="space-y-6">
                            {/* Action Bar */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search orders..."
                                        className="w-full pl-10 pr-4 py-2 border-2 border-black dark:border-white rounded shadow-[2px_2px_0px_0px_black] dark:shadow-[2px_2px_0px_0px_white] focus:outline-none focus:shadow-[1px_1px_0px_0px_black] focus:translate-y-[1px] transition-all"
                                    />
                                </div>
                                <button className="px-4 py-2 bg-lime-400 text-black font-bold border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_black] dark:shadow-[2px_2px_0px_0px_white] active:translate-y-[1px] active:shadow-none flex items-center gap-2 transition-all">
                                    <Plus size={20} />
                                    New Order
                                </button>
                            </div>

                            {/* Smart Paste Demo */}
                            <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                    ⚡ Smart Paste (Try it!)
                                </h3>
                                <div className="flex gap-2">
                                    <textarea
                                        value={inputOrder}
                                        onChange={(e) => setInputOrder(e.target.value)}
                                        placeholder="Paste customer address here..."
                                        className="flex-1 p-2 border-2 border-black dark:border-white text-sm h-16 resize-none"
                                    />
                                    <button
                                        onClick={handleSmartPaste}
                                        className="px-4 bg-black dark:bg-white text-white dark:text-black font-bold border-2 border-black dark:border-white"
                                    >
                                        Auto Fill
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="bg-white dark:bg-gray-900 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white]">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-100 dark:bg-gray-800 border-b-2 border-black dark:border-white">
                                        <tr className="text-black dark:text-white">
                                            <th className="p-4 font-black border-r-2 border-black dark:border-white w-24">ID</th>
                                            <th className="p-4 font-black border-r-2 border-black dark:border-white">{t('customer', lang)}</th>
                                            <th className="p-4 font-black border-r-2 border-black dark:border-white">{t('channel', lang)}</th>
                                            <th className="p-4 font-black border-r-2 border-black dark:border-white">{t('status', lang)}</th>
                                            <th className="p-4 font-black text-right">{t('total', lang)}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black dark:text-white">
                                        {orders.map((order, i) => (
                                            <tr key={order.id} className="border-b-2 border-black dark:border-white last:border-b-0 hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
                                                <td className="p-4 font-bold border-r-2 border-black dark:border-white text-xs">{order.id}</td>
                                                <td className="p-4 font-bold border-r-2 border-black dark:border-white">{order.customer}</td>
                                                <td className="p-4 border-r-2 border-black dark:border-white">
                                                    <span className={`px-2 py-1 text-xs border border-black dark:border-white font-bold uppercase ${order.channel === 'Facebook' ? 'bg-blue-200 text-black' :
                                                            order.channel === 'WhatsApp' ? 'bg-green-200 text-black' :
                                                                'bg-black text-white dark:bg-white dark:text-black'
                                                        }`}>
                                                        {order.channel}
                                                    </span>
                                                </td>
                                                <td className="p-4 border-r-2 border-black dark:border-white">
                                                    <span className={`inline-flex items-center gap-1 font-bold text-sm ${order.status === 'Pending' ? 'text-orange-500' : 'text-green-600'
                                                        }`}>
                                                        <span className={`w-2 h-2 rounded-full ${order.status === 'Pending' ? 'bg-orange-500' : 'bg-green-600'
                                                            }`}></span>
                                                        {t(order.status.toLowerCase(), lang)}
                                                    </span>
                                                </td>
                                                <td className="p-4 font-bold text-right">฿{order.total.toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab !== 'orders' && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                            <Activity size={48} />
                            <p className="text-xl font-bold">This is a mock demo.</p>
                            <button onClick={() => setActiveTab('orders')} className="text-blue-500 underline font-bold">
                                {t('back', lang)}
                            </button>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}
