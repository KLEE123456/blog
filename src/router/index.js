import Vue from 'vue'
import VueRouter from 'vue-router'
import BlAdd from '../components/BlAdd'
import BlShow from '../components/BlShow'
import Login from '../components/Login.vue'
import BlHome from "../components/BlHome.vue"
import UserReg from "../components/UserReg.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:"/register",
    component:UserReg
  },
  {
    path:"/home",
    component:BlHome,
    children:[
      {
        path:"/",
        component:BlShow
      },
      {
        path:"/show",
        component:BlShow
      },
      {
        path:"/add",
        component:BlAdd
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
  // linkActiveClass:""
})
export default router
