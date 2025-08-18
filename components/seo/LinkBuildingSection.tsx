// components/seo/LinkBuildingSection.tsx
import {
    LinkIcon,
    NewspaperIcon,
    UserGroupIcon,
    ChatBubbleBottomCenterTextIcon,
    PresentationChartLineIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function LinkBuildingSection() {
    const strategies = [
        {
            icon: NewspaperIcon,
            title: 'Guest Posting',
            description: 'انتشار مقاله در سایت‌های معتبر با بک‌لینک'
        },
        {
            icon: UserGroupIcon,
            title: 'شبکه‌سازی',
            description: 'ایجاد روابط با وبلاگ‌نویسان و سایت‌داران'
        },
        {
            icon: ChatBubbleBottomCenterTextIcon,
            title: 'محتوای ویروسی',
            description: 'تولید محتوای جذاب برای کسب لینک طبیعی'
        },
        {
            icon: PresentationChartLineIcon,
            title: 'تحلیل رقبا',
            description: 'شناسایی منابع بک‌لینک رقبا'
        },
        {
            icon: ShieldCheckIcon,
            title: 'لینک‌های باکیفیت',
            description: 'تمرکز بر کیفیت به جای کمیت'
        },
        {
            icon: LinkIcon,
            title: 'Link Audit',
            description: 'بررسی و حذف لینک‌های مضر'
        }
    ];

    const linkBuildingPlans = [
        {
            name: 'پکیج شروع',
            price: '۳,۰۰۰,۰۰۰',
            links: '۵-۸',
            features: [
                'تحلیل پروفایل لینک فعلی',
                '۵-۸ بک‌لینک باکیفیت',
                'DA میانگین: ۳۰+',
                'گزارش کامل لینک‌ها',
                'مدت اجرا: ۱ ماه'
            ]
        },
        {
            name: 'پکیج حرفه‌ای',
            price: '۵,۵۰۰,۰۰۰',
            links: '۱۰-۱۵',
            features: [
                'تمام موارد پکیج شروع',
                '۱۰-۱۵ بک‌لینک باکیفیت',
                'DA میانگین: ۴۰+',
                'Guest Post ها با محتوای اصل',
                'تحلیل رقبا',
                'مدت اجرا: ۱.۵ ماه'
            ],
            popular: true
        },
        {
            name: 'پکیج پیشرفته',
            price: '۹,۰۰۰,۰۰۰',
            links: '۲۰-۳۰',
            features: [
                'تمام موارد پکیج حرفه‌ای',
                '۲۰-۳۰ بک‌لینک باکیفیت',
                'DA میانگین: ۵۰+',
                'لینک‌سازی طبیعی',
                'محتوای ویروسی',
                'Link Audit کامل',
                'مدت اجرا: ۲ ماه'
            ]
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Link Building حرفه‌ای
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        کسب بک‌لینک‌های باکیفیت از سایت‌های معتبر برای تقویت اعتبار دامنه
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {strategies.map((strategy, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                            <strategy.icon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {strategy.title}
                            </h3>
                            <p className="text-gray-600">
                                {strategy.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Link Building Pricing */}
                <div className="grid md:grid-cols-3 gap-8">
                    {linkBuildingPlans.map((plan, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${plan.popular ? 'border-indigo-500' : 'border-gray-200'} relative`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    پیشنهاد ویژه
                  </span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-indigo-600 mb-2">
                                    {plan.price} <span className="text-sm text-gray-500">تومان</span>
                                </div>
                                <div className="text-sm text-gray-600 mb-6">
                                    {plan.links} بک‌لینک باکیفیت
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-indigo-600 rounded-full ml-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    شروع Link Building
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                روش کار ما در Link Building
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">۱</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">تحلیل دامنه شما</h4>
                                        <p className="text-gray-600 text-sm">بررسی وضعیت فعلی بک‌لینک‌ها</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">۲</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">یافتن فرصت‌ها</h4>
                                        <p className="text-gray-600 text-sm">شناسایی سایت‌های مناسب</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">۳</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">اجرای استراتژی</h4>
                                        <p className="text-gray-600 text-sm">تولید محتوا و ایجاد روابط</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">۴</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">گزارش نهایی</h4>
                                        <p className="text-gray-600 text-sm">ارائه گزارش کامل لینک‌ها</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-8 rounded-lg">
                            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                                ضمانت‌های ما
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <ShieldCheckIcon className="h-5 w-5 text-green-600 ml-3" />
                                    <span className="text-gray-700">۱۰۰% لینک‌های طبیعی</span>
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheckIcon className="h-5 w-5 text-green-600 ml-3" />
                                    <span className="text-gray-700">بدون استفاده از PBN</span>
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheckIcon className="h-5 w-5 text-green-600 ml-3" />
                                    <span className="text-gray-700">گزارش کامل هر لینک</span>
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheckIcon className="h-5 w-5 text-green-600 ml-3" />
                                    <span className="text-gray-700">پشتیبانی پس از تحویل</span>
                                </div>
                            </div>

                            <div className="mt-6 text-center p-4 bg-white rounded-lg">
                                <div className="text-sm text-gray-600 mb-2">زمان دیده‌شدن نتایج:</div>
                                <div className="text-xl font-bold text-indigo-600">۲-۴ ماه</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
