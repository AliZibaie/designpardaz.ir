// components/seo/LocalSeoSection.tsx
import {
    MapPinIcon,
    StarIcon,
    DevicePhoneMobileIcon,
    BuildingOfficeIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function LocalSeoSection() {
    const features = [
        {
            icon: MapPinIcon,
            title: 'Google My Business',
            description: 'بهینه‌سازی و مدیریت پروفایل GMB شما'
        },
        {
            icon: StarIcon,
            title: 'مدیریت نظرات',
            description: 'افزایش تعداد و کیفیت نظرات مثبت'
        },
        {
            icon: DevicePhoneMobileIcon,
            title: 'جستجوی موبایل',
            description: 'بهینه‌سازی برای جستجوهای محلی موبایل'
        },
        {
            icon: BuildingOfficeIcon,
            title: 'ثبت در دایرکتوری‌ها',
            description: 'ثبت کسب‌وکار در دایرکتوری‌های محلی'
        },
        {
            icon: ClockIcon,
            title: 'اطلاعات به‌روز',
            description: 'نگهداری اطلاعات تماس و ساعات کاری'
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: 'تعامل با مشتری',
            description: 'پاسخ‌دهی سریع به سوالات و نظرات'
        }
    ];

    const localPackages = [
        {
            name: 'پکیج راه‌اندازی',
            price: '۱,۵۰۰,۰۰۰',
            duration: 'یکبار',
            features: [
                'تنظیم Google My Business',
                'ثبت در ۱۰ دایرکتوری محلی',
                'بهینه‌سازی اطلاعات پایه',
                'تنظیم ساعات کاری',
                'آپلود تصاویر'
            ]
        },
        {
            name: 'پکیج مدیریت ماهانه',
            price: '۸۰۰,۰۰۰',
            duration: 'ماهانه',
            features: [
                'مدیریت GMB',
                'پاسخ به نظرات',
                'انتشار پست‌های محلی',
                'گزارش عملکرد',
                'بهینه‌سازی مداوم'
            ],
            popular: true
        },
        {
            name: 'پکیج کامل',
            price: '۳,۰۰۰,۰۰۰',
            duration: 'راه‌اندازی + ۳ ماه مدیریت',
            features: [
                'تمام موارد پکیج راه‌اندازی',
                '۳ ماه مدیریت کامل',
                'کمپین تجمیع نظرات',
                'تولید محتوای محلی',
                'تحلیل رقبای محلی'
            ]
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        سئو محلی
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        افزایش دیده‌شدگی کسب‌وکار محلی شما در نتایج جستجوی گوگل
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

                {/* Local SEO Pricing */}
                <div className="grid md:grid-cols-3 gap-8">
                    {localPackages.map((pkg, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${pkg.popular ? 'border-green-500' : 'border-gray-200'} relative`}>
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    پرطرفدار
                  </span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    {pkg.price} <span className="text-sm text-gray-500">تومان</span>
                                </div>
                                <div className="text-sm text-gray-500 mb-6">{pkg.duration}</div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-green-600 rounded-full ml-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${pkg.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    شروع همکاری
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        چرا سئو محلی انتخاب کنید؟
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">۷۶%</div>
                            <div className="text-gray-700">مردم برای یافتن کسب‌وکار محلی از گوگل استفاده می‌کنند</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">۲۸%</div>
                            <div className="text-gray-700">جستجوهای محلی منجر به خرید می‌شوند</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
