import tailwindcss from '@tailwindcss/vite'

const oneYear = 'public, max-age=31536000, immutable'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: false
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fa', dir: 'rtl' },
      link: [
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/Dana/dana-bold.woff2', crossorigin: 'anonymous' }
      ]
    }
  },

  nitro: {
    // gzip / brotli versions of the static files are created at build time
    compressPublicAssets: true
  },

  // images and fonts never change under the same name: the browser can keep them for a year
  routeRules: {
    '/images/**': { headers: { 'cache-control': oneYear } },
    '/fonts/**': { headers: { 'cache-control': oneYear } }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
