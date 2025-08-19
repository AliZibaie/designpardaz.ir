// app/services/web-design/components/LandingPageDesign.tsx
import { Target, TrendingUp, MousePointer, Users, Clock, Award } from 'lucide-react'

export default function LandingPageDesign() {
    const benefits = [
        { icon: Target, title: 'تبدیل بازدیدکننده به مشتری', desc: 'طراحی بر اساس روانشناسی فروش' },
        { icon: TrendingUp, title: 'افزایش نرخ تبدیل', desc: 'بهینه سازی برای حداکثر فروش' },
        { icon: MousePointer, title: 'دعوت به عمل قوی', desc: 'دکمه ها و فرم های تبدیل کننده' },
        { icon: Users, title: 'تمرکز بر مخاطب هدف', desc: 'طراحی مطابق نیاز کاربران' },
        { icon: Clock, title: 'بارگذاری سریع', desc: 'عملکرد بهینه در تمام دستگاه ها' },
        { icon: Award, title: 'طراحی حرفه ای', desc: 'ظاهر مدرن و قابل اعتماد' }
    ]

    const packages = [
        {
            name: 'تک صفحه',
            price: '6,000,000',
            timeline: '3 روز',
            features: ['یک صفحه لندینگ', 'طراحی واکنشگرا', 'فرم تماس', 'بهینه سازی SEO پایه'],
            conversions: '3-5%'
        },
        {
            name: 'پیشرفته',
            price: '10,000,000',
            timeline: '1 هفته',
            features: ['چند بخش تخصصی', 'A/B تست', 'تحلیل گر وب', 'بهینه سازی تبدیل', 'چت آنلاین'],
            conversions: '7-12%',
            popular: true
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-red-100 rounded-full">
                            <Target className="w-12 h-12 text-red-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی لندینگ پیج
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        صفحات فرود با نرخ تبدیل بالا برای کمپین های تبلیغاتی و بازاریابی شما
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center space-x-4 space-x-reverse mb-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <benefit.icon className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                            </div>
                            <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 mb-20 text-white">
                    <div className="text-center max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6">آمار موفقیت لندینگ پیج های ما</h3>
                        <div className="grid md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold mb-2">85%</div>
                                <p className="text-red-100">افزایش نرخ تبدیل</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold mb-2">2.3 ثانیه</div>
                                <p className="text-red-100">زمان بارگذاری</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold mb-2">95+</div>
                                <p className="text-red-100">امتیاز PageSpeed</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <p className="text-red-100">واکنشگرا</p>
                            </div>
                        </div>
                        <p className="text-red-100 text-lg">
                            لندینگ پیج های طراحی شده توسط تیم جوان دیزاین پرداز، به طور متوسط نرخ تبدیل ۸۵٪ بالاتری نسبت به صفحات معمولی دارند
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg border-2 ${
                                pkg.popular
                                    ? 'border-red-500 bg-gradient-to-b from-red-50 to-white scale-105'
                                    : 'border-gray-200 bg-white hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    پرفروش
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                {pkg.price} <span className="text-lg text-gray-600">تومان</span>
                            </div>
                            <p className="text-gray-600 mb-4">تحویل در {pkg.timeline}</p>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                                نرخ تبدیل: {pkg.conversions}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                pkg.popular
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                شروع کمپین
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-gray-50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">نیاز به مشاوره دارید؟</h4>
                    <p className="text-gray-600 mb-6">
                        تیم جوان و با انگیزه ما آماده ارائه مشاوره رایگان برای بهترین استراتژی لندینگ پیج شماست
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        مشاوره رایگان
                    </button>
                </div>
            </div>
        </section>
    )
}