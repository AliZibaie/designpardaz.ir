import {
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ComputerDesktopIcon,
    MagnifyingGlassIcon, PhotoIcon, ShoppingCartIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

const services = [
    {
        id: 1,
        title: 'طراحی سایت',
        description: 'طراحی وب‌سایت حرفه‌ای و ریسپانسیو با جدیدترین تکنولوژی‌ها',
        icon: ComputerDesktopIcon,
        price: 'از ۱۲ میلیون تومان',
        features: ['طراحی ریسپانسیو', 'بهینه‌سازی سرعت', 'پنل مدیریت', 'پشتیبانی ۶ ماهه'],
        gradient: 'from-slate-800 to-cyan-500',
        popular: false
    },
    {
        id: 2,
        title: 'سئو و بهینه‌سازی',
        description: 'بهینه‌سازی کامل سایت برای موتورهای جستجو و افزایش ترافیک',
        icon: MagnifyingGlassIcon,
        price: 'از ۲۵ میلیون تومان',
        features: ['سئو تکنیکال', 'تولید محتوا', 'گزارش‌گیری', 'پیگیری رتبه'],
        gradient: 'from-cyan-500 to-blue-600',
        popular: true
    },
    {
        id: 3,
        title: 'طراحی گرافیک',
        description: 'طراحی لوگو، هویت بصری و تمام نیازهای گرافیکی شما',
        icon: PhotoIcon,
        price: 'از ۵ میلیون تومان',
        features: ['طراحی لوگو', 'هویت بصری', 'بنر و پوستر', 'کاتالوگ'],
        gradient: 'from-slate-700 to-cyan-400',
        popular: false
    },
    {
        id: 4,
        title: 'فروشگاه اینترنتی',
        description: 'ساخت فروشگاه آنلاین پیشرفته با درگاه پرداخت معتبر',
        icon: ShoppingCartIcon,
        price: 'از ۶۰ میلیون تومان',
        features: ['درگاه پرداخت', 'مدیریت انبار', 'پنل فروشنده', 'اپلیکیشن موبایل'],
        gradient: 'from-slate-900 to-cyan-600',
        popular: false
    }
];

export default function ServicesSection() {
    const [visibleServices, setVisibleServices] = useState<Set<string>>(new Set());
    const [activeService, setActiveService] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService(prev => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50" data-animate>
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                        <SparklesIcon className="w-4 h-4" />
                        <span>خدمات ما</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                        خدماتی که
                        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-slate-700 bg-clip-text"> کسب‌وکار </span>
                        شما را متحول می‌کند
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        از طراحی وب گرفته تا سئو و بازاریابی دیجیتال، تمام نیازهای آنلاین کسب‌وکار شما را پوشش می‌دهیم
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-transparent ${
                                service.popular ? 'border-cyan-200 ring-4 ring-cyan-100' : 'border-slate-100'
                            }`}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-cyan-500 to-slate-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        محبوب‌ترین
                                    </div>
                                </div>
                            )}

                            {/* Service Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Service Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-slate-700 group-hover:bg-clip-text transition-all duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="text-2xl font-black text-cyan-600">
                                    {service.price}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircleIcon className="w-4 h-4 text-cyan-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                                    service.popular
                                        ? 'bg-gradient-to-r from-cyan-500 to-slate-700 text-white hover:from-cyan-600 hover:to-slate-800 shadow-lg hover:shadow-xl'
                                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                }`}>
                                    شروع پروژه
                                </button>
                            </div>

                            {/* Hover Effect Background */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-600 mb-6">نمی‌دانید کدام سرویس برای شما مناسب است؟</p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-slate-700 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        مشاوره رایگان دریافت کنید
                    </button>
                </div>
            </div>
        </section>
    )
}