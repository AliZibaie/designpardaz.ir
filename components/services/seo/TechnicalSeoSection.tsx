// components/seo/TechnicalSeoSection.tsx
import {
    CogIcon,
    DevicePhoneMobileIcon,
    ClockIcon,
    ShieldCheckIcon,
    DocumentTextIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function TechnicalSeoSection() {
    const features = [
        {
            icon: CogIcon,
            title: 'بهینه‌سازی کد',
            description: 'بررسی و بهبود ساختار HTML، CSS و JavaScript'
        },
        {
            icon: DevicePhoneMobileIcon,
            title: 'Mobile-First',
            description: 'طراحی ریسپانسیو و بهینه برای موبایل'
        },
        {
            icon: ClockIcon,
            title: 'سرعت بارگذاری',
            description: 'افزایش سرعت سایت تا کمتر از ۳ ثانیه'
        },
        {
            icon: ShieldCheckIcon,
            title: 'امنیت SSL',
            description: 'پیکربندی گواهی SSL و امنیت سایت'
        },
        {
            icon: DocumentTextIcon,
            title: 'Schema Markup',
            description: 'پیاده‌سازی داده‌های ساختاریافته'
        },
        {
            icon: MagnifyingGlassIcon,
            title: 'Crawlability',
            description: 'بهبود قابلیت خزش و ایندکس شدن'
        }
    ];

    const packages = [
        {
            name: 'پکیج پایه',
            price: '۲,۵۰۰,۰۰۰',
            features: [
                'تحلیل فنی سایت',
                'بهینه‌سازی متاتگ‌ها',
                'رفع خطاهای HTML',
                'بهبود سرعت پایه',
                'گزارش اولیه'
            ]
        },
        {
            name: 'پکیج حرفه‌ای',
            price: '۵,۰۰۰,۰۰۰',
            features: [
                'تمام موارد پکیج پایه',
                'Schema Markup کامل',
                'بهینه‌سازی تصاویر',
                'پیکربندی CDN',
                'SSL و امنیت',
                'گزارش تفصیلی'
            ],
            popular: true
        },
        {
            name: 'پکیج پیشرفته',
            price: '۸,۰۰۰,۰۰۰',
            features: [
                'تمام موارد پکیج حرفه‌ای',
                'بهینه‌سازی پیشرفته Core Web Vitals',
                'پیکربندی کامل کش',
                'بهینه‌سازی دیتابیس',
                'مانیتورینگ مداوم',
                'پشتیبانی ۳ ماهه'
            ]
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        سئو تکنیکال
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        بهینه‌سازی فنی وب‌سایت شما برای موتورهای جستجو و بهبود عملکرد کلی
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pricing Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${pkg.popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    محبوب‌ترین
                  </span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-blue-600 mb-6">
                                    {pkg.price} <span className="text-sm text-gray-500">تومان</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    انتخاب پکیج
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
