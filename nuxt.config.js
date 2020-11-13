export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tournaments',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: `~/assets/globalScss/globals.scss`,
      lang: 'scss'
    },
    {
      src: `~/assets/globalScss/animations.scss`,
      lang: 'scss'
    }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/api/user' },
    { src: '~plugins/helpers/formValidators' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false
      }
    }
  }
}
