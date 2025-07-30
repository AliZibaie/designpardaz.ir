// tailwind.config.js
import  { Config } from 'tailwindcss'

const config = {

    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                vazirmatn: ['var(--font-vazirmatn)', 'Vazirmatn', 'sans-serif'],
                sans: ['var(--font-vazirmatn)', 'Vazirmatn', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Navy Color Palette
                navy: {
                    50: 'rgb(var(--color-navy-50) / <alpha-value>)',
                    100: 'rgb(var(--color-navy-100) / <alpha-value>)',
                    200: 'rgb(var(--color-navy-200) / <alpha-value>)',
                    300: 'rgb(var(--color-navy-300) / <alpha-value>)',
                    400: 'rgb(var(--color-navy-400) / <alpha-value>)',
                    500: 'rgb(var(--color-navy-500) / <alpha-value>)',
                    600: 'rgb(var(--color-navy-600) / <alpha-value>)',
                    700: 'rgb(var(--color-navy-700) / <alpha-value>)',
                    800: 'rgb(var(--color-navy-800) / <alpha-value>)',
                    900: 'rgb(var(--color-navy-900) / <alpha-value>)',
                    950: 'rgb(var(--color-navy-950) / <alpha-value>)',
                },
                // Gold Color Palette
                gold: {
                    50: 'rgb(var(--color-gold-50) / <alpha-value>)',
                    100: 'rgb(var(--color-gold-100) / <alpha-value>)',
                    200: 'rgb(var(--color-gold-200) / <alpha-value>)',
                    300: 'rgb(var(--color-gold-300) / <alpha-value>)',
                    400: 'rgb(var(--color-gold-400) / <alpha-value>)',
                    500: 'rgb(var(--color-gold-500) / <alpha-value>)',
                    600: 'rgb(var(--color-gold-600) / <alpha-value>)',
                    700: 'rgb(var(--color-gold-700) / <alpha-value>)',
                },
                // Theme-based Colors
                bg: {
                    primary: 'var(--color-bg-primary)',
                    secondary: 'var(--color-bg-secondary)',
                    tertiary: 'var(--color-bg-tertiary)',
                    card: 'var(--color-bg-card)',
                    navbar: 'var(--color-bg-navbar)',
                    footer: 'var(--color-bg-footer)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    muted: 'var(--color-text-muted)',
                    inverse: 'var(--color-text-inverse)',
                    navbar: 'var(--color-text-navbar)',
                },
                border: {
                    DEFAULT: 'var(--color-border)',
                    focus: 'var(--color-border-focus)',
                },
            },
            boxShadow: {
                'custom-sm': 'var(--shadow-sm)',
                'custom-md': 'var(--shadow-md)',
                'custom-lg': 'var(--shadow-lg)',
                'custom-xl': 'var(--shadow-xl)',
                'navbar': '0 2px 12px rgba(30, 41, 59, 0.08)',
                'navbar-scrolled': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                'dropdown': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'button': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
                'button-hover': '0 6px 20px rgba(0, 0, 0, 0.15)',
                'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
                'glow-gold': '0 0 20px rgba(245, 158, 11, 0.5)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'fade-in-left': 'fadeInLeft 0.6s ease-out',
                'fade-in-right': 'fadeInRight 0.6s ease-out',
                'slide-in-up': 'slideInUp 0.4s ease-out',
                'slide-in-down': 'slideInDown 0.4s ease-out',
                'slide-in-left': 'slideInLeft 0.4s ease-out',
                'slide-in-right': 'slideInRight 0.4s ease-out',
                'floating': 'floating 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
                'spin-slow': 'spin 3s linear infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'shake': 'shake 0.5s ease-in-out',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
                'scale-in': 'scaleIn 0.3s ease-out',
                'scale-out': 'scaleOut 0.3s ease-in',
                'rotate-in': 'rotateIn 0.6s ease-out',
                'flip': 'flip 0.6s ease-in-out',
                'zoom-in': 'zoomIn 0.5s ease-out',
                'zoom-out': 'zoomOut 0.5s ease-in',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInUp: {
                    '0%': {
                        transform: 'translateY(100%)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                slideInDown: {
                    '0%': {
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    '0%': {
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                floating: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)',
                    },
                    '50%': {
                        transform: 'rotate(3deg)',
                    },
                },
                shake: {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                    },
                    '10%, 30%, 50%, 70%, 90%': {
                        transform: 'translateX(-5px)',
                    },
                    '20%, 40%, 60%, 80%': {
                        transform: 'translateX(5px)',
                    },
                },
                heartbeat: {
                    '0%, 50%, 100%': {
                        transform: 'scale(1)',
                    },
                    '25%, 75%': {
                        transform: 'scale(1.1)',
                    },
                },
                glow: {
                    '0%': {
                        boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)',
                    },
                    '100%': {
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)',
                    },
                },
                typing: {
                    '0%': {
                        width: '0',
                    },
                    '100%': {
                        width: '100%',
                    },
                },
                'blink-caret': {
                    '0%, 100%': {
                        borderColor: 'transparent',
                    },
                    '50%': {
                        borderColor: 'currentColor',
                    },
                },
                scaleIn: {
                    '0%': {
                        transform: 'scale(0.9)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
                scaleOut: {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scale(0.9)',
                        opacity: '0',
                    },
                },
                rotateIn: {
                    '0%': {
                        transform: 'rotate(-180deg) scale(0.5)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'rotate(0deg) scale(1)',
                        opacity: '1',
                    },
                },
                flip: {
                    '0%': {
                        transform: 'rotateY(0)',
                    },
                    '50%': {
                        transform: 'rotateY(180deg)',
                    },
                    '100%': {
                        transform: 'rotateY(0)',
                    },
                },
                zoomIn: {
                    '0%': {
                        transform: 'scale(0)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
                zoomOut: {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scale(0)',
                        opacity: '0',
                    },
                },
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '900': '900ms',
            },
            transitionTimingFunction: {
                'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
                '192': '48rem',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            backdropBlur: {
                xs: '2px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-shine': 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: 'var(--color-text-primary)',
                        '[class~="lead"]': {
                            color: 'var(--color-text-secondary)',
                        },
                        a: {
                            color: 'var(--color-gold-600)',
                            textDecoration: 'none',
                            fontWeight: '500',
                            '&:hover': {
                                color: 'var(--color-gold-500)',
                                textDecoration: 'underline',
                            },
                        },
                        strong: {
                            color: 'var(--color-text-primary)',
                        },
                        'ol[type="A"]': {
                            '--list-counter-style': 'upper-alpha',
                        },
                        'ol[type="a"]': {
                            '--list-counter-style': 'lower-alpha',
                        },
                        'ol[type="A" s]': {
                            '--list-counter-style': 'upper-alpha',
                        },
                        'ol[type="a" s]': {
                            '--list-counter-style': 'lower-alpha',
                        },
                        'ol[type="I"]': {
                            '--list-counter-style': 'upper-roman',
                        },
                        'ol[type="i"]': {
                            '--list-counter-style': 'lower-roman',
                        },
                        'ol[type="I" s]': {
                            '--list-counter-style': 'upper-roman',
                        },
                        'ol[type="i" s]': {
                            '--list-counter-style': 'lower-roman',
                        },
                        'ol[type="1"]': {
                            '--list-counter-style': 'decimal',
                        },
                        h1: {
                            color: 'var(--color-text-primary)',
                        },
                        h2: {
                            color: 'var(--color-text-primary)',
                        },
                        h3: {
                            color: 'var(--color-text-primary)',
                        },
                        h4: {
                            color: 'var(--color-text-primary)',
                        },
                        blockquote: {
                            fontWeight: '500',
                            fontStyle: 'italic',
                            color: 'var(--color-text-secondary)',
                            borderLeftWidth: '0.25rem',
                            borderLeftColor: 'var(--color-gold-400)',
                            quotes: '"\\201C""\\201D""\\2018""\\2019"',
                        },
                        code: {
                            color: 'var(--color-text-primary)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            paddingLeft: '0.25rem',
                            paddingRight: '0.25rem',
                            paddingTop: '0.125rem',
                            paddingBottom: '0.125rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.875em',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // Custom plugin for utilities
        function({ addUtilities, theme }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                },
                '.text-shadow-md': {
                    textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
                },
                '.text-shadow-lg': {
                    textShadow: '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
                '.scrollbar-none': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.scrollbar-thin': {
                    'scrollbar-width': 'thin',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'var(--color-bg-secondary)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'var(--color-text-muted)',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'var(--color-text-secondary)',
                    },
                },
                '.bg-pattern': {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='5' cy='5' r='2'/%3E%3Ccircle cx='55' cy='55' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                },
                '.glass': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                },
                '.glass-dark': {
                    background: 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            }
            addUtilities(newUtilities)
        },
    ],
}

export default config
