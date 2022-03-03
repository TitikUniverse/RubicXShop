import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/shop',
    component: () => import('@/views/Shop.vue') 
  },
  {
    path: '/orders',
    component: () => import('@/views/Orders.vue')
  },
  {
    path: '/add',
    component: () => import('@/views/AddNewProduct.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/admincoin',
    component: () => import('@/views/AdminCoin.vue')
  },
  {
    path: '/applications',
    component: () => import('@/views/Applications.vue')
  },
  {
    path: '/forgot',
    component: () => import('@/views/ForgotPassword.vue')
  },
  {
    path: '/reg',
    component: () => import('@/views/Registration.vue')
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})


export default router
