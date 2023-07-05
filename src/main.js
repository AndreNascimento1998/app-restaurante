import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import '@mdi/font/css/materialdesignicons.css';
import VueTheMask from 'vue-the-mask'

loadFonts()

const app = createApp(App)
  app.use(vuetify)
  app.use(router)
  app.use(createPinia())
  app.use(VueTheMask)
  app.mount('#app')
