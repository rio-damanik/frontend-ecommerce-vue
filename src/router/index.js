import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },             
  {
    path: '/men',
    name: 'men',
    component: () => import('../views/MenView.vue')
  },
  {
    path: '/women',
    name: 'women',
    component: () => import('../views/WomenView.vue')
  },
  {
    path: '/kids',
    name: 'kids',
    component: () => import('../views/KidsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
