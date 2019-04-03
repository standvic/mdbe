import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import TV from '../pages/TV'
import People from '../pages/People'

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
  },
  {
    name: 'people',
    path: '/people',
    component: People
  }
]

export default new Router({
  routes
})
