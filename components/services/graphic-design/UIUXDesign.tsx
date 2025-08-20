import { Monitor, Smartphone, Tablet, Users } from 'lucide-react';

export default function UIUXDesign() {
    return (
        <section id="ui-ux" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی رابط کاربری UI/UX
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        تجربه کاربری بی‌نظیر و رابط کاربری زیبا برای وب‌سایت، اپلیکیشن موبایل و
                        سامانه‌های تحت وب شما
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: <Monitor className="w-8 h-8" />,
                            title: 'طراحی وب',
                            desc: 'رابط کاربری ریسپانسیو',
                            price: 'از 8,000,000 تومان'
                        },
                        {
                            icon: <Smartphone className="w-8 h-8" />,
                            title: 'طراحی موبایل',
                            desc: 'اپلیکیشن‌های iOS و Android',
                            price: 'از 12,000,000 تومان'
                        },
                        {
                            icon: <Tablet className="w-8 h-8" />,
                            title: 'طراحی تبلت',
                            desc: 'بهینه‌سازی برای تبلت‌ها',
                            price: 'از 6,000,000 تومان'
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: 'تست کاربری',
                            desc: 'آزمایش و بهبود UX',
                            price: 'از 4,000,000 تومان'
                        }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-600 mb-4">{service.desc}</p>
                            <p className="text-cyan-600 font-semibold">{service.price}</p>
                        </div>
                    ))}
                </div>

                {/* Process */}
                <div className="bg-gradient-to-r from-slate-900 to-cyan-900 rounded-2xl p-8 md:p-12 text-white">
                    <h3 className="text-3xl font-bold text-center mb-12">فرآیند طراحی UI/UX</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'تحقیق و تحلیل', desc: 'بررسی نیازها و مخاطبان' },
                            { step: '02', title: 'ایده‌پردازی', desc: 'ایجاد کانسپت و وایرفریم' },
                            { step: '03', title: 'طراحی', desc: 'ساخت پروتوتایپ تعاملی' },
                            { step: '04', title: 'تست و تحویل', desc: 'آزمایش نهایی و تحویل فایل‌ها' }
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {phase.step}
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                                <p className="text-slate-300 text-sm">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
