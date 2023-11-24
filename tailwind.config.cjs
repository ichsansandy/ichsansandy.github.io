/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-bkg) / <alpha-value>)',
				content: 'hsl(var(--color-content) / <alpha-value>)',
				accent: 'hsl(var(--color-accent2) / <alpha-value>)',
				secondary: 'hsl(var(--color-accent1) / <alpha-value>)'
			},
			keyframes: {
				'break-down': {
					from: {
						transform: 'translateY(0) translateX(0)'
					},
					to: {
						transform: 'translateY(61vh) translateX(-34%)',
						fontSize: '10vw'
					}
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(-10%)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				float: {
					'25%': { transform: 'translateY(-10px)' },
					'50%': { transform: 'translateY(10px)' },
					'75%': { transform: 'translateY(-10px)' }
				},
				slide: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				break: 'break-down linear forwards',
				'fade-in': 'fade-in linear forwards',
				'spin-slower': 'spin 35s ease infinite',
				'spin-slow': 'spin 25s ease-in-out infinite reverse',
				float: 'float 7s ease infinite',
				slide: 'slide 12s linear infinite'
			},
			supports: {
				'scroll-timeline': '(animation-timeline: scroll())',
				'no-scroll-timeline': 'not (animation-timeline: scroll())'
			},
			fontFamily: {
				satisfy: 'Satisfy, sans-serif',
				comforta: 'Comfortaa Variable, sans-serif'
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme('content')
					}
				}
			})
		}
	},

	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': '0px'
				}
			}

			addUtilities(newUtilities)
		},
		require('@tailwindcss/typography')
	]
}
