import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/autobiography',
      name: 'autobiography',
      component: () => import('../views/Autobiography.vue')
    },
    {
      path: '/webdesign',
      name: 'webdesign',
      component: () => import('../views/WebDesign.vue')
    }
  ]
})

export default router
