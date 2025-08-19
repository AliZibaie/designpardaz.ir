// app/services/web-design/components/CorporateDesign.tsx
import { Building2, Users, Globe, CheckCircle } from 'lucide-react'

export default function CorporateDesign() {
    const features = [
        'طراحی واکنشگرا (Responsive)',
        'پنل مدیریت اختصاصی',
        'بهینه سازی SEO',
        'امنیت بالا',
        'پشتیبانی یک ساله',
        'طراحی اختصاصی بر اساس هویت برند'
    ]

    const packages = [
        {
            name: 'پکیج پایه',
            price: '15,000,000',
            pages: 'تا 5 صفحه',
            timeline: '2 هفته',
            features: ['طراحی واکنشگرا', 'پنل مدیریت ساده', 'بهینه سازی پایه SEO']
        },
        {
            name: 'پکیج حرفه ای',
            price: '25,000,000',
            pages: 'تا 10 صفحه',
            timeline: '3 هفته',
            features: ['تمام موارد پکیج پایه', 'طراحی اختصاصی', 'چت آنلاین', 'گالری تصاویر'],
            popular: true
        },
        {
            name: 'پکیج پیشرفته',
            price: '35,000,000',
            pages: 'نامحدود',
            timeline: '4 هفته',
            features: ['تمام موارد قبلی', 'چندزبانه', 'سیستم خبرنامه', 'تحلیل آمار پیشرفته']
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-blue-100 rounded-full">
                            <Building2 className="w-12 h-12 text-blue-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی سایت شرکتی
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        طراحی سایت حرفه ای و معتبر برای شرکت ها و سازمان ها با تمرکز بر هویت برند و تجربه کاربری عالی
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">ویژگی های کلیدی</h3>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                        <div className="flex items-center space-x-3 space-x-reverse mb-6">
                            <Users className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-gray-900">چرا سایت شرکتی؟</h3>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>• افزایش اعتبار و اعتماد مشتریان</p>
                            <p>• نمایش حرفه ای خدمات و محصولات</p>
                            <p>• دسترسی ۲۴ ساعته مشتریان به اطلاعات</p>
                            <p>• بهبود بازاریابی آنلاین</p>
                            <div className="flex items-center space-x-2 space-x-reverse mt-6 p-4 bg-blue-100 rounded-lg">
                                <Globe className="w-6 h-6 text-blue-600" />
                                <span className="font-semibold text-blue-800">حضور قدرتمند در فضای دیجیتال</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg border-2 ${
                                pkg.popular
                                    ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white scale-105'
                                    : 'border-gray-200 bg-white hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    محبوب ترین
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                {pkg.price} <span className="text-lg text-gray-600">تومان</span>
                            </div>
                            <p className="text-gray-600 mb-6">{pkg.pages} • {pkg.timeline}</p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                pkg.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                انتخاب پکیج
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}