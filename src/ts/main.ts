import '@/assets/css/reset.css'
import '@/assets/css/main.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

// Directives
import { VuePrlxDirective } from 'vue3-prlx'
import { LrLayout } from './customDirectives'

// Animations
import 'animate.css'

const app = createApp(App)

// Get URL and decide name

const url = new URL(window.location.href)
const urlParts = url.hostname.split('.')
const noPicSubdomain = 'nopic'
let mainUrl: string
let noPic: boolean = false

if (urlParts.length > 2) {
  mainUrl = urlParts[urlParts.length - 2]
  if (urlParts[0] == noPicSubdomain) {
    noPic = true
  }
} else {
  mainUrl = urlParts[0]
}

// set no pic switch
app.provide('noPic', noPic)

switch (mainUrl) {
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
app.directive('prlx', VuePrlxDirective)
app.directive('lr-layout', LrLayout)

app.mount('#app')
