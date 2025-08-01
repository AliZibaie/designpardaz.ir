'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    PaperAirplaneIcon,
    CheckCircleIcon,
    BuildingOfficeIcon,
    UserIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    MagnifyingGlassIcon,
    PaintBrushIcon,
    ShoppingCartIcon,
    StarIcon,
    HeartIcon,
    BoltIcon,
    RocketLaunchIcon,
    LightBulbIcon,
    FireIcon,
} from '@heroicons/react/24/outline';

// Contact Information
const contactInfo = {
    phone: {
        number: '021-3333-4444',
        display: '۰۲۱-۳۳۳۳-۴۴۴۴',
        whatsapp: '+989123456789',
        available24: true
    },
    email: {
        main: 'info@designpardaz.ir',
        support: 'support@designpardaz.ir',
        sales: 'sales@designpardaz.ir'
    },
    address: {
        full: 'تهران، خیابان ولیعصر، نرسیده به پارک وی، پلاک ۱۲۳۴',
        city: 'تهران',
        country: 'ایران',
        coordinates: { lat: 35.7219, lng: 51.3347 }
    },
    workingHours: {
        weekdays: 'شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰',
        thursday: 'پنج‌شنبه: ۹:۰۰ - ۱۴:۰۰',
        friday: 'جمعه: تعطیل',
        emergency: 'پشتیبانی اضطراری: ۲۴/۷'
    },
    social: {
        instagram: '@designpardaz.ir',
        telegram: '@designpardaz',
        linkedin: 'company/designpardaz',
        whatsapp: '+989123456789'
    }
};

// Service Categories for Quick Contact
const quickServices = [
    {
        id: 'web-design',
        title: 'طراحی وب‌سایت',
        icon: ComputerDesktopIcon,
        color: 'from-blue-500 to-purple-500',
        price: 'از ۵ میلیون تومان',
        urgent: false
    },
    {
        id: 'ecommerce',
        title: 'فروشگاه اینترنتی',
        icon: ShoppingCartIcon,
        color: 'from-green-500 to-blue-500',
        price: 'از ۸ میلیون تومان',
        urgent: true
    },
    {
        id: 'seo',
        title: 'سئو و بهینه‌سازی',
        icon: MagnifyingGlassIcon,
        color: 'from-orange-500 to-red-500',
        price: 'از ۳ میلیون تومان',
        urgent: false
    },
    {
        id: 'graphic',
        title: 'طراحی گرافیک',
        icon: PaintBrushIcon,
        color: 'from-pink-500 to-red-500',
        price: 'از ۱.۵ میلیون تومان',
        urgent: false
    },
    {
        id: 'mobile-app',
        title: 'اپلیکیشن موبایل',
        icon: DevicePhoneMobileIcon,
        color: 'from-purple-500 to-pink-500',
        price: 'از ۱۲ میلیون تومان',
        urgent: true
    },
    {
        id: 'consultation',
        title: 'مشاوره رایگان',
        icon: LightBulbIcon,
        color: 'from-yellow-500 to-orange-500',
        price: 'رایگان',
        urgent: false
    }
];

// FAQ Data
const faqs = [
    {
        question: 'مدت زمان تحویل پروژه چقدر است؟',
        answer: 'بسته به نوع و پیچیدگی پروژه، معمولاً بین ۱ تا ۴ هفته زمان نیاز داریم. در مشاوره اولیه، زمان دقیق را اعلام می‌کنیم.'
    },
    {
        question: 'آیا پشتیبانی رایگان ارائه می‌دهید؟',
        answer: 'بله، همه پروژه‌ها شامل ۶ ماه پشتیبانی رایگان هستند. پس از آن نیز با تعرفه مناسب خدمات پشتیبانی ارائه می‌دهیم.'
    },
    {
        question: 'هزینه پروژه را چگونه محاسبه می‌کنید؟',
        answer: 'هزینه بر اساس پیچیدگی، تعداد صفحات، ویژگی‌های خاص و زمان تحویل محاسبه می‌شود. مشاوره و برآورد هزینه کاملاً رایگان است.'
    },
    {
        question: 'آیا امکان پرداخت اقساطی وجود دارد؟',
        answer: 'بله، برای پروژه‌های بالای ۵ میلیون تومان امکان پرداخت اقساطی وجود دارد. معمولاً در ۳ مرحله: ۵۰% شروع، ۳۰% میانه، ۲۰% تحویل نهایی.'
    },
    {
        question: 'چه ضمانتی برای کیفیت کار ارائه می‌دهید؟',
        answer: 'تمام پروژه‌ها با ضمانت کیفیت و رضایت ۱۰۰% تحویل می‌شوند. در صورت عدم رضایت، هزینه را بازگردانی می‌کنیم.'
    }
];

