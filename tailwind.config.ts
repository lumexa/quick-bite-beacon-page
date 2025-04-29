
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				},
				// Mountain Kebab theme colors
				mountain: {
					black: '#121212',
					darkGray: '#2A2A2A',
					gray: '#6E6E6E',
					lightGray: '#E0E0E0',
					white: '#F9F9F9'
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
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'reveal': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					from: {
						transform: 'translateX(-100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'rotate-in': {
					from: {
						opacity: '0',
						transform: 'rotateX(-10deg)'
					},
					to: {
						opacity: '1',
						transform: 'rotateX(0)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'reveal': 'reveal 0.8s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'rotate-in': 'rotate-in 0.6s ease-out',
				'pulse-soft': 'pulse-soft 2s infinite ease-in-out'
			},
			fontFamily: {
				sans: ['"Nunito"', 'sans-serif'],
				display: ['"Bebas Neue"', 'sans-serif'],
				body: ['"Inter"', 'sans-serif']
			},
			backgroundImage: {
				'concrete-texture': "url('https://images.unsplash.com/photo-1565366896067-3e7b52d395e2?q=80&w=1000')",
				'mountain-pattern': "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000')"
			},
			boxShadow: {
				'brutal': '4px 4px 0px rgba(0, 0, 0, 1)',
				'brutal-sm': '2px 2px 0px rgba(0, 0, 0, 1)',
				'brutal-lg': '6px 6px 0px rgba(0, 0, 0, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
