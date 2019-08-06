module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js' }
    ],
    // script: [
    //   {src: '/assets/js/bootstrap/bootstrap.min.js'},
    //   {src: '/assets/js/jquery/jquery-2.2.4.min.js'},
    //   {src: '/assets/js/bootstrap/popper.min.js'},
    //   {src: '/assets/js/others/plugins.js'},
    //   {src: '/assets/js/active.js'}
    // ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    // '@/assets/css/bootstrap/bootstrap.min.css',
    '@/assets/css/others/animate.css',
    '@/assets/css/others/font-awesome.min.css',
    '@/assets/css/others/meanmenu.min.css',
    '@/assets/css/others/owl.carousel.min.css',
    '@/assets/css/others/pe-icon-7-stroke.css',
    '@/assets/css/responsive/responsive.css',
    // '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src : '~/plugins/vue-notification.js',ssr : false},
    // {src : '~/plugins/bootstrap/bootstrap.min.js', ssr: false},
    // {src : '~/plugins/bootstrap/popper.min.js', ssr: false},
    // {src : '~/plugins/others/plugins.js' , ssr: false},
    // {src : '~/plugins/active.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor:['vue-notification','jquery'],
    extend(config, ctx) {
    }
  }
}