// Contact Methods
const contactMethods = [
    {
        title: 'تماس تلفنی مستقیم',
        description: 'سریع‌ترین راه ارتباط با متخصصان ما',
        icon: PhoneIcon,
        action: `tel:${contactInfo.phone.number}`,
        color: 'from-green-500 to-blue-500',
        available: 'دردسترس ۲۴/۷',
        response: 'پاسخ فوری'
    },
    {
        title: 'واتساپ و پیام رسان',
        description: 'چت آنلاین و ارسال فایل',
        icon: ChatBubbleLeftRightIcon,
        action: `https://wa.me/${contactInfo.phone.whatsapp}`,
        color: 'from-green-400 to-green-600',
        available: 'آنلاین',
        response: 'تا ۵ دقیقه'
    },
    {
        title: 'ایمیل پشتیبانی',
        description: 'برای سوالات تخصصی و مفصل',
        icon: EnvelopeIcon,
        action: `mailto:${contactInfo.email.main}`,
        color: 'from-blue-500 to-purple-500',
        available: 'همیشه',
        response: 'تا ۲ ساعت'
    },
    {
        title: 'بازدید حضوری',
        description: 'ملاقات رودررو در دفتر مرکزی',
        icon: BuildingOfficeIcon,
        action: '#',
        color: 'from-orange-500 to-red-500',
        available: 'با قرار قبلی',
        response: 'مشاوره کامل'
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        agreement: false
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [selectedService, setSelectedService] = useState('');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    // const [ setVisibleElements] = useState(new Set());
    const formRef = useRef<HTMLFormElement>(null);
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    budget: '',
                    timeline: '',
                    message: '',
                    agreement: false
                });
                setFormStatus('idle');
            }, 3000);
        }, 2000);
    };

    // Handle service selection
    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId);
        setFormData(prev => ({ ...prev, service: serviceId }));
    };

    return (
        <>

            <div className="min-h-screen bg-white">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">

                    {/* Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20 animate-gradient-x"></div>
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-8">
                                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                <span>تماس با ما</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                                مشاوره
                                <span className="text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text"> رایگان </span>
                                دریافت کنید
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                تیم متخصص دیزاین پرداز
                                <strong className="text-orange-400"> ۲۴ ساعته </strong>
                                آماده پاسخگویی به سوالات شماست.
                                <br className="hidden lg:block" />
                                همین الان تماس بگیرید و
                                <strong className="text-pink-400"> مشاوره کاملاً رایگان </strong>
                                دریافت کنید.
                            </p>

                            {/* Quick Contact Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {[
                                    { label: 'پاسخ فوری', value: '< ۵ دقیقه', icon: BoltIcon, color: 'text-yellow-400' },
                                    { label: 'مشاوره رایگان', value: '۱۰۰%', icon: HeartIcon, color: 'text-red-400' },
                                    { label: 'در دسترس', value: '۲۴/۷', icon: ClockIcon, color: 'text-blue-400' },
                                    { label: 'رضایت مشتری', value: '۹۸%', icon: StarIcon, color: 'text-purple-400' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`${stat.color} mb-3`}>
                                            <stat.icon className="w-8 h-8 mx-auto mb-2" />
                                        </div>
                                        <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Urgent Contact */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`tel:${contactInfo.phone.number}`}
                                    className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <span className="flex items-center gap-2">
                                        <PhoneIcon className="w-5 h-5 group-hover:animate-bounce" />
                                        تماس فوری: {contactInfo.phone.display}
                                    </span>
                                </a>

                                <a
                                    href={`https://wa.me/${contactInfo.phone.whatsapp}`}
                                    className="group px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <span className="flex items-center gap-2">
                                        <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        واتساپ
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Service Selection */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                                <RocketLaunchIcon className="w-4 h-4" />
                                <span>انتخاب سریع خدمت</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                چه
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"> خدمتی </span>
                                نیاز دارید؟
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                خدمت مورد نظرتان را انتخاب کنید تا مشاوره تخصصی‌تری دریافت کنید
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {quickServices.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => handleServiceSelect(service.id)}
                                    className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                                        selectedService === service.id
                                            ? 'border-orange-500 ring-4 ring-orange-500/20'
                                            : 'border-gray-100 hover:border-orange-200'
                                    }`}
                                >
                                    {/* Urgent Badge */}
                                    {service.urgent && (
                                        <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse">
                                            فوری
                                        </div>
                                    )}

                                    {/* Service Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Service Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="text-2xl font-black text-orange-600">{service.price}</div>
                                        {selectedService === service.id && (
                                            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                                                <CheckCircleIcon className="w-4 h-4" />
                                                <span>انتخاب شده</span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Selected Service Info */}
                        {selectedService && (
                            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                                        <CheckCircleIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {quickServices.find(s => s.id === selectedService)?.title} انتخاب شد
                                        </h3>
                                        <p className="text-gray-600">فرم زیر را پر کنید تا مشاوره تخصصی دریافت کنید</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" data-animate>
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16">

                            {/* Contact Form */}
                            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-black text-gray-900 mb-4">
                                        درخواست
                                        <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> مشاوره رایگان</span>
                                    </h2>
                                    <p className="text-gray-600">
                                        فرم زیر را پر کنید تا در کمترین زمان با شما تماس بگیریم
                                    </p>
                                </div>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name & Phone */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                                نام و نام خانوادگی *
                                            </label>
                                            <div className="relative">
                                                <UserIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="نام شما"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                                شماره تماس *
                                            </label>
                                            <div className="relative">
                                                <PhoneIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="۰۹۱۲-۳۴۵-۶۷۸۹"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            ایمیل
                                        </label>
                                        <div className="relative">
                                            <EnvelopeIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Service & Budget */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                                نوع خدمت *
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            >
                                                <option value="">انتخاب کنید</option>
                                                {quickServices.map(service => (
                                                    <option key={service.id} value={service.id}>
                                                        {service.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                                بودجه تقریبی
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            >
                                                <option value="">انتخاب کنید</option>
                                                <option value="under-5m">زیر ۵ میلیون</option>
                                                <option value="5m-10m">۵ تا ۱۰ میلیون</option>
                                                <option value="10m-20m">۱۰ تا ۲۰ میلیون</option>
                                                <option value="20m-50m">۲۰ تا ۵۰ میلیون</option>
                                                <option value="over-50m">بالای ۵۰ میلیون</option>
                                                <option value="negotiate">مذاکره‌ای</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            زمان مورد نظر تحویل
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {['فوری (۱ هفته)', 'عادی (۲-۴ هفته)', 'عادی (۱-۲ ماه)', 'مهم نیست'].map((option, index) => (
                                                <label key={index} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="timeline"
                                                        value={option}
                                                        onChange={handleInputChange}
                                                        className="text-orange-500 focus:ring-orange-500"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            توضیحات پروژه
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="لطفاً جزئیات پروژه خود را شرح دهید..."
                                        />
                                    </div>

                                    {/* Agreement */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            name="agreement"
                                            checked={formData.agreement}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 text-orange-500 focus:ring-orange-500"
                                        />
                                        <span className="text-sm text-gray-600">
                                            با
                                            <Link href="/privacy" className="text-orange-600 hover:underline"> قوانین حریم خصوصی </Link>
                                            و
                                            <Link href="/terms" className="text-orange-600 hover:underline"> شرایط خدمات </Link>
                                            موافقم.
                                        </span>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'loading'}
                                        className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                            formStatus === 'loading'
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : formStatus === 'success'
                                                    ? 'bg-green-500 hover:bg-green-600'
                                                    : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
                                        }`}
                                    >
                                        {formStatus === 'loading' && (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                در حال ارسال...
                                            </span>
                                        )}
                                        {formStatus === 'success' && (
                                            <span className="flex items-center justify-center gap-2">
                                                <CheckCircleIcon className="w-5 h-5" />
                                                ارسال شد! به زودی تماس می‌گیریم
                                            </span>
                                        )}
                                        {formStatus === 'idle' && (
                                            <span className="flex items-center justify-center gap-2">
                                                <PaperAirplaneIcon className="w-5 h-5" />
                                                درخواست مشاوره رایگان
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">

                                {/* Contact Methods */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-black text-gray-900 mb-6">
                                        راه‌های
                                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"> ارتباط مستقیم</span>
                                    </h2>

                                    {contactMethods.map((method, index) => (
                                        <a
                                            key={index}
                                            href={method.action}
                                            className="group block bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                        >
                                            <div className="flex items-start gap-6">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <method.icon className="w-8 h-8 text-white" />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                                        {method.title}
                                                    </h3>

                                                    <p className="text-gray-600 mb-3">{method.description}</p>

                                                    <div className="flex items-center gap-4 text-sm">
                                                        <div className="flex items-center gap-2 text-green-600">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                            <span>{method.available}</span>
                                                        </div>
                                                        <div className="text-gray-500">
                                                            پاسخ: {method.response}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Office Info */}
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <BuildingOfficeIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">دفتر مرکزی</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPinIcon className="w-5 h-5 text-orange-400 mt-0.5" />
                                            <div>
                                                <div className="font-medium mb-1">آدرس</div>
                                                <div className="text-gray-300 text-sm">{contactInfo.address.full}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <ClockIcon className="w-5 h-5 text-orange-400 mt-0.5" />
                                            <div>
                                                <div className="font-medium mb-2">ساعات کاری</div>
                                                <div className="space-y-1 text-gray-300 text-sm">
                                                    <div>{contactInfo.workingHours.weekdays}</div>
                                                    <div>{contactInfo.workingHours.thursday}</div>
                                                    <div className="text-red-300">{contactInfo.workingHours.friday}</div>
                                                    <div className="text-green-300 font-medium">{contactInfo.workingHours.emergency}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-6 text-center">ما را دنبال کنید</h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="text-2xl">📷</div>
                                            <div>
                                                <div className="font-bold">اینستاگرام</div>
                                                <div className="text-sm text-purple-100">{contactInfo.social.instagram}</div>
                                            </div>
                                        </a>

                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="text-2xl">✈️</div>
                                            <div>
                                                <div className="font-bold">تلگرام</div>
                                                <div className="text-sm text-purple-100">{contactInfo.social.telegram}</div>
                                            </div>
                                        </a>

                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="text-2xl">💼</div>
                                            <div>
                                                <div className="font-bold">لینکدین</div>
                                                <div className="text-sm text-purple-100">{contactInfo.social.linkedin}</div>
                                            </div>
                                        </a>

                                        <a href={`https://wa.me/${contactInfo.phone.whatsapp}`} className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="text-2xl">💬</div>
                                            <div>
                                                <div className="font-bold">واتساپ</div>
                                                <div className="text-sm text-purple-100">آنلاین</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                <span>سوالات متداول</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                سوالات
                                <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> متداول </span>
                                شما
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                پاسخ سوالات رایج مشتریان که ممکن است برای شما نیز مفید باشد
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 text-right hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                                        <div className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {openFaq === index && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* More Questions CTA */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-6">سوال دیگری دارید؟</p>
                            <a
                                href={`tel:${contactInfo.phone.number}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                <span>همین الان تماس بگیرید</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Map Section (Placeholder) */}
                <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-200" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                موقعیت
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"> دفتر مرکزی</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                برای بازدید حضوری حتماً از قبل هماهنگ کنید
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-video flex items-center justify-center text-white">
                                <div className="text-center">
                                    <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                                    <h3 className="text-2xl font-bold mb-2">نقشه تعاملی</h3>
                                    <p className="text-gray-300 mb-6">دفتر مرکزی دیزاین پرداز در تهران</p>

                                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-orange-400 mb-2">📍</div>
                                            <div className="font-bold mb-1">آدرس کامل</div>
                                            <div className="text-sm text-gray-300">{contactInfo.address.full}</div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-3xl font-black text-blue-400 mb-2">🚗</div>
                                            <div className="font-bold mb-1">دسترسی آسان</div>
                                            <div className="text-sm text-gray-300">پارکینگ رایگان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">

                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/20"></div>
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-white/30 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">

                            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                                آماده شروع
                                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text"> همکاری </span>
                                هستید؟
                            </h2>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                                تیم دیزاین پرداز آماده تبدیل ایده‌های شما به
                                <br className="hidden lg:block" />
                                <strong className="text-orange-400"> واقعیت دیجیتال </strong>
                                است!
                            </p>

                            {/* Urgency Timer (Fake) */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-8">
                                <FireIcon className="w-5 h-5 animate-pulse" />
                                <span>پیشنهاد ویژه: مشاوره رایگان فقط امروز!</span>
                            </div>

                            {/* Final CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                                <a
                                    href={`tel:${contactInfo.phone.number}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-black text-lg rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <PhoneIcon className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>تماس فوری</span>
                                </a>

                                <a
                                    href={`https://wa.me/${contactInfo.phone.whatsapp}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-black text-lg rounded-2xl hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <ChatBubbleLeftRightIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span>واتساپ</span>
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-black text-green-400 mb-2">۱۰۰%</div>
                                    <div className="text-sm text-gray-400">مشاوره رایگان</div>
                                </div>

                                <div>
                                    <div className="text-3xl font-black text-blue-400 mb-2">&lt; ۵</div>
                                    <div className="text-sm text-gray-400">دقیقه پاسخ</div>
                                </div>

                                <div>
                                    <div className="text-3xl font-black text-purple-400 mb-2">۲۴/۷</div>
                                    <div className="text-sm text-gray-400">در دسترس</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(5deg); }
                    66% { transform: translateY(5px) rotate(-5deg); }
                }
                
                .animate-gradient-x {
                    background-size: 400% 400%;
                    animation: gradient-x 15s ease infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
