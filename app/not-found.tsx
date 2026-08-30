import Link from 'next/link'
import { Metadata } from 'next'
import { CONTACT_PHONE } from '@/lib/constants/contact'

export const metadata: Metadata = {
    title: 'صفحه یافت نشد - دیزاین پرداز',
    description: 'صفحه مورد نظر شما یافت نشد. به صفحه اصلی بازگردید.',
    robots: 'noindex, nofollow',
}

export default function NotFound() {
    return (
        <div className="min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                {/* Brand Logo Integration */}
                <div className="mb-12 flex justify-center">
                    <div className="relative">
                        {/* Logo-inspired geometric shapes */}
                        <div className="flex items-center justify-center space-x-2 space-x-reverse mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform rotate-12 animate-bounce delay-100"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl transform -rotate-12 animate-bounce delay-200"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl transform rotate-6 animate-bounce delay-300"></div>
                        </div>

                        {/* Brand Name */}
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
                            دیزاین پرداز
                        </div>
                    </div>
                </div>

                {/* 404 Number with Brand Colors */}
                <div className="mb-12">
                    <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-6 leading-none">
                        ۴۰۴
                    </h1>
                    <div className="flex justify-center space-x-2 space-x-reverse">
                        <div className="w-12 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="w-6 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        صفحه یافت نشد
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed max-w-md mx-auto">
                        متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا ممکن است حذف شده باشد.
                        اما نگران نباشید، ما همیشه راه‌حلی داریم!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                    <Link
                        href="/"
                        className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                        <div className="flex items-center justify-center">
                            <svg
                                className="w-6 h-6 ml-3 group-hover:animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            بازگشت به صفحه اصلی
                        </div>
                    </Link>

                    <Link
                        href="/services"
                        className="group relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10"
                    >
                        <div className="flex items-center justify-center">
                            <svg
                                className="w-6 h-6 ml-3 group-hover:animate-pulse"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-2 8h.01"
                                />
                            </svg>
                            مشاهده خدمات ما
                        </div>
                    </Link>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-white/5 to-blue-500/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <p className="text-blue-200 mb-4 font-medium">
                        نیاز به کمک دارید؟ تیم دیزاین پرداز آماده خدمات‌رسانی است
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href={`tel:${CONTACT_PHONE.tel}`}
                            className="group flex items-center text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center ml-3 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="font-medium">تماس با ما</span>
                        </Link>

                        <Link
                            href="mailto:info@designpardaz.ir"
                            className="group flex items-center text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center ml-3 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="font-medium">ارسال ایمیل</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}