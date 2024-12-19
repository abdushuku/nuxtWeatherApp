// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css:['../assets/style/main.css'],
  ssr:true,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/critters',
    '@nuxtjs/tailwindcss'
  ],
  critters: {
    config:{
      preload:"swap"
    }
  }
})