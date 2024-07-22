// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { languageLocales } from './constants'

export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/website/',
    head: {
      title: 'Wit/Oracle: The most powerful oracle, provably.',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'viewport-fit=cover, width=device-width, initial-scale=1',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Wit/Oracle: The most powerful oracle, provably.',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Secure your smart contracts and dApps with the Wit/oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Wit/Oracle: The most powerful oracle, provably.',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Secure your smart contracts and dApps with the Wit/oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/meta-image.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Wit/Oracle',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Wit/Oracle: The most powerful oracle, provably.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Secure your smart contracts and dApps with the Wit/oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/meta-image.png',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: '/meta-image.png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Wit/Oracle',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
        },
      ],
      link: [
        {
          rel: 'preload',
          href: 'fonts/nimbusmono-regular.woff',
          as: 'font',
          type: 'font/woff',
        },
        {
          rel: 'preload',
          href: 'fonts/nimbusmono-bold.woff',
          as: 'font',
          type: 'font/woff',
        },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
          type: 'image/png',
        },
        {
          rel: 'icon',
          sizes: '32x32',
          href: '/favicon-32x32.png',
          type: 'image/png',
        },
        {
          rel: 'icon',
          sizes: '16x16',
          href: '/favicon-16x16.png',
          type: 'image/png',
        },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '2D2C39' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
      ],
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en-US',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: Object.values(languageLocales),
  },
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/main.scss'],
  components: [{ path: '~/components', pathPrefix: false }],
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIds: false,
                },
              },
            },
          ],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/colors.scss" as *;',
        },
      },
    },
  },
})
