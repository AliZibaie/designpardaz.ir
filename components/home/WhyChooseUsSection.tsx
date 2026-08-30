'use client';

import {
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    CurrencyDollarIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    TrophyIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";

export default function WhyChooseUsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50" data-animate>
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600 rounded-full text-sm font-medium mb-4">
                        <TrophyIcon className="w-4 h-4" />
                        <span>مزیت‌های ما</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        چرا
                        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text"> دیزاین پرداز </span>
                        انتخاب کنید؟
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        طراحی سایت، CRM، ربات و ادمین پنل — همه در یک تیم با قیمت شفاف بازار ایران
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: RocketLaunchIcon,
                            title: 'تحویل سریع',
                            description: 'سایت وردپرس ۷ تا ۳۰ روز، ربات ۵ تا ۲۵ روز — زمان‌بندی شفاف و به‌موقع',
                            gradient: 'from-cyan-500 to-blue-500'
                        },
                        {
                            icon: ShieldCheckIcon,
                            title: 'پشتیبانی واقعی',
                            description: '۶ ماه تا ۱ سال پشتیبانی رایگان + آموزش کامل ادمین پنل',
                            gradient: 'from-blue-500 to-indigo-500'
                        },
                        {
                            icon: CurrencyDollarIcon,
                            title: 'قیمت بازار ایران',
                            description: 'قیمت‌گذاری شفاف بر اساس نرخ واقعی — بدون هزینه پنهان',
                            gradient: 'from-cyan-400 to-cyan-600'
                        },
                        {
                            icon: UserGroupIcon,
                            title: 'یک تیم، همه خدمات',
                            description: 'طراحی سایت + CRM + ربات تلگرام + سئو — بدون هماهنگی با چند پیمانکار',
                            gradient: 'from-blue-600 to-slate-700'
                        },
                        {
                            icon: ChatBubbleLeftRightIcon,
                            title: 'مشاوره رایگان',
                            description: 'قبل از شروع پروژه، نیازسنجی دقیق و پیشنهاد بهترین راه‌حل',
                            gradient: 'from-indigo-500 to-cyan-500'
                        },
                        {
                            icon: ChartBarIcon,
                            title: 'تمرکز بر فروش',
                            description: 'هر پروژه با هدف جذب مشتری و افزایش درآمد طراحی می‌شود',
                            gradient: 'from-slate-600 to-blue-600'
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-cyan-200"
                        >
                            {/* Feature Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Feature Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect Background */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
                        <div>
                            <div className="text-4xl lg:text-5xl font-black mb-2 text-cyan-300">15+</div>
                            <div className="text-slate-300">پروژه در حال انجام</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black mb-2 text-cyan-300">25+</div>
                            <div className="text-slate-300">مشاوره رایگان</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black mb-2 text-cyan-300">100%</div>
                            <div className="text-slate-300">تضمین کیفیت</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-black mb-2 text-cyan-300">24/7</div>
                            <div className="text-slate-300">آمادگی مشاوره</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}