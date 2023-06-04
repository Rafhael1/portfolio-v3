// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    'vite-plugin-vue-type-imports/nuxt',
		'compression'
  ],	
  srcDir: 'src/',
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		},
	},
  css: ['assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  vite: {
    plugins: [
      svgLoader()
    ]
  }
})
