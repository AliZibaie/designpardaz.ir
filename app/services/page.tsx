import React from 'react';
import {
    CodeBracketIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ClockIcon,
    ShieldCheckIcon,
    SparklesIcon,
    RocketLaunchIcon,
    HeartIcon,
    ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const servicesData = [
    {
        category: 'طراحی و توسعه وب',
        icon: CodeBracketIcon,
        description: 'طراحی سایت، وردپرس، فروشگاه و ادمین پنل با قیمت بازار ایران',
        color: 'from-blue-500 to-cyan-500',
        services: [
            { name: 'طراحی سایت شرکتی', href: '/services/web-design#corporate', popular: true, price: 'از ۱۲ میلیون' },
            { name: 'طراحی سایت وردپرس', href: '/services/web-design#wordpress', popular: true, price: 'از ۱۲ میلیون' },
            { name: 'فروشگاه اینترنتی', href: '/services/web-design#ecommerce', popular: true, price: 'از ۳۵ میلیون' },
            { name: 'وب اپلیکیشن', href: '/services/web-design#webapp', popular: false, price: 'از ۶۵ میلیون' },
            { name: 'طراحی لندینگ پیج', href: '/services/web-design#landing', popular: false, price: 'از ۸ میلیون' },
            { name: 'ریدیزاین سایت', href: '/services/web-design#redesign', popular: false, price: 'از ۱۰ میلیون' },
        ]
    },
    {
        category: 'CRM و ربات',
        icon: ChatBubbleLeftRightIcon,
        description: 'CRM اختصاصی، ربات تلگرام، ربات بله و اتوماسیون فروش',
        color: 'from-violet-500 to-purple-600',
        services: [
            { name: 'سیستم CRM اختصاصی', href: '/services/web-design#crm', popular: true, price: 'از ۴۵ میلیون' },
            { name: 'ربات تلگرام', href: '/services/web-design#telegram-bot', popular: true, price: 'از ۵ میلیون' },
            { name: 'ربات بله', href: '/services/web-design#bale-bot', popular: false, price: 'از ۴ میلیون' },
            { name: 'ربات فروشگاهی', href: '/services/web-design#telegram-bot', popular: true, price: 'از ۱۵ میلیون' },
            { name: 'ادمین پنل اختصاصی', href: '/services/web-design#crm', popular: false, price: 'از ۳۰ میلیون' },
        ]
    },
    {
        category: 'سئو و بهینه‌سازی',
        icon: MagnifyingGlassIcon,
        description: 'سایت شما را در نتایج جستجو به رتبه‌های بالا برسانید و ترافیک ارگانیک کسب کنید',
        color: 'from-green-500 to-emerald-500',
        services: [
            { name: 'سئو تکنیکال', href: '/services/seo#technical', popular: true },
            { name: 'تولید محتوای سئو', href: '/services/seo#content', popular: true },
            { name: 'سئو محلی', href: '/services/seo#local' },
            { name: 'تحلیل و گزارش سئو', href: '/services/seo#analytics' },
            { name: 'بهینه‌سازی سرعت', href: '/services/seo#speed' },
            { name: 'Link Building', href: '/services/seo#linkbuilding' }
        ]
    },
    {
        category: 'طراحی گرافیک',
        icon: PhotoIcon,
        description: 'هویت بصری منحصر به فرد برای برند شما با خلاقیت و تخصص تیم جوان ما',
        color: 'from-purple-500 to-pink-500',
        services: [
            { name: 'طراحی لوگو', href: '/services/graphic-design#logo', popular: true },
            { name: 'هویت بصری', href: '/services/graphic-design#branding', popular: true },
            { name: 'طراحی کاتالوگ', href: '/services/graphic-design#catalog' },
            { name: 'بنر و پوستر', href: '/services/graphic-design#banner' },
            { name: 'طراحی UI/UX', href: '/services/graphic-design#ui-ux', popular: true },
            { name: 'موشن گرافیک', href: '/services/graphic-design#motion' }
        ]
    }
];

const features = [
    {
        icon: RocketLaunchIcon,
        title: 'سرعت و نوآوری',
        description: 'با استفاده از جدیدترین تکنولوژی‌ها، پروژه شما را سریع تحویل می‌دهیم'
    },
    {
        icon: HeartIcon,
        title: 'طراحی با عشق',
        description: 'هر پیکسل را با دقت و علاقه طراحی می‌کنیم تا تجربه کاربری بی‌نظیری ایجاد کنیم'
    },
    {
        icon: ShieldCheckIcon,
        title: 'کیفیت تضمینی',
        description: 'از کیفیت کار خود مطمئن هستیم و تا رضایت کامل شما همراهتان خواهیم بود'
    },
    {
        icon: ClockIcon,
        title: 'پشتیبانی ۲۴/۷',
        description: 'تیم جوان و پرانرژی ما همیشه آماده پاسخگویی و راهنمایی شماست'
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        {/* Logo Style Icon */}
                        <div className="mx-auto w-20 h-20 mb-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl"></div>
                            <div className="absolute inset-2 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-1 w-8 h-8">
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm transform rotate-12"></div>
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm transform -rotate-12"></div>
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm transform -rotate-12"></div>
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm transform rotate-12"></div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            خدمات
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> دیزاین پرداز</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            تیمی جوان و خلاق با ایده‌های نو و انرژی بالا آماده تحقق رؤیای دیجیتال شماست.
                            از طراحی تا پیاده‌سازی، همه چیز را با کیفیت عالی ارائه می‌دهیم
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <SparklesIcon className="w-5 h-5 text-cyan-400" />
                                <span>خلاقیت بی‌حد</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RocketLaunchIcon className="w-5 h-5 text-cyan-400" />
                                <span>تحویل سریع</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HeartIcon className="w-5 h-5 text-cyan-400" />
                                <span>طراحی با عشق</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات ما</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        هر آنچه که برای موفقیت دیجیتال شما نیاز دارید را ارائه می‌دهیم
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {servicesData.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                        <div className="relative z-10">
                                            <IconComponent className="w-12 h-12 mb-4" />
                                            <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                                            <p className="text-white/90 text-sm leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Services List */}
                                    <div className="p-6">
                                        <div className="space-y-3">
                                            {category.services.map((service, serviceIndex) => (
                                                <div key={serviceIndex} className="group/service">
                                                    <a
                                                        href={service.href}
                                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-200"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                            <span className="text-gray-700 font-medium">
                                                                {service.name}
                                                            </span>
                                                            {service.popular && (
                                                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                                                    محبوب
                                                                </span>
                                                            )}
                                                        </div>
                                                        <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover/service:text-gray-600 group-hover/service:translate-x-1 transition-all duration-200 rotate-180" />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <a
                                                href={`/services/${
                                                    category.category === 'طراحی و توسعه وب' || category.category === 'CRM و ربات'
                                                        ? 'web-design'
                                                        : category.category === 'سئو و بهینه‌سازی'
                                                          ? 'seo'
                                                          : 'graphic-design'
                                                }`}
                                                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                                            >
                                                <span>مشاهده جزئیات</span>
                                                <ArrowRightIcon className="w-4 h-4 rotate-180" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">چرا دیزاین پرداز؟</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            تیم جوان ما با انرژی و خلاقیت بالا، آماده خلق تجربه‌های منحصر به فرد برای شماست
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        آماده شروع پروژه جدید هستید؟
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        بیایید با هم چیزی فوق‌العاده خلق کنیم. تیم جوان و پرشور ما منتظر همکاری با شماست
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            شروع پروژه
                        </a>
                        <a
                            href="/portfolio"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                        >
                            مشاهده نمونه کارها
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}