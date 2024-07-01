<template>
  <div id="app">
    <Navbar />
    <main>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import Footer from './components/Footer.vue'
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Resume from './views/ResumeView.vue'
import Projects from './views/ProjectsView.vue'
import Testimonials from './views/TestimonialsView.vue'
import Contact from './views/ContactView.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Home,
    About,
    Resume,
    Projects,
    Testimonials,
    Contact
  }
}
</script>

<style>
</style>
