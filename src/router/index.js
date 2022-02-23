import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/Tarefas.vue'
import HomeAbout from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/about',
    name: 'about',
    component: HomeAbout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
