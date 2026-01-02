import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Cube Algorithm - Rubik\'s Cube Notation Guide',
      meta: [
        { name: 'description', content: 'Learn Rubik\'s Cube algorithms - OLL, PLL for 3x3 and 4x4 cubes' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0f' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Cube Algorithm',
      short_name: 'CubeAlgo',
      description: 'Rubik\'s Cube Algorithms Guide - OLL & PLL',
      theme_color: '#0a0a0f',
      background_color: '#0a0a0f',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '.',
      icons: [
        {
          src: '/pwa-icon.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/pwa-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/pwa-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any'
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },

    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
