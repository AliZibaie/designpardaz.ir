// app/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    PhoneIcon,
    EnvelopeIcon,
    CheckIcon,
    StarIcon,
    ArrowRightIcon,
    ChevronDownIcon,
    UserGroupIcon,
    TrophyIcon,
    HeartIcon,
    ComputerDesktopIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    PaintBrushIcon,
    RocketLaunchIcon,
    LightBulbIcon,
    ChatBubbleLeftRightIcon,
    HandRaisedIcon,
    SparklesIcon,
    FireIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: "دیزاین پرداز - طراحی وب‌سایت حرفه‌ای، سئو و برندینگ",
    description: "دیزاین پرداز با +۸ سال تجربه در طراحی وب‌سایت، فروشگاه اینترنتی، سئو و طراحی گرافیک",
    keywords: "طراحی سایت، فروشگاه اینترنتی، سئو، طراحی لوگو، برندینگ",
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section - Light Mode */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-200" opacity="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                    </svg>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
                            <TrophyIcon className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-bold text-gray-700">بهترین استودیو طراحی ایران</span>
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map((star) => (
                                    <StarIcon key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-gray-900">
                            <span className="block">طراحی وب حرفه‌ای</span>
                            <span className="block bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                که می‌فروشد
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                            با +۸ سال تجربه و +۲۵۰ پروژه موفق، وب‌سایت رؤیایی شما را طراحی می‌کنیم
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">+۲۵۰</div>
                                <div className="text-gray-600 text-sm font-medium">پروژه موفق</div>
                            </div>
                            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">+۱۸۰</div>
                                <div className="text-gray-600 text-sm font-medium">مشتری راضی</div>
                            </div>
                            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl md:text-4xl font-black text-pink-600 mb-2">۹۸٪</div>
                                <div className="text-gray-600 text-sm font-medium">رضایت</div>
                            </div>
                            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl md:text-4xl font-black text-yellow-600 mb-2">+۸</div>
                                <div className="text-gray-600 text-sm font-medium">سال تجربه</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg shadow-lg">
                                <ChatBubbleLeftRightIcon className="w-5 h-5 inline ml-2" />
                                مشاوره رایگان
                            </Link>
                            <Link href="/portfolio" className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transition-all duration-200 text-lg">
                                <TrophyIcon className="w-5 h-5 inline ml-2" />
                                مشاهده نمونه کارها
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="text-center text-gray-600 text-sm">
                            <p className="mb-4 font-medium">مورد اعتماد برندهای معتبر</p>
                            <div className="flex justify-center items-center gap-8">
                                {[1,2,3,4].map((item) => (
                                    <div key={item} className="w-20 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-sm"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                            <RocketLaunchIcon className="w-4 h-4 inline ml-1" />
                            خدمات ما
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                            خدمات طراحی <span className="text-blue-600">حرفه‌ای</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            از طراحی وب‌سایت تا سئو و برندینگ، تمام نیازهای دیجیتال شما را پوشش می‌دهیم
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* Website Design */}
                        <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                محبوب
                            </div>
                            <ComputerDesktopIcon className="w-16 h-16 text-blue-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">طراحی وب‌سایت</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                طراحی وب‌سایت واکنش‌گرا، سریع و بهینه برای موتورهای جستجو
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>طراحی واکنش‌گرا</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>بهینه‌سازی سرعت</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پنل مدیریت</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پشتیبانی ۲۴/۷</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-blue-600">از ۲ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* Online Store */}
                        <div className="group relative bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                محبوب
                            </div>
                            <ShoppingCartIcon className="w-16 h-16 text-purple-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">فروشگاه اینترنتی</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                فروشگاه آنلاین کامل با درگاه پرداخت و سیستم مدیریت محصولات
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>درگاه پرداخت</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>مدیریت موجودی</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>پنل فروشنده</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>گزارش فروش</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-purple-600">از ۸ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <MagnifyingGlassIcon className="w-16 h-16 text-green-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">سئو و بهینه‌سازی</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                بهینه‌سازی کامل وب‌سایت برای رتبه‌بندی بهتر در موتورهای جستجو
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>سئو تکنیکال</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>تولید محتوا</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>لینک سازی</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>گزارش‌دهی</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-green-600">از ۳ میلیون</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>

                        {/* Graphic Design */}
                        <div className="group relative bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <PaintBrushIcon className="w-16 h-16 text-orange-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">طراحی گرافیک</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                طراحی لوگو، بنر، کاتالوگ و تمام مواد تبلیغاتی مورد نیاز شما
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>طراحی لوگو</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>بنر و پوستر</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>کاتالوگ و بروشور</span>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckIcon className="w-5 h-5 text-green-500 ml-2" />
                                    <span>موشن گرافیک</span>
                                </li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-orange-600">از ۵۰۰ هزار</span>
                                    <span className="text-gray-500 text-sm mr-2">تومان</span>
                                </div>
                                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-200">
                            مشاهده تمام خدمات
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                            چرا <span className="text-purple-600">دیزاین پرداز</span>؟
                        </h2>
                        <p className="text-lg text-gray-600">
                            ویژگی‌هایی که ما را متمایز می‌کند
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <LightBulbIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">طراحی خلاقانه</h3>
                            <p className="text-gray-600">طراحی‌های منحصر به فرد و خلاقانه که برند شما را متمایز می‌کند</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <RocketLaunchIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">عملکرد سریع</h3>
                            <p className="text-gray-600">وب‌سایت‌هایی با سرعت بارگذاری بالا و عملکرد عالی</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HeartIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">پشتیبانی دائمی</h3>
                            <p className="text-gray-600">پشتیبانی ۲۴/۷ و نگهداری مداوم پروژه‌های شما</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                            نمونه کارهای <span className="text-blue-600">ما</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            برخی از پروژه‌های موفق ما را ببینید
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1,2,3,4,5,6].map((item) => (
                            <div key={item} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ComputerDesktopIcon className="w-16 h-16 text-white/70" />
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                                        وب‌سایت
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        پروژه نمونه {item}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        توضیح مختصری از پروژه و ویژگی‌های آن
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[1,2,3,4,5].map((star) => (
                                                    <StarIcon key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">4.9</span>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-700 text-sm font-bold">
                                            مشاهده بیشتر
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-200">
                            <TrophyIcon className="w-5 h-5" />
                            مشاهده تمام نمونه کارها
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            آماده شروع پروژه هستید؟
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            همین امروز با ما تماس بگیرید و مشاوره رایگان دریافت کنید
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg">
                                <ChatBubbleLeftRightIcon className="w-5 h-5 inline ml-2" />
                                مشاوره رایگان
                            </Link>
                            <Link href="tel:02133334444" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-lg">
                                <PhoneIcon className="w-5 h-5 inline ml-2" />
                                تماس فوری
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
