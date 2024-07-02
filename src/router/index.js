import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../components/ResumeView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../components/ProjectView.vue')
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: () => import('../components/TestimonialView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router