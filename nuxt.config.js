import { languages } from './constants'
import { defaultLocale } from './default'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/colors.scss', '~/assets/styles/main.scss'],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/styles/main.scss', '~/assets/styles/colors.scss'],
  },
  // ...
  modules: ['@nuxtjs/style-resources', '@nuxt/content', 'nuxt-i18n'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vueSelect.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/cards', '~/components/layouts'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  i18n: {
    // add SEO attributes in layout head for better performance
    seo: false,
    locales: languages,
    defaultLocale,
    vueI18n: {
      fallbackLocale: defaultLocale,
      messages: {
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    strategy: 'prefix_and_default',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
