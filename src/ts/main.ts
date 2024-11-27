import '@/assets/css/reset.css'
import '@/assets/css/main.scss'

import { createApp, type Directive, type DirectiveBinding, type VNode } from 'vue'

import App from '@/App.vue'
import router from '@/router'

import { VuePrlxDirective } from 'vue3-prlx'

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

// Appear directive
// Author: Michael Verschoof
// https://github.com/michaelverschoof/medium-examples/tree/animated-component-when-scrolling-into-view
const appear: Directive = {
  beforeMount(element: HTMLElement) {
    element.style.visibility = 'hidden'
  },
  updated(element: HTMLElement, binding: DirectiveBinding<boolean>, node: VNode) {
    if (!binding.value === !binding.oldValue || null === node.transition) {
      return
    }

    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden'
      })
      return
    }

    node.transition.beforeEnter(element)
    element.style.visibility = ''
    node.transition.enter(element)
  }
}

app.use(router)
app.directive('appear', appear)
app.directive('prlx', VuePrlxDirective)

app.mount('#app')
