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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
