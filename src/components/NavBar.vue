<template>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#resume">Resume</a>
    <a href="#projects">Projects</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
</style>
