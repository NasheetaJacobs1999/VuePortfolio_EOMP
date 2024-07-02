<template>
  <Navbar/>
  <Spinner/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from "@/components/NavBar"
import Footer from "@/components/FooterComp.vue"
import Spinner from "./components/SpinnerComp.vue"

export default {
  components: {
    Navbar, Footer, Spinner
  }
}
</script>

<style>
#app {
  font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F6F4EB;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #e0d8ae;
  text-decoration: none;
}

nav a:hover {
  color: #09101a;
}

nav a.router-link-exact-active {
  color: #09101a;
}

Footer {
  width: 100%;
}

</style>