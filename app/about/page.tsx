'use client';

import { useState } from 'react';
import {
    CheckCircleIcon,
    StarIcon,
    HeartIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    ClockIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ChartBarIcon,
    EyeIcon,
    HandRaisedIcon,
    ChatBubbleLeftRightIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

// Company Data
const companyData = {
    name: 'دیزاین پرداز',
    mission: 'تبدیل ایده‌های شما به واقعیت دیجیتال',
    vision: 'ارائه خدمات طراحی وب و دیجیتال مارکتینگ با کیفیت بالا',
    values: ['کیفیت', 'نوآوری', 'اعتماد', 'تعهد'],
    stats: {
        experience: 'جدید',
        teamMembers: 3,
        focus: 'کیفیت بالا'
    }
};

// Team Members
const teamMembers = [
    {
        id: 1,
        name: 'علی احمدی',
        position: 'مدیر عامل و طراح ارشد',
        experience: 'تازه‌کار با انگیزه بالا',
        skills: ['مدیریت پروژه', 'UI/UX Design', 'استراتژی دیجیتال'],
        description: 'بنیان‌گذار دیزاین پرداز با هدف ارائه خدمات با کیفیت',
    },
    {
        id: 2,
        name: 'سارا کریمی',
        position: 'متخصص سئو و بازاریابی دیجیتال',
        experience: 'تخصص در سئو مدرن',
        skills: ['SEO تکنیکال', 'تولید محتوا', 'Google Ads'],
        description: 'متخصص جوان با دانش روز دنیا در حوزه سئو',
    },
    {
        id: 3,
        name: 'محمد رضایی',
        position: 'توسعه‌دهنده فول‌استک',
        experience: 'مسلط به تکنولوژی‌های جدید',
        skills: ['React/Next.js', 'Node.js', 'Database Design'],
        description: 'توسعه‌دهنده با تخصص در تکنولوژی‌های مدرن وب',
    }
];

// Company Values
const companyValues = [
    {
        icon: ShieldCheckIcon,
        title: 'کیفیت بالا',
        description: 'تعهد به ارائه بالاترین کیفیت در تمام پروژه‌ها',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: LightBulbIcon,
        title: 'نوآوری',
        description: 'استفاده از جدیدترین تکنولوژی‌ها و روش‌های نوین',
        color: 'from-cyan-500 to-blue-500'
    },
    {
        icon: HeartIcon,
        title: 'اعتماد',
        description: 'ساخت روابط طولانی‌مدت بر پایه اعتماد متقابل',
        color: 'from-blue-600 to-indigo-500'
    },
    {
        icon: HandRaisedIcon,
        title: 'تعهد',
        description: 'پایبندی کامل به قول‌ها و مهلت‌های تعیین شده',
        color: 'from-indigo-500 to-blue-600'
    }
];

export default function AboutUsPage() {
    const [activeTab, setActiveTab] = useState('story');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 animate-gradient-x"></div>
                    {[...Array(30)].map((_, i) => (
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
                            <BuildingOfficeIcon className="w-5 h-5" />
                            <span>درباره دیزاین پرداز</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                            شروع یک
                            <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text"> سفر جدید </span>
                            در دنیای
                            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text">
                                طراحی وب
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                            ما تیم جوان و پرانگیزه‌ای هستیم که با
                            <strong className="text-blue-400"> علاقه و اشتیاق فراوان </strong>
                            به دنیای طراحی وب وارد شده‌ایم. هدف ما
                            <strong className="text-cyan-400"> ارائه خدمات با کیفیت </strong>
                            و
                            <strong className="text-blue-300"> ساخت تجربه‌های دیجیتال منحصربه‌فرد </strong>
                            برای مشتریان عزیز است.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {[
                                { label: 'تیم متخصص', value: '3 نفر', icon: UserGroupIcon, color: 'text-blue-400' },
                                { label: 'تمرکز اصلی', value: 'کیفیت', icon: StarIcon, color: 'text-cyan-400' },
                                { label: 'وضعیت', value: 'فعال', icon: CheckCircleIcon, color: 'text-blue-300' }
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

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <span className="flex items-center gap-2">
                                    <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:animate-bounce" />
                                    با ما همکاری کنید
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: 'story', label: 'داستان ما', icon: RocketLaunchIcon },
                            { id: 'team', label: 'تیم ما', icon: UserGroupIcon },
                            { id: 'values', label: 'ارزش‌ها', icon: HeartIcon }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            {activeTab === 'story' && (
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content */}
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                                        <RocketLaunchIcon className="w-4 h-4" />
                                        <span>شروع ماجرا</span>
                                    </div>

                                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                        از
                                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> ایده </span>
                                        تا واقعیت
                                    </h2>

                                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                        <p>
                                            <strong className="text-blue-600"> دیزاین پرداز </strong>
                                            با هدف ارائه خدمات طراحی وب با کیفیت بالا و قیمت مناسب برای کسب‌وکارهای ایرانی تأسیس شد.
                                        </p>

                                        <p>
                                            ما درک کردیم که بسیاری از کسب‌وکارها نیاز به حضور قدرتمند در فضای دیجیتال دارند،
                                            اما با مشکلاتی مانند کیفیت پایین، قیمت‌های نامناسب یا عدم پشتیبانی مواجه می‌شوند.
                                        </p>

                                        <p>
                                            هدف ما این است که با
                                            <strong className="text-cyan-600"> علم روز دنیا و انگیزه فراوان</strong>،
                                            به
                                            <strong className="text-blue-600"> یکی از برندهای معتبر حوزه طراحی وب </strong>
                                            در ایران تبدیل شویم.
                                        </p>
                                    </div>
                                </div>

                                {/* Mission & Vision */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                            <EyeIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">چشم‌انداز ما</h3>
                                        <p className="text-gray-700">{companyData.vision}</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                                            <RocketLaunchIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">ماموریت ما</h3>
                                        <p className="text-gray-700">{companyData.mission}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Content */}
                            <div className="relative">
                                <div className="relative mx-auto max-w-lg">
                                    {/* Main Card */}
                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                        <div className="space-y-6">
                                            {/* Company Logo Area */}
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl font-black text-white">DP</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white">دیزاین پرداز</h3>
                                                <p className="text-gray-400 text-sm">تازه شروع کرده</p>
                                            </div>

                                            {/* Progress Indicators */}
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                        <span>انگیزه و علاقه</span>
                                                        <span>100%</span>
                                                    </div>
                                                    <div className="bg-gray-700 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-full animate-pulse"></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                        <span>دانش تکنیکی</span>
                                                        <span>85%</span>
                                                    </div>
                                                    <div className="bg-gray-700 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-[85%] animate-pulse"></div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                        <span>تعهد به کیفیت</span>
                                                        <span>100%</span>
                                                    </div>
                                                    <div className="bg-gray-700 rounded-full h-2">
                                                        <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-full animate-pulse"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Team Section */}
            {activeTab === 'team' && (
                <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                                <UserGroupIcon className="w-4 h-4" />
                                <span>تیم ما</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                تیم
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> جوان و پرانگیزه </span>
                                دیزاین پرداز
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                تیمی از متخصصان جوان که با شور و اشتیاق پروژه‌های شما را به بهترین شکل اجرا می‌کنند
                            </p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                >
                                    {/* Member Image */}
                                    <div className="relative overflow-hidden">
                                        <div className="aspect-square bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 flex items-center justify-center">
                                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                                                <UserGroupIcon className="w-12 h-12 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                                        <p className="text-gray-600 text-sm mb-4">{member.description}</p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {member.skills.slice(0, 2).map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Experience */}
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <ClockIcon className="w-4 h-4" />
                                            <span>{member.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Values Section */}
            {activeTab === 'values' && (
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                                <HeartIcon className="w-4 h-4" />
                                <span>ارزش‌های ما</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                اصولی که
                                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"> پایه کار </span>
                                ما هستند
                            </h2>

                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                این ارزش‌ها در تمام فعالیت‌ها و تصمیم‌گیری‌های ما نقش اساسی دارند
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {companyValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent"
                                >
                                    {/* Value Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Value Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                                        {value.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {[...Array(20)].map((_, i) => (
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
                            با تیم
                            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"> دیزاین پرداز</span>
                            همکاری کنید
                        </h2>

                        <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                            آماده شروع بهترین پروژه خودتان هستید؟
                            <br className="hidden lg:block" />
                            همین الان با ما تماس بگیرید و مشاوره رایگان دریافت کنید!
                        </p>

                        {/* Contact Info */}
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <a
                                href="tel:021-3333-4444"
                                className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <PhoneIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-400">تماس مستقیم</div>
                                    <div className="font-bold">۰۲۱-۳۳۳۳-۴۴۴۴</div>
                                </div>
                            </a>

                            <a
                                href="mailto:info@designpardaz.ir"
                                className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <EnvelopeIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-400">ایمیل</div>
                                    <div className="font-bold">info@designpardaz.ir</div>
                                </div>
                            </a>

                            <div className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <MapPinIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-400">آدرس</div>
                                    <div className="font-bold">تهران، ایران</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <ChatBubbleLeftRightIcon className="w-6 h-6 group-hover:animate-bounce" />
                                <span>مشاوره رایگان</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

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
        </div>
    );
}