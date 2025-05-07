// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { languageLocales } from './constants'

export default defineNuxtConfig({
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Calendar page generated on demand, revalidates in background, cached until API response changes
    '/calendar': { swr: true },
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
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
            'Secure your smart contracts and dApps with the Wit/Oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
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
            'Secure your smart contracts and dApps with the Wit/Oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
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
            'Secure your smart contracts and dApps with the Wit/Oracle: powered by Proof-of-Stake, and offering unrivalled reliability and censorship resistance.',
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
      link: [
        {
          rel: 'preload stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          as: 'style',
          type: 'text/css',
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
      script: [
        {
          textContent: `
            <!-- Twitter conversion tracking base code -->
            <script>
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','ovifm');
            </script>
            <!-- End Twitter conversion tracking base code -->`,
          type: 'text/javascript',
        },
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
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    'nuxt-security',
    'nuxt-gtag',
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        'form-action': ["'self'", "https://*.list-manage.com"],
      },
    },
  },
  gtag: {
    id: 'GTM-ND5BQG9',
  },
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
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: Object.values(languageLocales),
  },
  css: ['~/assets/styles/main.scss', '~/assets/styles/tailwind.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  compatibilityDate: '2024-12-17',
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
          api: 'modern-compiler',
        },
      },
    },
  },
})
