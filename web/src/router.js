import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/public', component: () => import('./views/Public.vue') },
    { path: '/protected', component: () => import('./views/Protected.vue') },
    { path: '/login', component: () => import('./views/Login.vue') }
  ]
})
