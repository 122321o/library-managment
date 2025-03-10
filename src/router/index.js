import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    //user
  {
    path: '/user',
    name: 'List',
    component: () => import('@/views/user/List.vue')
  },
  {
    path: '/addUser',
    name: 'Add',
    component: () => import('@/views/user/Add.vue')
  },
  {
    path: '/editUser',
    name: 'Edit',
    component: () => import('@/views/user/Edit.vue')
  },
    //admin
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/List.vue')
  },
  {
    path: '/addAdmin',
    name: 'AddAdmin',
    component: () => import('@/views/admin/Add.vue')
  },
  {
    path: '/editAdmin',
    name: 'EditAdmin',
    component: () => import('@/views/admin/Edit.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
