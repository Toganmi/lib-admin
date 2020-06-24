import Vue from 'vue'
import VueRouter from 'vue-router'


// const Login = () => import('../views/login/Login')
const Home = () => import('../views/Home')         //主页
const Login = () => import('../views/Login')       //登录页
const ObstacleMgt = () => import('../views/ObstacleMgt')


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home'
    },
    component: Home,
    children: [
      {
        path: '/obstaclemgt',
        component: ObstacleMgt
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
