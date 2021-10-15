import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { store } from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      guest: true
    }
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
  {
    path: '/test',
    name: 'WisataDetails',
    component: () => import('../views/Wisatadetails.vue')
  },
  {
    path: '/404',
    name: '404NotFound',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn && store.getters.user) {
      next()
      return
    }
    console.log(store.getters.user)
    next('/login')
  }


  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  }

  next()
})

export default router
