// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    'vite-plugin-vue-type-imports/nuxt',
	],
	srcDir: 'src/',
	app: {
		head: {
			title: 'Rafhael Marques',
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Rafhael Marques portfolio website.' },
				//{ name: 'format-detection', content: 'telephone=no' },
				{ hid: 'og:locale', property: 'og:locale', content: 'en_US' },
				// { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'pt_BR' },				
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		},
	},
  css: ['assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
			cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      },
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
	nitro: {
    compressPublicAssets: true,
  },
  vite: {
    plugins: [
      svgLoader()
    ]
  }
})
