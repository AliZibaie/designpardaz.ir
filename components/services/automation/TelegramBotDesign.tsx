import { Bot, CheckCircle, ShoppingCart, Headphones, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function TelegramBotDesign() {
    const packages = [
        {
            name: 'ربات ساده',
            price: '۵',
            unit: 'میلیون تومان',
            timeline: '۵ تا ۷ روز',
            features: ['منوی اطلاع‌رسانی', 'دکمه و لینک', 'فرم ثبت درخواست', 'ارسال به ادمین'],
        },
        {
            name: 'ربات پشتیبانی',
            price: '۱۲',
            unit: 'میلیون تومان',
            timeline: '۱۰ تا ۱۴ روز',
            features: ['پاسخگوی خودکار', 'سیستم تیکت', 'دسته‌بندی درخواست', 'پنل مدیریت'],
            popular: true,
        },
        {
            name: 'ربات فروشگاهی',
            price: '۲۵',
            unit: 'میلیون تومان',
            timeline: '۱۴ تا ۲۵ روز',
            features: ['سبد خرید', 'درگاه پرداخت', 'مدیریت محصول', 'اتصال به CRM'],
        },
        {
            name: 'ربات اختصاصی + API',
            price: '۴۰',
            unit: 'میلیون تومان',
            timeline: '۲۵ تا ۴۵ روز',
            features: ['اتصال به سایت', 'CRM و انبار', 'گزارش‌گیری', 'سناریوی سفارشی'],
        },
    ]

    return (
        <section className="py-20 bg-white" id="telegram-bot">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-blue-100 rounded-full">
                            <Bot className="w-12 h-12 text-blue-600" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">طراحی ربات تلگرام</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ربات تلگرام برای فروش، پشتیبانی و اتوماسیون — با پنل مدیریت اختصاصی و اتصال به CRM
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: MessageSquare, title: 'اطلاع‌رسانی', desc: 'ارسال پیام، منو و لینک به مشتریان' },
                        { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'پاسخگوی خودکار و سیستم تیکت' },
                        { icon: ShoppingCart, title: 'فروش آنلاین', desc: 'فروشگاه کامل داخل تلگرام' },
                    ].map((item, i) => (
                        <div key={i} className="text-center p-6 bg-blue-50 rounded-2xl">
                            <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 hover:shadow-xl transition-all ${
                                pkg.popular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-100'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                                    محبوب
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                            <div className="mb-3">
                                <span className="text-2xl font-black text-blue-600">از {pkg.price}</span>
                                <span className="text-gray-500 text-sm mr-1">{pkg.unit}</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-4">{pkg.timeline}</p>
                            <ul className="space-y-2 mb-5">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="block text-center py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 text-sm">
                                مشاوره رایگان
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
