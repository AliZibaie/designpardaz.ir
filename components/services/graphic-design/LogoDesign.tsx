import { Palette, Zap, Target, Award } from 'lucide-react';

export default function LogoDesign() {
    const packages = [
        {
            name: 'پکیج پایه',
            price: '2,500,000',
            features: [
                '3 کانسپت اولیه',
                'فایل وکتور AI و EPS',
                'رنگی و سیاه و سفید',
                '2 بار ریویژن'
            ]
        },
        {
            name: 'پکیج حرفه‌ای',
            price: '4,500,000',
            features: [
                '5 کانسپت متنوع',
                'تمام فرمت‌های مورد نیاز',
                'راهنمای استفاده از برند',
                'نسخه‌های مختلف (افقی، عمودی)',
                '4 بار ریویژن'
            ],
            popular: true
        },
        {
            name: 'پکیج VIP',
            price: '7,000,000',
            features: [
                '8 کانسپت خلاقانه',
                'کامل‌ترین پکیج فایل',
                'موک‌آپ و پیش‌نمایش',
                'انیمیشن لوگو',
                'ریویژن نامحدود',
                'پشتیبانی 6 ماهه'
            ]
        }
    ];

    return (
        <section id="logo" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی لوگو حرفه‌ای
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        لوگو، نخستین تماس مشتریان با برند شماست. تیم طراحی دیزاین پرداز با بهره‌گیری از
                        جدیدترین تکنیک‌های طراحی، لوگویی منحصر به فرد برای برند شما خلق می‌کند
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: <Palette className="w-8 h-8" />,
                            title: 'طراحی خلاقانه',
                            desc: 'ایده‌های نو و متمایز'
                        },
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: 'تحویل سریع',
                            desc: 'حداکثر 7 روز کاری'
                        },
                        {
                            icon: <Target className="w-8 h-8" />,
                            title: 'متناسب با برند',
                            desc: 'طراحی بر اساس هویت شما'
                        },
                        {
                            icon: <Award className="w-8 h-8" />,
                            title: 'کیفیت بالا',
                            desc: 'فایل‌های وکتور با کیفیت'
                        }
                    ].map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`p-8 rounded-2xl shadow-lg ${pkg.popular ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200' : 'bg-white'}`}>
                            {pkg.popular && (
                                <div className="text-center mb-4">
                  <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    محبوب‌ترین
                  </span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">{pkg.name}</h3>
                            <div className="text-center mb-6">
                                <span className="text-3xl font-bold text-cyan-600">{pkg.price}</span>
                                <span className="text-slate-600 mr-2">تومان</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700">
                                        <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center ml-3">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-semibold transition-colors duration-300 ${
                                pkg.popular
                                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                                    : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                            }`}>
                                انتخاب پکیج
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
