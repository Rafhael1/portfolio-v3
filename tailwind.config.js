/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	important: true,
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  theme: {
		screens: {
			'mobile': { 'max': '650px' },
			'tablet': { 'min': '768px', 'max': '1023px' },
			'desktop': { 'min': '1024px' },
			...defaultTheme.screens,
		 },
		colors: {
			'primary-text-light': '#232E35',
			'primary-text-dark': '#1B252B',
			'primary-border-color': '#C2C1C2',
			'section-title-color': '#656D72',
			...colors
		},
		extend: {
			borderRadius: {
				'none': '0',
				'sm': '.125rem',
				DEFAULT: '8px',
				'lg': '.5rem',
				'full': '9999px',
			},
			keyframes: {
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'fade-in-right': 'fade-in-right 0.2s ease-out'
			},
			fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}