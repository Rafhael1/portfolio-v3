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
	plugins: [],
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
			'section-secondary-background': '#FBFBFB',
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
				},
				'fade-in-section': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-300px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {						
						width: "100%",
          }  
        },
        blink: {
          "50%": {
						borderColor: "transparent"
          },
          "100%": {					
						borderColor: "rgb(124 58 237)"						
          }  
        }			
			},		
			fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
		animation: {
			'fade-in-right': 'fade-in-right 0.2s ease-out',
			'fade-in-section': 'fade-in-section 0.4s ease-in',
			typing: "typing 2s steps(25) alternate, blink .8s infinite"		},
  },
}