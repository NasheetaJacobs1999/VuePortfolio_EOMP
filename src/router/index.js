import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/ResumeView.vue'
import Projects from '../views/ProjectsView.vue'
import Testimonials from '../views/TestimonialsView.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects },
  { path: '/testimonials', component: Testimonials },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
