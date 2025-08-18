import { createRouter, createWebHistory } from 'vue-router'

import About from '@/views/About.vue'
import Publication from '@/views/Publication.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/publication',
    component: Publication
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})