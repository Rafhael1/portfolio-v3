/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

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
		colors: {
			'primary-text-light': '#232E35',
			'primary-text-dark': '#1B252B',
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