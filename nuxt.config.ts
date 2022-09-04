import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	srcDir: './src',
	vite: {
		plugins: [eslintPlugin(), svgLoader()],
	},
	typescript: {
		shim: false,
	},

	modules: ['@vueuse/nuxt'],

	app: {
		head: {
			link: [
				{
					href: 'https://fonts.googleapis.com/css?family=Roboto:regular,500,700',
					rel: 'stylesheet',
				},
				{
					href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css',
					rel: 'stylesheet',
				},
			],
		},
	},

	css: ['@/assets/styles/main.css'],
})
