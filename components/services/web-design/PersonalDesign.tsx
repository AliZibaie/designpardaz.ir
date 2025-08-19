// app/services/web-design/components/PersonalDesign.tsx
import { User, Camera, MessageCircle, Calendar, Heart, Briefcase } from 'lucide-react'

export default function PersonalDesign() {
    const useCases = [
        { icon: User, title: 'پرتفولیو شخصی', desc: 'نمایش آثار و مهارت های شما' },
        { icon: Camera, title: 'عکاسی و هنر', desc: 'گالری تصاویر با کیفیت بالا' },
        { icon: MessageCircle, title: 'وبلاگ شخصی', desc: 'به اشتراک گذاری تجربیات' },
        { icon: Calendar, title: 'رزومه آنلاین', desc: 'معرفی تحصیلات و تجربیات' },
        { icon: Heart, title: 'وبسایت عروسی', desc: 'خاطرات زیبای زندگی' },
        { icon: Briefcase, title: 'کسب کار شخصی', desc: 'معرفی خدمات فردی' }
    ]

    const packages = [
        {
            name: 'ساده',
            price: '8,000,000',
            pages: 'تا 3 صفحه',
            timeline: '1 هفته',
            features: ['طراحی تک صفحه ای', 'واکنشگرا', 'فرم تماس', 'گالری تصاویر']
        },
        {
            name: 'کامل',
            price: '12,000,000',
            pages: 'تا 6 صفحه',
            timeline: '2 هفته',
            features: ['چندصفحه ای', 'وبلاگ شخصی', 'پنل مدیریت ساده', 'بهینه سازی SEO'],
            popular: true
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-purple-100 rounded-full">
                            <User className="w-12 h-12 text-purple-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی سایت شخصی
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        ساخت حضور دیجیتال منحصر به فرد برای افراد، هنرمندان، و متخصصان
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center space-x-4 space-x-reverse mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                    <useCase.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                            </div>
                            <p className="text-gray-600">{useCase.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-20 text-white">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">هویت دیجیتال منحصر به فرد شما</h3>
                        <p className="text-purple-100 mb-8 text-lg">
                            با سایت شخصی دیزاین پرداز، داستان خود را به جهان بگویید
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold mb-2">100%</div>
                                <p className="text-purple-100">طراحی اختصاصی</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold mb-2">موبایل</div>
                                <p className="text-purple-100">بهینه سازی کامل</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-2xl font-bold mb-2">آسان</div>
                                <p className="text-purple-100">مدیریت محتوا</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg border-2 ${
                                pkg.popular
                                    ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white scale-105'
                                    : 'border-gray-200 bg-white hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    محبوب
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                {pkg.price} <span className="text-lg text-gray-600">تومان</span>
                            </div>
                            <p className="text-gray-600 mb-6">{pkg.pages} • {pkg.timeline}</p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                pkg.popular
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                ایجاد هویت دیجیتال
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}