import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import TV from '../pages/TV'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '*',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'movies',
    path: '/movies',
    component: Movies
  },
  {
    name: 'tvs',
    path: '/tvs',
    component: TV
  }
]

export default new Router({
  routes
})
