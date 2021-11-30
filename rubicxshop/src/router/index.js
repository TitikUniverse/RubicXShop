import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/history',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/orders',
    component: () => import('@/views/Orders.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  }
  
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
