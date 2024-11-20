import '../assets/css/reset.css'
import '../assets/css/main.css'

import { createApp } from 'vue'

import App from '../App.vue'
import router from '../router'

const app = createApp(App)

// Get URL and decide name

const url = new URL(window.location.href)
const urlParts = url.hostname.split('.')
switch (urlParts.length > 2 ? urlParts[urlParts.length - 2] : urlParts[0]) {
  case 'nomohornung': {
    app.provide('firstName', 'nomo')
    app.provide('firstNameOfficial', 'Tilman (Nomo)')
    document.title = 'Nomo Hornung'
    break
  }
  default: {
    app.provide('firstName', 'tilman')
    app.provide('firstNameOfficial', 'Tilman')
    break
  }
}

app.use(router)

app.mount('#app')
