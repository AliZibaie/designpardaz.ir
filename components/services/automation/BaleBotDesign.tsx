import { MessageCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function BaleBotDesign() {
    const packages = [
        {
            name: 'ربات بله ساده',
            price: '۴',
            unit: 'میلیون تومان',
            timeline: '۵ تا ۱۰ روز',
            features: ['معرفی خدمات', 'منو و دکمه', 'دریافت اطلاعات', 'ارسال به مدیر'],
        },
        {
            name: 'ربات بله فروشگاهی',
            price: '۱۵',
            unit: 'میلیون تومان',
            timeline: '۱۰ تا ۲۵ روز',
            features: ['ثبت سفارش', 'مدیریت مشتری', 'پنل ادمین', 'گزارش فروش'],
            popular: true,
        },
        {
            name: 'ربات بله + CRM',
            price: '۳۰',
            unit: 'میلیون تومان',
            timeline: '۲۰ تا ۳۵ روز',
            features: ['اتصال CRM', 'اتوماسیون', 'API اختصاصی', 'پشتیبانی ۶ ماهه'],
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-green-50 to-white" id="bale-bot">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-100 rounded-full">
                            <MessageCircle className="w-12 h-12 text-green-600" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">طراحی ربات بله</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ربات بله برای کسب‌وکارهای ایرانی — پاسخگویی، فروش و مدیریت مشتری در پیام‌رسان داخلی
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all hover:-translate-y-1 ${
                                pkg.popular ? 'border-green-500 ring-4 ring-green-100' : 'border-gray-100'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    پیشنهاد ویژه
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                            <div className="mb-4">
                                <span className="text-3xl font-black text-green-600">از {pkg.price}</span>
                                <span className="text-gray-500 mr-1">{pkg.unit}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{pkg.timeline}</p>
                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className={`block text-center py-3 rounded-xl font-bold transition-all ${
                                    pkg.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                            >
                                سفارش ربات بله
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
