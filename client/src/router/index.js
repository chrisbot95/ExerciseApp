import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends.vue'
import Login from '../views/Login.vue'
import Exercises from '../views/Exercises.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue')},
  { path: '/friends', name: 'Friends', component: Friends },
  { path: '/login', name: 'Login', component: Login },
  { path: '/exercises', name: 'Exercises', component: Exercises },
  { path: '/signup', name: 'Signup', component: Signup }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
