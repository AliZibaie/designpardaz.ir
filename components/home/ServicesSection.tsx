import {
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ComputerDesktopIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    ShoppingCartIcon,
    SparklesIcon,
    CogIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: 'طراحی سایت',
        description: 'طراحی وب‌سایت حرفه‌ای با ادمین پنل اختصاصی و بهینه‌سازی SEO',
        icon: ComputerDesktopIcon,
        price: 'از ۱۲ میلیون تومان',
        features: ['طراحی ریسپانسیو', 'ادمین پنل', 'سئو پایه', 'پشتیبانی ۶ ماهه'],
        gradient: 'from-slate-800 to-cyan-500',
        href: '/services/web-design#corporate',
        popular: false,
    },
    {
        id: 2,
        title: 'طراحی سایت وردپرس',
        description: 'سایت وردپرس حرفه‌ای با پنل مدیریت آسان — تحویل ۷ تا ۳۰ روز',
        icon: GlobeAltIcon,
        price: 'از ۱۲ میلیون تومان',
        features: ['قالب اختصاصی', 'ووکامرس', 'سرعت بهینه', 'آموزش مدیریت'],
        gradient: 'from-indigo-600 to-purple-600',
        href: '/services/web-design#wordpress',
        popular: true,
    },
    {
        id: 3,
        title: 'سیستم CRM',
        description: 'CRM اختصاصی با داشبورد مدیریتی و اتصال به ربات و سایت',
        icon: CogIcon,
        price: 'از ۴۵ میلیون تومان',
        features: ['مدیریت مشتری', 'گزارش فروش', 'ادمین پنل', 'API اختصاصی'],
        gradient: 'from-cyan-600 to-blue-700',
        href: '/services/web-design#crm',
        popular: true,
    },
    {
        id: 4,
        title: 'ربات تلگرام',
        description: 'ربات فروش، پشتیبانی و اتوماسیون با پنل مدیریت',
        icon: ChatBubbleLeftRightIcon,
        price: 'از ۵ میلیون تومان',
        features: ['فروشگاهی', 'پشتیبانی', 'اتصال CRM', 'سناریوی سفارشی'],
        gradient: 'from-blue-500 to-sky-600',
        href: '/services/web-design#telegram-bot',
        popular: false,
    },
    {
        id: 5,
        title: 'ربات بله',
        description: 'ربات بله برای فروش و پاسخگویی در پیام‌رسان داخلی',
        icon: ChatBubbleLeftRightIcon,
        price: 'از ۴ میلیون تومان',
        features: ['معرفی خدمات', 'ثبت سفارش', 'پنل ادمین', 'اتصال CRM'],
        gradient: 'from-green-500 to-emerald-600',
        href: '/services/web-design#bale-bot',
        popular: false,
    },
    {
        id: 6,
        title: 'سئو و بهینه‌سازی',
        description: 'بهینه‌سازی سایت برای گوگل و افزایش ترافیک ارگانیک',
        icon: MagnifyingGlassIcon,
        price: 'از ۸ میلیون تومان',
        features: ['سئو تکنیکال', 'تولید محتوا', 'گزارش‌گیری', 'پیگیری رتبه'],
        gradient: 'from-cyan-500 to-blue-600',
        href: '/services/seo',
        popular: false,
    },
    {
        id: 7,
        title: 'فروشگاه اینترنتی',
        description: 'فروشگاه آنلاین با درگاه پرداخت و پنل مدیریت کامل',
        icon: ShoppingCartIcon,
        price: 'از ۳۵ میلیون تومان',
        features: ['درگاه پرداخت', 'مدیریت انبار', 'CRM فروش', 'اپ موبایل'],
        gradient: 'from-slate-900 to-cyan-600',
        href: '/services/web-design#ecommerce',
        popular: false,
    },
    {
        id: 8,
        title: 'طراحی گرافیک',
        description: 'لوگو، هویت بصری و طراحی UI/UX حرفه‌ای',
        icon: PhotoIcon,
        price: 'از ۵ میلیون تومان',
        features: ['طراحی لوگو', 'هویت بصری', 'UI/UX', 'بنر و پوستر'],
        gradient: 'from-slate-700 to-cyan-400',
        href: '/services/graphic-design',
        popular: false,
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50" data-animate>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                        <SparklesIcon className="w-4 h-4" />
                        <span>خدمات ما</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                        طراحی سایت، CRM، ربات
                        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-slate-700 bg-clip-text"> و ادمین پنل </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        از طراحی سایت و وردپرس تا CRM اختصاصی، ربات تلگرام و بله — قیمت‌گذاری شفاف بر اساس بازار ایران
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-transparent block ${
                                service.popular ? 'border-cyan-200 ring-4 ring-cyan-100' : 'border-slate-100'
                            }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-cyan-500 to-slate-700 text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-lg">
                                        پرطرفدار
                                    </div>
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                                <div className="text-xl font-black text-cyan-600">{service.price}</div>
                                <ul className="space-y-1.5">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="inline-block w-full py-2.5 text-center rounded-xl font-bold text-sm bg-slate-100 text-slate-900 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-slate-700 group-hover:text-white transition-all">
                                    مشاهده جزئیات
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-600 mb-6">نمی‌دانید کدام سرویس برای شما مناسب است؟</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-slate-700 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        مشاوره رایگان دریافت کنید
                    </Link>
                </div>
            </div>
        </section>
    );
}
