import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('@/views/Code.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/Music.vue')
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import('@/views/Graphics.vue')
    },
    // {
    //   path: '/web',
    //   name: 'web',
    //   component: () => import('@/views/Web.vue')
    // },
    {
      path: '/film-video',
      name: 'film-video',
      component: () => import('@/views/FilmVideo.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/Privacy.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
