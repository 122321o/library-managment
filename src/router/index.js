import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter)

const routes = [
    //login
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
    //主页
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/home',
    children:[
        //主页
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/HomeView.vue')
      },
      //user
      {
        path: 'user',
        name: 'List',
        component: () => import('@/views/user/List.vue')
      },
      {
        path: 'addUser',
        name: 'Add',
        component: () => import('@/views/user/Add.vue')
      },
      {
        path: 'editUser',
        name: 'Edit',
        component: () => import('@/views/user/Edit.vue')
      },
      //admin
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/admin/List.vue')
      },
      {
        path: 'addAdmin',
        name: 'AddAdmin',
        component: () => import('@/views/admin/Add.vue')
      },
      {
        path: 'editAdmin',
        name: 'EditAdmin',
        component: () => import('@/views/admin/Edit.vue')
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
