import { createRouter, createWebHistory } from 'vue-router'

import About from '@/views/About.vue'
import Publication from '@/views/Publication.vue'

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/publication',
    component: Publication
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})