export default {
    head: {
      title: 'Mango-Clone',
      router: {
        base: '//'
      },
      htmlAttrs: {
        lang: 'en',
      },
      script:[
        {
          
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/style/styles.css',
    '~/assets/style/custom.css',
    '~/assets/style/form.css',
    '~/assets/style/iris-button.css',
    '~/assets/style/styles2.css',
    '~/assets/style/styles3.css',
    '~/assets/style/styles7.css'],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
   
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      
    ],
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      
    },
  
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
   
  }