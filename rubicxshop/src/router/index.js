import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
  path: '/test',
  component: () => import('@/views/Test.vue') 
  },
  {
  path: '/history',
  component: () => import('@/views/History.vue')
  },
  {
    path: '/orders',
    component: () => import('@/views/Orders.vue')
  },
  {
    path: '/productshoplist',
    component: () => import('@/views/ProductShopList.vue')
  }
  
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
