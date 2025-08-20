import { FileText, Layers, Users, Building } from 'lucide-react';

export default function BrochureDesign() {
    return (
        <section id="brochure" className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی بروشور
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        بروشورهای حرفه‌ای که اطلاعات کسب و کار شما را به شکلی جذاب و منظم ارائه می‌دهند
                    </p>
                </div>

                {/* Brochure Types */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: <FileText className="w-8 h-8" />,
                            title: 'بروشور شرکتی',
                            desc: 'معرفی کامل شرکت و خدمات',
                            price: '3,500,000'
                        },
                        {
                            icon: <Layers className="w-8 h-8" />,
                            title: 'بروشور سه لت',
                            desc: 'فرمت تاشو سه قسمتی',
                            price: '2,800,000'
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: 'بروشور رویداد',
                            desc: 'معرفی کنفرانس و نمایشگاه',
                            price: '3,000,000'
                        },
                        {
                            icon: <Building className="w-8 h-8" />,
                            title: 'بروشور املاک',
                            desc: 'معرفی پروژه‌های ساختمانی',
                            price: '4,000,000'
                        }
                    ].map((type, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                {type.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{type.title}</h3>
                            <p className="text-slate-600 mb-4 text-sm">{type.desc}</p>
                            <p className="text-cyan-600 font-bold">{type.price} تومان</p>
                        </div>
                    ))}
                </div>

                {/* Design Process */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
                    <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
                        فرآیند طراحی بروشور
                    </h3>
                    <div className="grid md:grid-cols-5 gap-8">
                        {[
                            { step: 1, title: 'جمع‌آوری اطلاعات', desc: 'محتوا و اهداف' },
                            { step: 2, title: 'طراحی اولیه', desc: 'لی‌آوت و چیدمان' },
                            { step: 3, title: 'انتخاب رنگ', desc: 'پالت رنگی متناسب' },
                            { step: 4, title: 'بازبینی', desc: 'اصلاحات مورد نیاز' },
                            { step: 5, title: 'تحویل نهایی', desc: 'فایل‌های آماده چاپ' }
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                                    {phase.step}
                                </div>
                                <h4 className="font-semibold text-slate-800 mb-2">{phase.title}</h4>
                                <p className="text-slate-600 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Package Comparison */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'پکیج اقتصادی',
                            price: '2,500,000',
                            features: [
                                'طراحی ساده و کاربردی',
                                'حداکثر 4 صفحه',
                                'یک بار ریویژن',
                                'فایل PDF نهایی'
                            ]
                        },
                        {
                            name: 'پکیج حرفه‌ای',
                            price: '4,500,000',
                            features: [
                                'طراحی خلاقانه و متمایز',
                                'تا 8 صفحه',
                                '3 بار ریویژن',
                                'فرمت‌های مختلف تحویل',
                                'موک‌آپ و پیش‌نمایش'
                            ],
                            popular: true
                        },
                        {
                            name: 'پکیج VIP',
                            price: '7,000,000',
                            features: [
                                'طراحی لوکس و اختصاصی',
                                'صفحات نامحدود',
                                'ریویژن نامحدود',
                                'انیمیشن و عناصر تعاملی',
                                'نسخه دیجیتال تعاملی',
                                'مشاوره چاپ و کاغذ'
                            ]
                        }
                    ].map((pkg, index) => (
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
