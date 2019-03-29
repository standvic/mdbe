import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Movies from '../pages/Movies'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/movies',
    component: Movies
  }
]

export default new Router({
  routes
})
