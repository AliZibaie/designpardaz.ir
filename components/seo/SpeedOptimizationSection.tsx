// components/seo/SpeedOptimizationSection.tsx
import {
    BoltIcon,
    PhotoIcon,
    ServerIcon,
    CodeBracketIcon,
    CloudIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function SpeedOptimizationSection() {
    const optimizations = [
        {
            icon: PhotoIcon,
            title: 'بهینه‌سازی تصاویر',
            description: 'فشرده‌سازی و تبدیل تصاویر به فرمت‌های مدرن'
        },
        {
            icon: ServerIcon,
            title: 'کش (Caching)',
            description: 'پیکربندی کش مرورگر و سرور'
        },
        {
            icon: CodeBracketIcon,
            title: 'بهینه‌سازی کد',
            description: 'کاهش حجم CSS، JS و HTML'
        },
        {
            icon: CloudIcon,
            title: 'CDN',
            description: 'استفاده از شبکه توزیع محتوا'
        },
        {
            icon: BoltIcon,
            title: 'Lazy Loading',
            description: 'بارگذاری تنبل تصاویر و محتوا'
        },
        {
            icon: DevicePhoneMobileIcon,
            title: 'بهینه‌سازی موبایل',
            description: 'بهبود سرعت در دستگاه‌های موبایل'
        }
    ];

    const speedPackages = [
        {
            name: 'بهینه‌سازی پایه',
            price: '۲,۰۰۰,۰۰۰',
            targetScore: '۷۰-۸۰',
            features: [
                'فشرده‌سازی تصاویر',
                'minify کردن CSS/JS',
                'تنظیمات کش پایه',
                'بهینه‌سازی دیتابیس',
                'گزارش سرعت'
            ]
        },
        {
            name: 'بهینه‌سازی حرفه‌ای',
            price: '۳,۵۰۰,۰۰۰',
            targetScore: '۸۰-۹۰',
            features: [
                'تمام موارد پکیج پایه',
                'پیکربندی CDN',
                'Lazy Loading پیشرفته',
                'بهینه‌سازی Core Web Vitals',
                'تست سرعت چندگانه',
                'پشتیبانی ۱ ماهه'
            ],
            popular: true
        },
        {
            name: 'بهینه‌سازی پیشرفته',
            price: '۶,۰۰۰,۰۰۰',
            targetScore: '۹۰+',
            features: [
                'تمام موارد پکیج حرفه‌ای',
                'بهینه‌سازی سرور',
                'پیکربندی HTTP/2',
                'تنظیمات پیشرفته کش',
                'مانیتورینگ مداوم',
                'گارانتی عملکرد',
                'پشتیبانی ۳ ماهه'
            ]
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        بهینه‌سازی سرعت سایت
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        افزایش سرعت بارگذاری سایت برای بهبود تجربه کاربری و رتبه‌بندی گوگل
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {optimizations.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <item.icon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Speed Optimization Pricing */}
                <div className="grid md:grid-cols-3 gap-8">
                    {speedPackages.map((pkg, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${pkg.popular ? 'border-orange-500' : 'border-gray-200'} relative`}>
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    محبوب
                  </span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-orange-600 mb-2">
                                    {pkg.price} <span className="text-sm text-gray-500">تومان</span>
                                </div>
                                <div className="text-sm text-gray-600 mb-6">
                                    هدف: PageSpeed Score {pkg.targetScore}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full ml-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${pkg.popular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    بهینه‌سازی سرعت
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">
                            تست رایگان سرعت سایت
                        </h3>
                        <p className="text-orange-100 mb-6">
                            قبل از شروع کار، سرعت فعلی سایت شما را تست می‌کنیم
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            درخواست تست رایگان
                        </button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">۵۳%</div>
                            <div className="text-orange-200">کاربران سایت را ترک می‌کنند اگر بیش از ۳ ثانیه طول بکشد</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">۱ ثانیه</div>
                            <div className="text-orange-200">تاخیر در بارگذاری، ۷% کاهش تبدیل دارد</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">۲x</div>
                            <div className="text-orange-200">سایت‌های سریع، دو برابر بیشتر فروش دارند</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
