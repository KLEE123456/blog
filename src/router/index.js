import Vue from 'vue'
import VueRouter from 'vue-router'
import BlAdd from '../components/BlAdd'
import BlShow from '../components/BlShow'
Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    component: BlAdd
  },
  {
    path: '/show',
    component: BlShow
  },
  {
    path: '/',
    component: BlShow
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
  // linkActiveClass:""
})
export default router
