// components/seo/WebDesignHero.tsx
import {
    ChartBarIcon,
    PresentationChartLineIcon,
    DocumentChartBarIcon,
    EyeIcon,
    CursorArrowRaysIcon,
    CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default function AnalyticsSection() {
    const services = [
        {
            icon: ChartBarIcon,
            title: 'تحلیل ترافیک',
            description: 'بررسی دقیق ترافیک سایت و منابع ورود'
        },
        {
            icon: PresentationChartLineIcon,
            title: 'رتبه‌بندی کلمات',
            description: 'ردیابی رتبه کلمات کلیدی در گوگل'
        },
        {
            icon: DocumentChartBarIcon,
            title: 'گزارش‌های تفصیلی',
            description: 'ارائه گزارش‌های کامل ماهانه از عملکرد'
        },
        {
            icon: EyeIcon,
            title: 'تحلیل رقبا',
            description: 'بررسی استراتژی‌های رقابتی و فرصت‌ها'
        },
        {
            icon: CursorArrowRaysIcon,
            title: 'تحلیل کلیک',
            description: 'بررسی نرخ کلیک و بهینه‌سازی CTR'
        },
        {
            icon: CalendarDaysIcon,
            title: 'گزارش‌دهی منظم',
            description: 'ارسال گزارش‌های هفتگی و ماهانه'
        }
    ];

    const analyticsPlans = [
        {
            name: 'گزارش پایه',
            price: '۵۰۰,۰۰۰',
            features: [
                'گزارش ماهانه ترافیک',
                'رتبه ۲۰ کلمه کلیدی',
                'تحلیل پایه رقبا',
                'گزارش Google Analytics'
            ]
        },
        {
            name: 'گزارش حرفه‌ای',
            price: '۱,۰۰۰,۰۰۰',
            features: [
                'گزارش هفتگی + ماهانه',
                'رتبه ۵۰ کلمه کلیدی',
                'تحلیل کامل رقبا',
                'گزارش Search Console',
                'پیشنهادات بهبود',
                'جلسه مشاوره ماهانه'
            ],
            popular: true
        },
        {
            name: 'گزارش پیشرفته',
            price: '۱,۸۰۰,۰۰۰',
            features: [
                'تمام موارد پکیج حرفه‌ای',
                'رتبه ۱۰۰ کلمه کلیدی',
                'تحلیل عمیق رقبا',
                'ردیابی تبدیل (Conversion)',
                'گزارش ROI',
                'مشاوره هفتگی',
                'داشبورد اختصاصی'
            ]
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        تحلیل و گزارش سئو
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        ردیابی دقیق پیشرفت و ارائه گزارش‌های جامع از عملکرد سئو
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                            <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Analytics Pricing */}
                <div className="grid md:grid-cols-3 gap-8">
                    {analyticsPlans.map((plan, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${plan.popular ? 'border-purple-500' : 'border-gray-200'} relative`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    بهترین انتخاب
                  </span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-purple-600 mb-6">
                                    {plan.price} <span className="text-sm text-gray-500">تومان/ماه</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full ml-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    شروع گزارش‌گیری
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        ابزارهای تحلیل ما
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-4">
                            <ChartBarIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">Google Analytics</div>
                        </div>
                        <div className="text-center p-4">
                            <DocumentChartBarIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">Search Console</div>
                        </div>
                        <div className="text-center p-4">
                            <PresentationChartLineIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">SEMrush</div>
                        </div>
                        <div className="text-center p-4">
                            <EyeIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                            <div className="font-semibold">Ahrefs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
