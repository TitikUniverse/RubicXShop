import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/auth"
  },
  {
    path: '/auth',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin.vue')
  },
  {
    path: '/shop',
    component: () => import('@/views/Shop.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
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
  }
  
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})


export default router
