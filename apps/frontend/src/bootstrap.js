import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import mitt from 'mitt'
// import 'primevue/resources/themes/viva-light/theme.css'
import './assets/scss/theme.css'
(async () => {
  const app = createApp(App)
  const emitter = mitt()
  app
    .use(router)
    .use(PrimeVue)

  app.provide('emitter', emitter)
  app.mount('#app')
})()
