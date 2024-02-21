// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/styles/index.scss'],
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: [300, 400],
        },
      },
    ],
  ],
});
