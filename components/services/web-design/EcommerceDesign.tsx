// app/services/web-design/components/EcommerceDesign.tsx
import { ShoppingCart, CreditCard, Truck, Shield, TrendingUp, Star } from 'lucide-react'

export default function EcommerceDesign() {
    const features = [
        { icon: ShoppingCart, title: 'سبد خرید هوشمند', desc: 'مدیریت آسان محصولات' },
        { icon: CreditCard, title: 'درگاه پرداخت', desc: 'اتصال به درگاه های معتبر' },
        { icon: Truck, title: 'مدیریت ارسال', desc: 'محاسبه خودکار هزینه ارسال' },
        { icon: Shield, title: 'امنیت بالا', desc: 'SSL و حفاظت از اطلاعات' },
        { icon: TrendingUp, title: 'گزارشات فروش', desc: 'آمار کامل فروش و درآمد' },
        { icon: Star, title: 'سیستم امتیازدهی', desc: 'نظرات و رتبه بندی محصولات' }
    ]

    const packages = [
        {
            name: 'استارت',
            price: '20,000,000',
            products: 'تا 50 محصول',
            timeline: '3 هفته',
            features: ['طراحی واکنشگرا', 'پنل مدیریت', 'درگاه پرداخت', 'سبد خرید']
        },
        {
            name: 'بیزینس',
            price: '35,000,000',
            products: 'تا 500 محصول',
            timeline: '4 هفته',
            features: ['تمام موارد استارت', 'سیستم تخفیف', 'گزارشات فروش', 'چندین درگاه پرداخت'],
            popular: true
        },
        {
            name: 'انترپرایز',
            price: '50,000,000',
            products: 'نامحدود',
            timeline: '6 هفته',
            features: ['تمام موارد قبلی', 'چندفروشندگی', 'موبایل اپ', 'سیستم انبارداری']
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-100 rounded-full">
                            <ShoppingCart className="w-12 h-12 text-green-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی فروشگاه اینترنتی
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        راه اندازی فروشگاه آنلاین حرفه ای با تمام امکانات مورد نیاز برای فروش موفق در فضای دیجیتال
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center space-x-4 space-x-reverse mb-4">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-20 text-white">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">آماده شروع کسب و کار آنلاین؟</h3>
                            <p className="text-green-100 mb-6 text-lg">
                                با فروشگاه اینترنتی دیزاین پرداز، فروش آنلاین خود را با اعتماد شروع کنید
                            </p>
                            <ul className="space-y-2 text-green-100">
                                <li>✓ راه اندازی سریع در کمتر از یک ماه</li>
                                <li>✓ پشتیبانی کامل فنی و آموزشی</li>
                                <li>✓ طراحی منحصر به فرد برای برند شما</li>
                            </ul>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">۲۴/۷</div>
                                <p className="text-green-100 mb-4">پشتیبانی فنی</p>
                                <div className="text-2xl font-bold mb-2">۹۹.۹%</div>
                                <p className="text-green-100">زمان آپتایم</p>
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
                                    ? 'border-green-500 bg-gradient-to-b from-green-50 to-white scale-105'
                                    : 'border-gray-200 bg-white hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    پیشنهاد ویژه
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                {pkg.price} <span className="text-lg text-gray-600">تومان</span>
                            </div>
                            <p className="text-gray-600 mb-6">{pkg.products} • {pkg.timeline}</p>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                pkg.popular
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                شروع فروش آنلاین
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}