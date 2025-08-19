// app/services/web-design/components/RedesignServices.tsx
import { RefreshCw, Zap, Smartphone, Search, Shield, Users } from 'lucide-react'

export default function RedesignServices() {
    const problems = [
        { icon: Smartphone, title: 'عدم سازگاری با موبایل', desc: 'طراحی قدیمی و غیر واکنشگرا' },
        { icon: Zap, title: 'سرعت پایین بارگذاری', desc: 'از دست رفتن بازدیدکنندگان' },
        { icon: Search, title: 'رتبه پایین در گوگل', desc: 'عدم بهینه سازی SEO' },
        { icon: Shield, title: 'مشکلات امنیتی', desc: 'نسخه های قدیمی و آسیب پذیر' },
        { icon: Users, title: 'تجربه کاربری ضعیف', desc: 'طراحی پیچیده و غیر کاربردی' },
        { icon: RefreshCw, title: 'فناوری منسوخ شده', desc: 'عدم پشتیبانی از استانداردها' }
    ]

    const solutions = [
        'طراحی مجدد کامل با فناوری روز',
        'بهینه سازی سرعت و عملکرد',
        'سازگاری کامل با موبایل و تبلت',
        'بهبود SEO و رتبه در گوگل',
        'امنیت پیشرفته و به روزرسانی',
        'تجربه کاربری مدرن و آسان'
    ]

    const packages = [
        {
            name: 'ریدیزاین ساده',
            price: '12,000,000',
            timeline: '2 هفته',
            features: ['طراحی مجدد ظاهری', 'واکنشگرا سازی', 'بهینه سازی سرعت', 'بهبود UX/UI']
        },
        {
            name: 'ریدیزاین کامل',
            price: '20,000,000',
            timeline: '3 هفته',
            features: ['بازسازی کامل', 'فناوری جدید', 'بهینه سازی SEO', 'امنیت پیشرفته', 'تست و اصلاح'],
            popular: true
        },
        {
            name: 'ریدیزاین پیشرفته',
            price: '30,000,000',
            timeline: '4 هفته',
            features: ['تمام موارد کامل', 'مهاجرت محتوا', 'آموزش تیم', 'پشتیبانی 6 ماهه', 'گارانتی عملکرد']
        }
    ]

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-yellow-100 rounded-full">
                            <RefreshCw className="w-12 h-12 text-yellow-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-6">
                        ریدیزاین و بازسازی سایت
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        تجدید حیات سایت قدیمی شما با فناوری های مدرن و طراحی به روز
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-red-400">مشکلات رایج سایت های قدیمی</h3>
                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <div key={index} className="flex items-start space-x-4 space-x-reverse bg-gray-800 rounded-lg p-4">
                                    <div className="p-2 bg-red-500/20 rounded-lg">
                                        <problem.icon className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-red-400 mb-1">{problem.title}</h4>
                                        <p className="text-gray-300">{problem.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-green-400">راه حل های ما</h3>
                        <div className="space-y-4 mb-8">
                            {solutions.map((solution, index) => (
                                <div key={index} className="flex items-center space-x-3 space-x-reverse">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-gray-300 text-lg">{solution}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold mb-3">نتیجه ریدیزاین</h4>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-green-300">300%</div>
                                    <div className="text-sm text-gray-200">افزایش سرعت</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-300">150%</div>
                                    <div className="text-sm text-gray-200">بهبود SEO</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-300">85%</div>
                                    <div className="text-sm text-gray-200">کاهش نرخ ترک</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-300">200%</div>
                                    <div className="text-sm text-gray-200">افزایش تبدیل</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 mb-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">چرا الان وقت ریدیزاین است؟</h3>
                        <p className="text-yellow-100 mb-8 text-lg">
                            در دنیای دیجیتال امروز، سایت شما باید مدرن، سریع و کاربردی باشد تا در رقابت پیش بمانید
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <h4 className="font-bold mb-2">قبل از ریدیزاین</h4>
                                <ul className="text-sm text-yellow-100 space-y-1">
                                    <li>• بازدید کم و نرخ ترک بالا</li>
                                    <li>• رتبه پایین در گوگل</li>
                                    <li>• تجربه کاربری ضعیف</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <h4 className="font-bold mb-2">بعد از ریدیزاین</h4>
                                <ul className="text-sm text-yellow-100 space-y-1">
                                    <li>• افزایش ترافیک و فروش</li>
                                    <li>• رتبه بالا در موتورهای جستجو</li>
                                    <li>• تجربه کاربری عالی</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg border-2 ${
                                pkg.popular
                                    ? 'border-yellow-500 bg-gradient-to-b from-yellow-900/50 to-gray-800 scale-105'
                                    : 'border-gray-700 bg-gray-800 hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    بهترین انتخاب
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold mb-4">{pkg.name}</h4>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">
                                {pkg.price} <span className="text-lg text-gray-400">تومان</span>
                            </div>
                            <p className="text-gray-400 mb-6">زمان اجرا: {pkg.timeline}</p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                pkg.popular
                                    ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                            }`}>
                                شروع ریدیزاین
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-gray-800 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-4">تحلیل رایگان سایت شما</h4>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        تیم جوان ما آماده بررسی رایگان سایت فعلی شما و ارائه پیشنهادات بهبود است
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            تحلیل رایگان سایت
                        </button>
                        <button className="border-2 border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                            مشاهده نمونه کارها
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}