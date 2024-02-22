// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/weatherIcon.png' }],
      title: 'Погода',
    },
  },
  css: ['/assets/styles/index.scss'],
  modules: [
    '@pinia/nuxt', '@element-plus/nuxt',
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
