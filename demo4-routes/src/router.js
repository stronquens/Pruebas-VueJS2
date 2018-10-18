import Vue from 'vue'
import Router from 'vue-router'

import auth from './auth'

import Home from './views/Home.vue'

const About = () => import('./views/About.vue')
const User = () => import('./views/User.vue')
const Profile = () => import('./views/Profile.vue')
const Login = () => import('./views/Login.vue')


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import('./views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component:  () => import('./views/User.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('./views/Profile.vue')
      },
      {
        path: 'edit',
        component: () => import('./views/Profile.vue')
      }
    ],
    meta: { requiresAuth: true }
  }
]

const router = new Router({
  routes
})

// Perms sections
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath, error: true, msg: 'Not logued in' }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
