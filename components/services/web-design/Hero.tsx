// app/services/web-design/components/Hero.tsx
import { ArrowDown, Palette, Code, Zap } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        خدمات طراحی سایت
                        <span className="block text-cyan-300 mt-2">دیزاین پرداز</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        تیم جوان و خلاق ما آماده ارائه خدمات طراحی سایت با کیفیت بالا و قیمت مناسب است
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 space-x-reverse bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Palette className="w-8 h-8 text-cyan-300" />
                            <span className="text-lg font-semibold">طراحی مدرن</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 space-x-reverse bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Code className="w-8 h-8 text-cyan-300" />
                            <span className="text-lg font-semibold">کدنویسی تمیز</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3 space-x-reverse bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <Zap className="w-8 h-8 text-cyan-300" />
                            <span className="text-lg font-semibold">تحویل سریع</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#corporate"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            مشاهده خدمات ما
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                        >
                            تماس با ما
                        </a>
                    </div>

                    <div className="animate-bounce">
                        <ArrowDown className="w-6 h-6 mx-auto text-cyan-300" />
                    </div>
                </div>
            </div>
        </section>
    )
}