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
  {
    path: '/today',
    name: 'today',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodayView.vue')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
