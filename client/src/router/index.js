import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends.vue'
import Login from '../views/Login.vue'
import Exercises from '../views/Exercises.vue'
import Signup from '../views/Signup.vue'
import Card from '../components/Card.vue'
import Feed from '../views/Feed.vue'
import session from '../models/session'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home,
      component: () => import('../views/Home.vue'),
      beforeEnter: checkSessionUser },
  { path: '/about', name: 'About', component: () => import('../views/About.vue')},
  { path: '/friends', name: 'Friends', component: Friends,
      component: () => import('../views/Friends.vue'),
      beforeEnter: checkSessionUser },
  { path: '/login', name: 'Login', component: Login },
  { path: '/exercises', name: 'Exercises', component: Exercises },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/card', name: 'Card', component: Card },
  { path: '/feed', name: 'Feed', component: Feed,
      component: () => import('../views/Feed.vue'),
      beforeEnter: checkSessionUser },
  { path: '/admin', name: 'Admin', component: Admin,
      component: () => import('../views/Admin.vue'),
      beforeEnter: checkSessionUser }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function checkSessionUser (to, from, next) {
  if(session.user){
    next();
  }else{
    next('Login');
  }
}