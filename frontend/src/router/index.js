import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    meta: { title: 'Bejelentkezés' },
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { title: 'Regisztráció' },
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/registration/verify',
    name: 'Verification',
    meta: { title: 'Aktiválás' },
    component: () => import('../views/Verification.vue')
  },
  {
    path: '/product',
    name: 'Product',
    meta: { title: 'Termékek' },
    component: () => import('../views/Product.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: { title: 'Keresés' },
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
