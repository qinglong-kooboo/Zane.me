module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: `Zane.me`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Zane.me` }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/linkicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#0088f5'
   },

  transition: {
    name: 'module'
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: './assets/sass/app.scss',
      lang: 'sass'
    }
  ],

  styleResources: {
    scss: './assets/sass/init.scss'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/swiper' },
    { src: '~plugins/mock/index' },
    { src: '~plugins/gravatar' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // Object.assign(config.resolve.alias, {
        //   'components': path.resolve(__dirname, 'components')
        //  })
      }
      config.module.rules.push({
        test: /\.scss/,
        oneOf: [
          { use: ['import-glob-loader2'] }
        ],
        enforce: 'pre'
      })
    }
  }
}
