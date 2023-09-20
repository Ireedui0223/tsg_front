export default defineNuxtConfig({
  css: ['@/assets/scss/app.scss'],
  ssr: false,
  app: {
    head: {
      link: [
        {
          href: 'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap',
          rel: 'stylesheet'
        },
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap',
          rel: 'stylesheet'
        }
      ],

      script: [
        {
          src: 'https://www.paypal.com/sdk/js?client-id=test&currency=USD'
        },
        { src: 'https://checkout.stripe.com/checkout.js' }
      ]
    }
  },
  // alias: {
  //     pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  //     },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  // debug: false,

  plugins: [
    { src: '~/plugins/plugins.js', mode: 'client' },
    { src: './plugins/useBootstrap.client.ts', mode: 'client' }
  ]
});
