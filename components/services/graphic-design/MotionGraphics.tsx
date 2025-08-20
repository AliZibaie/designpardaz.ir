import { Play, Video, Zap, Target } from 'lucide-react';

export default function MotionGraphics() {
    return (
        <section id="motion" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        موشن گرافیک
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        انیمیشن‌های حرفه‌ای و موشن گرافیک‌هایی که پیام شما را به شکلی جذاب و تاثیرگذار منتقل می‌کنند
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: <Play className="w-8 h-8" />,
                            title: 'تیزر تبلیغاتی',
                            duration: '30-60 ثانیه',
                            price: 'از 15,000,000'
                        },
                        {
                            icon: <Video className="w-8 h-8" />,
                            title: 'انیمیشن لوگو',
                            duration: '5-10 ثانیه',
                            price: 'از 8,000,000'
                        },
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: 'اینترو/آوترو',
                            duration: '10-20 ثانیه',
                            price: 'از 12,000,000'
                        },
                        {
                            icon: <Target className="w-8 h-8" />,
                            title: 'اینفوگرافیک متحرک',
                            duration: '60-120 ثانیه',
                            price: 'از 20,000,000'
                        }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-600 mb-4 text-sm">{service.duration}</p>
                            <p className="text-cyan-600 font-bold">{service.price} تومان</p>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="bg-gradient-to-r from-slate-900 to-cyan-900 rounded-2xl p-8 md:p-12 text-white mb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-8">چرا موشن گرافیک؟</h3>
                            <div className="space-y-6">
                                {[
                                    'جذب توجه 94% بیشتر نسبت به محتوای استاتیک',
                                    'افزایش نرخ تبدیل تا 80% در بازاریابی',
                                    'انتقال پیام پیچیده به شکل ساده',
                                    'ماندگاری بیشتر در ذهن مخاطب'
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <p>{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <h4 className="font-semibold mb-2">مراحل تولید موشن گرافیک</h4>
                                <ol className="text-sm space-y-2">
                                    <li>1. تدوین اسکریپت و استوری‌بورد</li>
                                    <li>2. طراحی عناصر گرافیکی</li>
                                    <li>3. انیمیشن و حرکت‌دهی</li>
                                    <li>4. صداگذاری و موزیک</li>
                                    <li>5. رندر نهایی و تحویل</li>
                                </ol>
                            </div>
                            <div className="bg-cyan-500/20 backdrop-blur-sm p-6 rounded-xl">
                                <h4 className="font-semibold mb-2">فرمت‌های تحویلی</h4>
                                <p className="text-sm">MP4, MOV, AVI, GIF و فرمت‌های مورد نیاز شما</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6">
                        <h3 className="text-2xl font-bold text-center">جدول قیمت موشن گرافیک</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                            <tr>
                                <th className="text-right p-4 font-semibold text-slate-800">نوع خدمت</th>
                                <th className="text-center p-4 font-semibold text-slate-800">مدت زمان</th>
                                <th className="text-center p-4 font-semibold text-slate-800">قیمت (تومان)</th>
                                <th className="text-center p-4 font-semibold text-slate-800">زمان تحویل</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                            {[
                                { service: 'انیمیشن لوگو ساده', duration: '5-10 ثانیه', price: '8,000,000', delivery: '3-5 روز' },
                                { service: 'انیمیشن لوگو پیشرفته', duration: '10-15 ثانیه', price: '15,000,000', delivery: '7-10 روز' },
                                { service: 'تیزر تبلیغاتی کوتاه', duration: '30 ثانیه', price: '25,000,000', delivery: '10-14 روز' },
                                { service: 'تیزر تبلیغاتی بلند', duration: '60 ثانیه', price: '40,000,000', delivery: '14-21 روز' },
                                { service: 'اینفوگرافیک متحرک', duration: '90-120 ثانیه', price: '35,000,000', delivery: '15-20 روز' },
                                { service: 'موشن گرافیک اختصاصی', duration: 'متغیر', price: 'توافقی', delivery: 'بر اساس پروژه' }
                            ].map((item, index) => (
                                <tr key={index} className="hover:bg-slate-50">
                                    <td className="p-4 text-slate-800">{item.service}</td>
                                    <td className="p-4 text-center text-slate-600">{item.duration}</td>
                                    <td className="p-4 text-center font-semibold text-cyan-600">{item.price}</td>
                                    <td className="p-4 text-center text-slate-600">{item.delivery}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
