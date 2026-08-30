import { Globe, CheckCircle, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function WordPressDesign() {
    const features = [
        'طراحی اختصاصی با وردپرس',
        'قالب سفارشی یا حرفه‌ای',
        'پنل مدیریت (ادمین پنل) آسان',
        'بهینه‌سازی SEO پایه',
        'امنیت و بروزرسانی',
        'آموزش کامل مدیریت سایت',
    ]

    const packages = [
        {
            name: 'وردپرس پایه',
            price: '۱۲',
            unit: 'میلیون تومان',
            pages: 'تا ۵ صفحه',
            timeline: '۷ تا ۱۰ روز',
            features: ['قالب حرفه‌ای', 'فرم تماس', 'ریسپانسیو', 'سئو پایه'],
        },
        {
            name: 'وردپرس حرفه‌ای',
            price: '۲۵',
            unit: 'میلیون تومان',
            pages: 'تا ۱۵ صفحه',
            timeline: '۱۴ تا ۲۱ روز',
            features: ['طراحی UI اختصاصی', 'ادمین پنل پیشرفته', 'چندزبانه', 'سرعت بهینه'],
            popular: true,
        },
        {
            name: 'فروشگاه ووکامرس',
            price: '۳۵',
            unit: 'میلیون تومان',
            pages: 'نامحدود محصول',
            timeline: '۲۱ تا ۳۰ روز',
            features: ['درگاه پرداخت', 'مدیریت انبار', 'کد تخفیف', 'گزارش فروش'],
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="wordpress">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-100 rounded-full">
                            <Globe className="w-12 h-12 text-indigo-600" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی سایت با وردپرس
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        سریع‌ترین راه برای داشتن سایت حرفه‌ای با ادمین پنل قدرتمند وردپرس — مناسب کسب‌وکارهایی که می‌خواهند خودشان محتوا را مدیریت کنند
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">چرا وردپرس؟</h3>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="bg-indigo-50 rounded-2xl p-6 flex items-start gap-4">
                            <Zap className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">تحویل سریع</h4>
                                <p className="text-gray-600">سایت وردپرسی در ۷ تا ۳۰ روز آماده تحویل — بسته به پیچیدگی پروژه</p>
                            </div>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-6 flex items-start gap-4">
                            <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">امنیت و پشتیبانی</h4>
                                <p className="text-gray-600">۶ ماه تا ۱ سال پشتیبانی رایگان + آموزش کامل ادمین پنل</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${
                                pkg.popular ? 'border-indigo-500 ring-4 ring-indigo-100' : 'border-gray-100'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    پرفروش
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                            <div className="mb-4">
                                <span className="text-3xl font-black text-indigo-600">از {pkg.price}</span>
                                <span className="text-gray-500 mr-1">{pkg.unit}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{pkg.pages} · {pkg.timeline}</p>
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
                                    pkg.popular
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                            >
                                سفارش دهید
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
