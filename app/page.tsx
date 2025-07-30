// app/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    CheckIcon,
    StarIcon,
    ArrowRightIcon,
    PlayIcon,
    ChevronDownIcon,
    ClockIcon,
    UserGroupIcon,
    TrophyIcon,
    HeartIcon,
    ShieldCheckIcon,
    BoltIcon,
    RocketLaunchIcon,
    LightBulbIcon,
    ChartBarIcon,
    CogIcon,
    PaintBrushIcon,
    CodeBracketIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    ShoppingCartIcon,
    DocumentTextIcon,
    BuildingOfficeIcon,
    AcademicCapIcon,
    FireIcon,
    SparklesIcon,
    GlobeAltIcon,
    ChatBubbleLeftRightIcon,
    HandRaisedIcon,
    CurrencyDollarIcon,
    CalendarDaysIcon,
    QuestionMarkCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    CheckBadgeIcon,
    ArrowUpIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: "دیزاین پرداز - طراحی وب‌سایت حرفه‌ای، سئو و برندینگ | بهترین استودیو طراحی ایران",
    description: "دیزاین پرداز با +۸ سال تجربه، ارائه‌دهنده خدمات طراحی وب‌سایت واکنش‌گرا، فروشگاه اینترنتی، سئو تخصصی، طراحی لوگو و برندینگ. +۲۵۰ پروژه موفق، ۹۸٪ رضایت مشتریان.",
    keywords: "طراحی سایت، طراحی وب سایت حرفه ای، فروشگاه اینترنتی، سئو، طراحی لوگو، برندینگ، طراحی گرافیک، UI/UX",
    openGraph: {
        title: "دیزاین پرداز - بهترین استودیو طراحی وب و گرافیک ایران",
        description: "+۸ سال تجربه، +۲۵۰ پروژه موفق، ۹۸٪ رضایت مشتریان",
        images: [{ url: "/images/og-homepage.jpg", width: 1200, height: 630 }],
        type: "website",
        locale: "fa_IR"
    }
};

export default function HomePage() {
    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="max-w-5xl mx-auto">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                            <TrophyIcon className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm font-medium">بهترین استودیو طراحی ایران</span>
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map((star) => (
                                    <StarIcon key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                            <span className="block">طراحی وب حرفه‌ای</span>
                            <span className="block bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                که می‌فروشد
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                            با +۸ سال تجربه و +۲۵۰ پروژه موفق، وب‌سایت رؤیایی شما را طراحی می‌کنیم
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">+۲۵۰</div>
                                <div className="text-white/70 text-sm">پروژه موفق</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">+۱۸۰</div>
                                <div className="text-white/70 text-sm">مشتری راضی</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">۹۸٪</div>
                                <div className="text-white/70 text-sm">رضایت</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">+۸</div>
                                <div className="text-white/70 text-sm">سال تجربه</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
                                مشاوره رایگان
                            </Link>
                            <Link href="/portfolio" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-200 text-lg">
                                مشاهده نمونه کارها
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="text-center text-white/60 text-sm">
                            <p className="mb-4">مورد اعتماد برندهای معتبر</p>
                            <div className="flex justify-center items-center gap-8 opacity-60">
                                <div className="w-20 h-8 bg-white/20 rounded"></div>
                                <div className="w-20 h-8 bg-white/20 rounded"></div>
                                <div className="w-20 h-8 bg-white/20 rounded"></div>
                                <div className="w-20 h-8 bg-white/20 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
                            خدمات ما
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            خدمات طراحی <span className="text-blue-500">حرفه‌ای</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            از طراحی وب‌سایت تا سئو و برندینگ، تمام نیازهای دیجیتال شما را پوشش می‌دهیم
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                        {/* Website Design */}
                        <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                محبوب
                            </div>
                            <ComputerDesktopIcon className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">طراحی وب‌سایت</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                طراحی وب‌سایت واکنش‌گرا، سریع و بهینه برای موتورهای جستجو
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>طراحی واکنش‌گرا</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>بهینه‌سازی سرعت</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پنل مدیریت</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پشتیبانی ۲۴/۷</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-blue-600">از ۲ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* Online Store */}
                        <div className="group relative bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                محبوب
                            </div>
                            <ShoppingCartIcon className="w-12 h-12 text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">فروشگاه اینترنتی</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                فروشگاه آنلاین کامل با درگاه پرداخت و سیستم مدیریت محصولات
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>درگاه پرداخت</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>مدیریت موجودی</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پنل فروشنده</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>گزارش فروش</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-purple-600">از ۸ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-600 transition-colors">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
                            <MagnifyingGlassIcon className="w-12 h-12 text-green-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">سئو و بهینه‌سازی</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                بهینه‌سازی کامل وب‌سایت برای رتبه‌بندی بهتر در موتورهای جستجو
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>سئو تکنیکال</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>تولید محتوا</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>لینک سازی</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>گزارش‌دهی</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-green-600">از ۳ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* Graphic Design */}
                        <div className="group relative bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all duration-300">
                            <PaintBrushIcon className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">طراحی گرافیک</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                طراحی لوگو، بنر، کاتالوگ و تمام مواد تبلیغاتی مورد نیاز شما
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>طراحی لوگو</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>بنر و پوستر</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>کاتالوگ و بروشور</span>
                                </li>
                                <li className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>موشن گرافیک</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-orange-600">از ۵۰۰ هزار</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-200">
                            مشاهده تمام خدمات
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            نمونه کارهای <span className="text-purple-500">ما</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            برخی از پروژه‌های موفق ما را ببینید
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1,2,3,4,5,6].map((item) => (
                            <div key={item} className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ComputerDesktopIcon className="w-16 h-16 text-white/50" />
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                                        وب‌سایت
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        پروژه نمونه {item}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        توضیح مختصری از پروژه و ویژگی‌های آن
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                {[1,2,3].map((star) => (
                                                    <StarIcon key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">4.9</span>
                                        </div>
                                        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                                            مشاهده بیشتر
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/portfolio" className="btn-outline">
                            مشاهده تمام نمونه کارها
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            آماده شروع پروژه هستید؟
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            همین امروز با ما تماس بگیرید و مشاوره رایگان دریافت کنید
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg">
                                مشاوره رایگان
                            </Link>
                            <Link href="tel:02133334444" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-lg">
                                تماس فوری
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
