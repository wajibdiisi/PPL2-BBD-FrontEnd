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
    path:'/profile/edit',
    name: 'EditProfile',
    component: () => import('../views/EdProfile.vue'),
    meta: {
      requiresAuth: true,
      title : 'Edit Profile - Mytour'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      guest: true,
      title : 'Login - Mytour'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Daftar.vue'),
    meta: {
      guest : true,
      title : 'Register - Mytour'
    }
  },
  {
    path: '/wisata',
    name: 'Wisata',
    component: () => import('../views/Wisata.vue'),
    meta : {
      title : 'Wisata - Mytour'
    }
  },
  {
    path: '/wisata/:slug',
    name: 'WisataDetails',
    component: () => import('../views/Wisatadetails.vue')
  },
  {
    path: '/404',
    name: '404NotFound',
    component: () => import('../views/404.vue'),
    meta : {
      title : '404 Page Not Found - Mytour'
    }
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/uploadmoment',
    name: 'UpMoment',
    component: () => import('../views/UpMoment.vue'),
    meta : {
      title : 'Upload Moment - Mytour',
      requiresAuth: true
    }
  },
  {
    path: '/editmoment/:id',
    name: 'EdMoment',
    component: () => import('../views/EdMoment.vue'),
    meta : {
      title : 'Edit Moment - Mytour',
      requiresAuth: true
    }
  },
  {
    path: '/aboutus',
    name: 'Abousus',
    component: () => import('../views/aboutus.vue'),
    meta : {
      title : 'About Us - Mytour',
      requiresAuth: true
    }
  },
  {
    path: '/planner',
    name: 'Planner',
    component: () => import('../views/planner.vue'),
    meta:{
      requiresAuth : true,
      title : 'Planner - Mytour'
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta:{
      requiresAuth : true,
      title : 'Help - Mytour'
    }
  },
  {
    path: '/planner/:id',
    name: 'PlannerDetails',
    component: () => import('../views/plannerdetails.vue'),
    meta:{
      requiresAuth : true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue'),
      meta: {
        notFound: true,
        title : 'Page Not Found'
      }  
  }
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
