// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: { host: '127.0.0.1' },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@nuxt/eslint'],
  css: ['@/assets/css/index.css'],
})
