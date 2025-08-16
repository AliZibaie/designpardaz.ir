'use client';
import {ArrowRightIcon,
    CalendarDaysIcon,
    ChevronDownIcon,
    ClockIcon,
    CogIcon,
    CodeBracketIcon,
    TrophyIcon,
    ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";

// Process Steps
const processSteps = [
    {
        step: 1,
        title: 'مشاوره و بررسی',
        description: 'تحلیل نیازهای شما و ارائه راهکار مناسب',
        icon: ChatBubbleLeftRightIcon,
        duration: '۱ روز'
    },
    {
        step: 2,
        title: 'طراحی و توسعه',
        description: 'شروع طراحی و کدنویسی بر اساس استانداردهای روز',
        icon: CodeBracketIcon,
        duration: '۷-۲۱ روز'
    },
    {
        step: 3,
        title: 'تست و بهینه‌سازی',
        description: 'تست کامل و بهینه‌سازی برای بهترین عملکرد',
        icon: CogIcon,
        duration: '۲-۳ روز'
    },
    {
        step: 4,
        title: 'تحویل و پشتیبانی',
        description: 'تحویل پروژه و شروع پشتیبانی ۶ ماهه رایگان',
        icon: TrophyIcon,
        duration: '۱ روز'
    }
];

export default function ProcessSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white" data-animate>
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-4">
                        <CogIcon className="w-4 h-4" />
                        <span>فرآیند کار</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">
                        چگونه پروژه شما را
                        <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text"> اجرا می‌کنیم؟</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        در ۴ مرحله ساده، پروژه شما را از ایده تا اجرا و تحویل همراهی می‌کنیم
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transform -translate-y-1/2"></div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step.step} className="relative">

                                {/* Step Card */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/15 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 hover:border-cyan-400/30">

                                    {/* Step Number */}
                                    <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                                        <span className="text-2xl font-black text-white">{step.step}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl blur-lg opacity-50"></div>
                                    </div>

                                    {/* Step Icon */}
                                    <div className="w-12 h-12 mx-auto mb-4">
                                        <step.icon className="w-full h-full text-cyan-400" />
                                    </div>

                                    {/* Step Content */}
                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{step.description}</p>

                                    {/* Duration */}
                                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                                        <ClockIcon className="w-3 h-3" />
                                        <span>{step.duration}</span>
                                    </div>
                                </div>

                                {/* Arrow (Desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <ArrowRightIcon className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
                                    </div>
                                )}

                                {/* Arrow (Mobile) */}
                                {index < processSteps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <ChevronDownIcon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-300 mb-6">آماده شروع هستید؟</p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/40">
                        <CalendarDaysIcon className="w-5 h-5" />
                        همین الان شروع کنید
                    </button>
                </div>
            </div>
        </section>
    )
}