export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vineeth Asok Kumar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Vineeth Asok Kumar\'s Portfolio' },
      { hid: 'description', name: 'description', content: 'Vineeth Asok Kumar\'s Portfolio. Vineeth Asok Kumar is a polyglot developer who yearns to keep uptodate and get to know programming concepts more' },
      { name: 'format-detection', content: 'telephone=no' },
      
      {
        hid: 'description',
        name: 'description',
        content:
         'Vineeth Asok Kumar\'s Portfolio. Vineeth Asok Kumar is a polyglot developer who yearns to keep uptodate and get to know programming concepts more'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vineeth Asok Kumar\'s Portfolio',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:'Vineeth Asok Kumar\'s Portfolio. Vineeth Asok Kumar is a polyglot developer who yearns to keep uptodate and get to know programming concepts more',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/website.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Vineeth Asok Kumar\'s Portfolio',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vineeth Asok Kumar\'s Portfolio',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:'Vineeth Asok Kumar\'s Portfolio. Vineeth Asok Kumar is a polyglot developer who yearns to keep uptodate and get to know programming concepts more',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/website.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/website.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Vineeth Asok Kumar\'s Portfolio',
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://vineethasok.com",
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css' }
    ],
    script: [
      { hid: 'tawk', src: 'https://embed.tawk.to/618fd1746bb0760a494274f8/1fkcskbug', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/animateOnScroll.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: '~/components/LoadingBar.vue',
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
}
