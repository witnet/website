import { languages } from './constants'
import { fallbackLocale, defaultLocale } from './default'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Witnet: the decentralized oracle network',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#0094a8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Witnet: the decentralized oracle network',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Witnet brings real power to smart contracts. Witnet is a next-generation decentralized oracle that leverages state-of-the-art cryptoeconomic techniques to provide smart contracts with secure data input and output. The Witnet network runs its own blockchain and relies on the WIT token for incentivization of autonomous nodes that resolve data requests, agree on the results and deliver the results back to smart contracts.',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Witnet: the decentralized oracle network',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Witnet brings real power to smart contracts. Witnet is a next-generation decentralized oracle that leverages state-of-the-art cryptoeconomic techniques to provide smart contracts with secure data input and output. The Witnet network runs its own blockchain and relies on the WIT token for incentivization of autonomous nodes that resolve data requests, agree on the results and deliver the results back to smart contracts.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'images/witnet_green.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Witnet: the decentralized oracle network',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Witnet: the decentralized oracle network',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Witnet brings real power to smart contracts. Witnet is a next-generation decentralized oracle that leverages state-of-the-art cryptoeconomic techniques to provide smart contracts with secure data input and output. The Witnet network runs its own blockchain and relies on the WIT token for incentivization of autonomous nodes that resolve data requests, agree on the results and deliver the results back to smart contracts.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/images/witnet_green.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '~/assets/images/witnet_green.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Witnet: the decentralized oracle network',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap',
      },
    ],
  },

  router: {
    base: '/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/colors.scss',
    '~/assets/styles/main.scss',
    '~/assets/fonts/Nunito-Sans/style.css',
  ],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/styles/main.scss', '~/assets/styles/colors.scss'],
  },
  // ...
  modules: ['@nuxtjs/style-resources', '@nuxt/content', 'nuxt-i18n'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vueSelect.js', ssr: false },
    { src: '~/plugins/scrollAnimation.js', ssr: false },
  ],

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
    vueI18n: {
      fallbackLocale,
      messages: {
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },
    strategy: 'prefix_and_default',
    defaultLocale,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    fallback: true,
  },
}
