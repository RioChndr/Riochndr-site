import colors from 'vuetify/es5/util/colors'
import meta from './meta-web.js'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Rio Chandra',
    title: 'Dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: meta.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: meta.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: meta.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: meta.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: meta.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: meta.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: meta.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: meta.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: meta.title
        },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'image', property: 'image', content: meta.image },
        { hid: 'twitter:type', name: 'twitter:type', content: 'website' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {fix: true}],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
