import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
// import 'primevue/resources/themes/viva-light/theme.css'
import './assets/scss/theme.css'

(async () => {
  const app = createApp(App)
  app
    .use(PrimeVue)
    .mount('#app')
})()
