'use client';

import { useState, useEffect, useRef } from 'react';
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
    SparklesIcon,
} from '@heroicons/react/24/outline';
import { CONTACT_PHONE } from '@/lib/constants/contact';

// Contact Information
const contactInfo = {
    phone: {
        number: CONTACT_PHONE.tel,
        display: CONTACT_PHONE.display,
        whatsapp: CONTACT_PHONE.raw,
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
        whatsapp: CONTACT_PHONE.raw
    }
};

// Service Categories for Quick Contact
const quickServices = [
    {
        id: 'web-design',
        title: 'طراحی وب‌سایت',
        icon: ComputerDesktopIcon,
        color: 'from-blue-500 to-cyan-500',
        price: 'از ۵ میلیون تومان',
        urgent: false
    },
    {
        id: 'ecommerce',
        title: 'فروشگاه اینترنتی',
        icon: ShoppingCartIcon,
        color: 'from-cyan-500 to-blue-600',
        price: 'از ۸ میلیون تومان',
        urgent: true
    },
    {
        id: 'seo',
        title: 'سئو و بهینه‌سازی',
        icon: MagnifyingGlassIcon,
        color: 'from-blue-600 to-indigo-600',
        price: 'از ۳ میلیون تومان',
        urgent: false
    },
    {
        id: 'graphic',
        title: 'طراحی گرافیک',
        icon: PaintBrushIcon,
        color: 'from-indigo-500 to-purple-500',
        price: 'از ۱.۵ میلیون تومان',
        urgent: false
    },
    {
        id: 'mobile-app',
        title: 'اپلیکیشن موبایل',
        icon: DevicePhoneMobileIcon,
        color: 'from-purple-500 to-blue-500',
        price: 'از ۱۲ میلیون تومان',
        urgent: true
    },
    {
        id: 'consultation',
        title: 'مشاوره رایگان',
        icon: LightBulbIcon,
        color: 'from-cyan-400 to-blue-500',
        price: 'رایگان',
        urgent: false
    }
];

// FAQ Data (Updated with realistic content)
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
        answer: 'تمام پروژه‌ها با ضمانت کیفیت و رضایت ۱۰۰% تحویل می‌شوند. در صورت عدم رضایت، تا رسیدن به نتیجه مطلوب کار ادامه می‌یابد.'
    }
];

