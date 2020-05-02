import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: (to, from, next) => {
      let currentUser = window.localStorage.getItem('access_token')
      if(currentUser) {
        next()
      } else {
        next({ path: '/login'})
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      let currentUser = window.localStorage.getItem('access_token')
      if(currentUser) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      let currentUser = window.localStorage.getItem('access_token')
      if(currentUser) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
