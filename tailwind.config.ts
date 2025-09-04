import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				serif: ['Montserrat', 'serif'],
				mono: ['monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					dark: 'hsl(var(--primary-dark))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slide-up': {
					from: {
						transform: 'translateY(50px)',
						opacity: '0'
					},
					to: {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-left': {
					from: {
						transform: 'translateX(-50px)',
						opacity: '0'
					},
					to: {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-right': {
					from: {
						transform: 'translateX(50px)',
						opacity: '0'
					},
					to: {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					from: {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					to: {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'zoom-in': {
					from: {
						transform: 'scale(0)',
						opacity: '0'
					},
					to: {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'rotate-in': {
					from: {
						transform: 'rotate(-90deg) scale(0.8)',
						opacity: '0'
					},
					to: {
						transform: 'rotate(0deg) scale(1)',
						opacity: '1'
					}
				},
				'parallax-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-15px) translateX(5px) rotate(2deg)'
					},
					'50%': {
						transform: 'translateY(-30px) translateX(0px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-15px) translateX(-5px) rotate(-2deg)'
					}
				},
				'morph-float': {
					'0%, 100%': {
						borderRadius: '50%',
						transform: 'rotate(0deg) scale(1)'
					},
					'25%': {
						borderRadius: '60% 40% 60% 40%',
						transform: 'rotate(45deg) scale(1.1)'
					},
					'50%': {
						borderRadius: '40% 60% 40% 60%',
						transform: 'rotate(90deg) scale(0.9)'
					},
					'75%': {
						borderRadius: '60% 40% 60% 40%',
						transform: 'rotate(135deg) scale(1.1)'
					}
				},
				'gold-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--primary) / 0.4)'
					}
				},
				'gold-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px hsl(var(--primary) / 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 30px hsl(var(--primary) / 0.6)'
					}
				},
				'gold-sparkle': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				'rotate-slow': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-left': 'slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-right': 'slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'fade-in': 'fade-in 1s ease-out forwards',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'zoom-in': 'zoom-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'rotate-in': 'rotate-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'parallax-float': 'parallax-float 8s ease-in-out infinite',
				'morph-float': 'morph-float 6s ease-in-out infinite',
				'gold-pulse': 'gold-pulse 3s ease-in-out infinite',
				'gold-glow': 'gold-glow 2s ease-in-out infinite',
				'gold-sparkle': 'gold-sparkle 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