// Contact Methods
const contactMethods = [
    {
        title: 'تماس تلفنی مستقیم',
        description: 'سریع‌ترین راه ارتباط با متخصصان ما',
        icon: PhoneIcon,
        action: `tel:${contactInfo.phone.number}`,
        color: 'from-blue-500 to-cyan-500',
        available: 'دردسترس ۲۴/۷',
        response: 'پاسخ فوری'
    },
    {
        title: 'واتساپ و پیام رسان',
        description: 'چت آنلاین و ارسال فایل',
        icon: ChatBubbleLeftRightIcon,
        action: `https://wa.me/${contactInfo.phone.whatsapp}`,
        color: 'from-cyan-400 to-blue-500',
        available: 'آنلاین',
        response: 'تا ۵ دقیقه'
    },
    {
        title: 'ایمیل پشتیبانی',
        description: 'برای سوالات تخصصی و مفصل',
        icon: EnvelopeIcon,
        action: `mailto:${contactInfo.email.main}`,
        color: 'from-blue-500 to-indigo-500',
        available: 'همیشه',
        response: 'تا ۲ ساعت'
    },
    {
        title: 'بازدید حضوری',
        description: 'ملاقات رودررو در دفتر مرکزی',
        icon: BuildingOfficeIcon,
        action: '#',
        color: 'from-indigo-500 to-purple-500',
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
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">

                    {/* Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 animate-gradient-x"></div>
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
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-8">
                                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                <span>تماس با ما</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                                مشاوره
                                <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text"> رایگان </span>
                                دریافت کنید
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                تیم متخصص دیزاین پرداز
                                <strong className="text-blue-400"> ۲۴ ساعته </strong>
                                آماده پاسخگویی به سوالات شماست.
                                <br className="hidden lg:block" />
                                همین الان تماس بگیرید و
                                <strong className="text-cyan-400"> مشاوره کاملاً رایگان </strong>
                                دریافت کنید.
                            </p>

                            {/* Quick Contact Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {[
                                    { label: 'پاسخ فوری', value: '< ۵ دقیقه', icon: BoltIcon, color: 'text-cyan-400' },
                                    { label: 'مشاوره رایگان', value: '۱۰۰%', icon: HeartIcon, color: 'text-blue-400' },
                                    { label: 'در دسترس', value: '۲۴/۷', icon: ClockIcon, color: 'text-indigo-400' },
                                    { label: 'پاسخگویی سریع', value: '۹۵%', icon: StarIcon, color: 'text-purple-400' }
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
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <span className="flex items-center gap-2">
                                        <PhoneIcon className="w-5 h-5 group-hover:animate-bounce" />
                                        تماس فوری: {contactInfo.phone.display}
                                    </span>
                                </a>

                                <a
                                    href={`https://wa.me/${contactInfo.phone.whatsapp}`}
                                    className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> خدمتی </span>
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
                                            ? 'border-blue-500 ring-4 ring-blue-500/20'
                                            : 'border-gray-100 hover:border-blue-200'
                                    }`}
                                >
                                    {/* Urgent Badge */}
                                    {service.urgent && (
                                        <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full animate-pulse">
                                            فوری
                                        </div>
                                    )}

                                    {/* Service Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Service Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="text-2xl font-black text-blue-600">{service.price}</div>
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
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
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
                                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> مشاوره رایگان</span>
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
                                                    className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                                                    className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                                                className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                                                        className="text-blue-500 focus:ring-blue-500"
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
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
                                            className="mt-1 text-blue-500 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600">
                                            با قوانین حریم خصوصی و شرایط خدمات موافقم.
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
                                                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
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
                                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> ارتباط مستقیم</span>
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
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
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
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                            <BuildingOfficeIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">دفتر مرکزی</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                                            <div>
                                                <div className="font-medium mb-1">آدرس</div>
                                                <div className="text-gray-300 text-sm">{contactInfo.address.full}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <ClockIcon className="w-5 h-5 text-blue-400 mt-0.5" />
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
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-6 text-center">ما را دنبال کنید</h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="w-6 h-6">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold">اینستاگرام</div>
                                                <div className="text-sm text-blue-100">{contactInfo.social.instagram}</div>
                                            </div>
                                        </a>

                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="w-6 h-6">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold">تلگرام</div>
                                                <div className="text-sm text-blue-100">{contactInfo.social.telegram}</div>
                                            </div>
                                        </a>

                                        <a href="#" className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="w-6 h-6">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold">لینکدین</div>
                                                <div className="text-sm text-blue-100">{contactInfo.social.linkedin}</div>
                                            </div>
                                        </a>

                                        <a href={`https://wa.me/${contactInfo.phone.whatsapp}`} className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300">
                                            <div className="w-6 h-6">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold">واتساپ</div>
                                                <div className="text-sm text-blue-100">آنلاین</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                <span>سوالات متداول</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                سوالات
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> متداول </span>
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
                                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> دفتر مرکزی</span>
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                برای بازدید حضوری حتماً از قبل هماهنگ کنید
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-video flex items-center justify-center text-white">
                                <div className="text-center">
                                    <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                                    <h3 className="text-2xl font-bold mb-2">نقشه تعاملی</h3>
                                    <p className="text-gray-300 mb-6">دفتر مرکزی دیزاین پرداز در تهران</p>

                                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-blue-400 mb-2">
                                                <MapPinIcon className="w-8 h-8 mx-auto" />
                                            </div>
                                            <div className="font-bold mb-1">آدرس کامل</div>
                                            <div className="text-sm text-gray-300">{contactInfo.address.full}</div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-3xl font-black text-cyan-400 mb-2">
                                                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                                </svg>
                                            </div>
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
                <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">

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
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"> همکاری </span>
                                هستید؟
                            </h2>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                                تیم دیزاین پرداز آماده تبدیل ایده‌های شما به
                                <br className="hidden lg:block" />
                                <strong className="text-blue-400"> واقعیت دیجیتال </strong>
                                است!
                            </p>

                            {/* Urgency Timer (Fake) */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-8">
                                <SparklesIcon className="w-5 h-5 animate-pulse" />
                                <span>پیشنهاد ویژه: مشاوره رایگان فقط امروز!</span>
                            </div>

                            {/* Final CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                                <a
                                    href={`tel:${contactInfo.phone.number}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <PhoneIcon className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>تماس فوری</span>
                                </a>

                                <a
                                    href={`https://wa.me/${contactInfo.phone.whatsapp}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-black text-lg rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
                                    <div className="text-3xl font-black text-cyan-400 mb-2">۲۴/۷</div>
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