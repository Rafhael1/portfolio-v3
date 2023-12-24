// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
								routeRules: {
																'/': { prerender: true },
																'/api/**': { cors: true },
								},
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    'vite-plugin-vue-type-imports/nuxt',
								],
								runtimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY		
								},
								srcDir: 'src/',
								app: {		
																head: {
																								title: 'Rafhael Marques',
																								htmlAttrs: {
																																lang: 'en',

																								},
																								script: [],
																								meta: [
																																{ charset: 'utf-8' },
																																{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
																																{ hid: 'description', name: 'description', content: 'Rafhael Marques portfolio website.' },
																																//{ name: 'format-detection', content: 'telephone=no' },
																																{ hid: 'og:locale', property: 'og:locale', content: 'en_US' },
																																{ hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'pt_BR' },				
																																// index
																																{ hid: 'og:type', property: 'og:type', content: 'website' },
																																{ hid: 'og:title', property: 'og:title', content: 'Rafhael Marques de Lima Freitas' },
																																{ hid: 'og:description', property: 'og:description', content: 'Rafhael Marques portfolio website. Typescript, Javascript, Node.js, Nest.js, React, Angular, Vue, Nuxt' },
																																{ hid: 'og:url', property: 'og:url', content: 'https://rafhaelmarques.me' },
																																{ hid: 'og:site_name', property: 'og:site_name', content: 'Rafhael Marques de Lima Freitas' },
																																// robot meta tag
																																{ hid: 'robots', name: 'robots', content: 'index, follow' },				
																								],
																								link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
								nitro: {
    compressPublicAssets: true,
																prerender: {
																								routes: ['/'],
																}
  },
  vite: {
    plugins: [
      svgLoader()
    ]
  }
})
