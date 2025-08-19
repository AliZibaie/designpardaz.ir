// app/services/web-design/components/WebAppDesign.tsx
import { Smartphone, Database, Lock, Zap, Users, BarChart3 } from 'lucide-react'

export default function WebAppDesign() {
    const features = [
        { icon: Smartphone, title: 'Progressive Web App', desc: 'تجربه موبایل اپ در مرورگر' },
        { icon: Database, title: 'پایگاه داده قدرتمند', desc: 'ذخیره سازی ایمن اطلاعات' },
        { icon: Lock, title: 'احراز هویت امن', desc: 'سیستم ورود و ثبت نام پیشرفته' },
        { icon: Zap, title: 'عملکرد بالا', desc: 'بارگذاری سریع و واکنش فوری' },
        { icon: Users, title: 'مدیریت کاربران', desc: 'کنترل دسترسی و نقش ها' },
        { icon: BarChart3, title: 'داشبورد تحلیلی', desc: 'نمایش آمار و گزارشات' }
    ]

    const appTypes = [
        {
            title: 'سیستم مدیریت محتوا (CMS)',
            description: 'مدیریت آسان محتوای وبسایت',
            price: '30,000,000',
            timeline: '4 هفته'
        },
        {
            title: 'سیستم مدیریت ارتباط با مشتری (CRM)',
            description: 'مدیریت مشتریان و فروش',
            price: '45,000,000',
            timeline: '6 هفته',
            popular: true
        },
        {
            title: 'پلتفرم آموزشی آنلاین',
            description: 'سیستم LMS برای آموزش',
            price: '55,000,000',
            timeline: '8 هفته'
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-orange-100 rounded-full">
                            <Smartphone className="w-12 h-12 text-orange-600" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        طراحی و توسعه وب اپلیکیشن
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        ساخت اپلیکیشن های وب پیشرفته و تعاملی برای رفع نیازهای خاص کسب و کار شما
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center space-x-4 space-x-reverse mb-4">
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mb-20 text-white">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">چرا وب اپلیکیشن؟</h3>
                            <p className="text-orange-100 mb-6 text-lg">
                                وب اپلیکیشن راه حل مدرن برای خودکارسازی فرآیندهای کسب و کار شماست
                            </p>
                            <ul className="space-y-3 text-orange-100">
                                <li className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                                    <span>دسترسی از هر مکان و زمان</span>
                                </li>
                                <li className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                                    <span>کاهش هزینه های عملیاتی</span>
                                </li>
                                <li className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                                    <span>افزایش بهره وری تیم</span>
                                </li>
                                <li className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                                    <span>مقیاس پذیری و انعطاف</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold mb-4">تکنولوژی های مدرن</h4>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="font-bold">React</div>
                                    <div className="text-sm text-orange-200">Frontend</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="font-bold">Node.js</div>
                                    <div className="text-sm text-orange-200">Backend</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="font-bold">MongoDB</div>
                                    <div className="text-sm text-orange-200">Database</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="font-bold">AWS</div>
                                    <div className="text-sm text-orange-200">Hosting</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {appTypes.map((app, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 shadow-lg border-2 ${
                                app.popular
                                    ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-white scale-105'
                                    : 'border-gray-200 bg-white hover:shadow-xl transition-shadow'
                            }`}
                        >
                            {app.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    درخواست بالا
                  </span>
                                </div>
                            )}

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h4>
                            <p className="text-gray-600 mb-6">{app.description}</p>

                            <div className="text-3xl font-bold text-orange-600 mb-2">
                                {app.price} <span className="text-lg text-gray-600">تومان</span>
                            </div>
                            <p className="text-gray-600 mb-8">زمان تحویل: {app.timeline}</p>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                                app.popular
                                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}>
                                مشاوره رایگان
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}