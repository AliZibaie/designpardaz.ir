import { Database, Users, BarChart3, CheckCircle, Link2 } from 'lucide-react'
import Link from 'next/link'

export default function CrmDesign() {
    const features = [
        'مدیریت مشتریان و لیدها',
        'پنل ادمین اختصاصی',
        'گزارش‌گیری و داشبورد',
        'اتصال به ربات تلگرام و بله',
        'یکپارچه‌سازی با سایت',
        'دسترسی سطح‌بندی شده',
    ]

    const packages = [
        {
            name: 'CRM پایه',
            price: '۴۵',
            unit: 'میلیون تومان',
            timeline: '۳۰ تا ۴۵ روز',
            features: ['مدیریت مشتری', 'ثبت تماس', 'یادآور', 'گزارش ساده'],
        },
        {
            name: 'CRM حرفه‌ای',
            price: '۸۰',
            unit: 'میلیون تومان',
            timeline: '۴۵ تا ۶۰ روز',
            features: ['فروش و پipeline', 'اتصال پیامک', 'داشبورد تحلیلی', 'ادمین پنل کامل'],
            popular: true,
        },
        {
            name: 'CRM سازمانی',
            price: '۱۵۰',
            unit: 'میلیون تومان',
            timeline: '۶۰ تا ۹۰ روز',
            features: ['چند شعبه', 'API اختصاصی', 'حسابداری', 'اتصال ERP/انبار'],
        },
    ]

    return (
        <section className="py-20 bg-slate-900 text-white" id="crm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-cyan-500/20 rounded-full border border-cyan-400/30">
                            <Database className="w-12 h-12 text-cyan-400" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">طراحی سیستم CRM اختصاصی</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        CRM سفارشی با ادمین پنل حرفه‌ای — مدیریت مشتری، فروش و گزارش‌گیری متناسب با فرآیند کسب‌وکار شما
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-8">امکانات CRM</h3>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200 text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {[
                            { icon: Users, title: 'مدیریت تیم فروش', desc: 'تخصیص لید، پیگیری و نرخ تبدیل' },
                            { icon: BarChart3, title: 'داشبورد مدیریتی', desc: 'نمودار فروش، گزارش ماهانه و KPI' },
                            { icon: Link2, title: 'یکپارچه‌سازی', desc: 'اتصال به سایت، ربات و سیستم‌های دیگر' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4">
                                <item.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-white/5 backdrop-blur rounded-2xl p-8 border-2 transition-all hover:bg-white/10 ${
                                pkg.popular ? 'border-cyan-400 ring-4 ring-cyan-400/20' : 'border-white/10'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    پرطرفدار
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                            <div className="mb-4">
                                <span className="text-3xl font-black text-cyan-400">از {pkg.price}</span>
                                <span className="text-gray-400 mr-1">{pkg.unit}</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{pkg.timeline}</p>
                            <ul className="space-y-2 mb-6">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className={`block text-center py-3 rounded-xl font-bold ${
                                    pkg.popular ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-white/10 hover:bg-white/20'
                                }`}
                            >
                                درخواست مشاوره CRM
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
