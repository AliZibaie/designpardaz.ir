import { Megaphone, Calendar, MapPin, Award } from 'lucide-react';

export default function BannerPoster() {
    const bannerTypes = [
        {
            icon: <Megaphone className="w-6 h-6" />,
            title: 'بنر تبلیغاتی',
            sizes: ['وب بنر', 'بیلبورد', 'استند'],
            price: 'از 1,500,000'
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'پوستر رویداد',
            sizes: ['کنسرت', 'نمایشگاه', 'سمینار'],
            price: 'از 2,000,000'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'بنر مکانی',
            sizes: ['فروشگاه', 'رستوران', 'کلینیک'],
            price: 'از 1,800,000'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'پوستر فروش',
            sizes: ['تخفیف', 'محصول جدید', 'فصلی'],
            price: 'از 1,200,000'
        }
    ];

    return (
        <section id="banner" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی بنر و پوستر
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        بنرها و پوسترهای تاثیرگذار که پیام شما را به بهترین شکل به مخاطبان منتقل می‌کنند
                    </p>
                </div>

                {/* Banner Types Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {bannerTypes.map((type, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                                {type.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">{type.title}</h3>
                            <div className="space-y-2 mb-4">
                                {type.sizes.map((size, idx) => (
                                    <span key={idx} className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm ml-2">
                    {size}
                  </span>
                                ))}
                            </div>
                            <div className="border-t pt-4">
                                <span className="text-cyan-600 font-bold">{type.price} تومان</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Size Guide */}
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 mb-16">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                        راهنمای سایزها و قیمت‌ها
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { size: 'A4 (21×29.7 cm)', usage: 'فلایر، پوستر کوچک', price: '1,200,000' },
                            { size: 'A3 (29.7×42 cm)', usage: 'پوستر متوسط', price: '1,500,000' },
                            { size: 'A2 (42×59.4 cm)', usage: 'پوستر بزرگ', price: '2,000,000' },
                            { size: 'A1 (59.4×84.1 cm)', usage: 'بنر نمایشگاهی', price: '2,800,000' },
                            { size: 'A0 (84.1×118.9 cm)', usage: 'بنر بزرگ', price: '3,500,000' },
                            { size: 'سایز دلخواه', usage: 'طبق نیاز شما', price: 'توافقی' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-semibold text-slate-800 mb-1">{item.size}</h4>
                                <p className="text-slate-600 text-sm mb-2">{item.usage}</p>
                                <p className="text-cyan-600 font-bold">{item.price} تومان</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Digital vs Print */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">پکیج دیجیتال</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                'طراحی برای شبکه‌های اجتماعی',
                                'فرمت‌های وب (JPG, PNG, GIF)',
                                'بهینه‌سازی برای نمایش آنلاین',
                                'سایزهای مختلف پلتفرم‌ها'
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full ml-3"></div>
                                    <span className="text-slate-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
                            سفارش طراحی دیجیتال
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">پکیج چاپی</h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                'طراحی با کیفیت 300 DPI',
                                'فرمت‌های چاپ (PDF, AI, EPS)',
                                'CMYK و تنظیمات چاپ',
                                'مشاوره چاپخانه و کاغذ'
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <div className="w-2 h-2 bg-slate-600 rounded-full ml-3"></div>
                                    <span className="text-slate-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 py-3 rounded-xl font-semibold transition-colors duration-300">
                            سفارش طراحی چاپی
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
