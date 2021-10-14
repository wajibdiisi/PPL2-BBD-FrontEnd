import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Daftar.vue')
  },
  {
    path: '/wisata',
    name: 'Wisata',
    component: () => import('../views/Wisata.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
