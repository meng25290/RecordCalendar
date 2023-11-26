import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'today',
    component: () => import('../views/TodayView.vue')
  },
  {
    path: '/today',
    name: 'today',
    component: () => import('../views/TodayView.vue')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/AllView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/AddView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
