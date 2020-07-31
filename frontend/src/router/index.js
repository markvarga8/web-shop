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
    meta: { title: 'Sign In' },
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { title: 'registration' },
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/registration/verify',
    name: 'Verification',
    meta: { title: 'Verification' },
    component: () => import('../views/Verification.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
