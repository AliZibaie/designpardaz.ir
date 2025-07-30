import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'صفحه یافت نشد - دیزاین پرداز',
    description: 'صفحه مورد نظر شما یافت نشد. به صفحه اصلی بازگردید.',
    robots: 'noindex, nofollow',
}

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="max-w-md w-full text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-sky-500 mb-4">
                        ۴۰۴
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        صفحه یافت نشد
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا ممکن است حذف شده باشد.
                    </p>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <svg
                            className="w-5 h-5 ml-2"
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
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <svg
                            className="w-5 h-5 ml-2"
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
                        مشاهده خدمات
                    </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        نیاز به کمک دارید؟
                    </p>
                    <div className="flex items-center justify-center space-x-6 space-x-reverse">
                        <Link
                            href="tel:+989123456789"
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        >
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            تماس
                        </Link>
                        <Link
                            href="mailto:info@designpardaz.com"
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        >
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            ایمیل
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
