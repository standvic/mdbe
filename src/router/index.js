import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import TV from '../pages/TV'
import People from '../pages/People'
import Details from '../pages/Details'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'movie',
    path: '/movie',
    component: Movies
  },
  {
    name: 'movieDetails',
    path: '/movie/:id',
    component: Details
  },
  {
    name: 'tv',
    path: '/tv',
    component: TV
  },
  {
    name: 'tvDetails',
    path: '/tv/:id',
    component: Details
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
