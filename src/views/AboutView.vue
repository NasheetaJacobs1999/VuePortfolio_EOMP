<template>
  <section id="about" class="about">
    <h2>About Me</h2>
    <p>Introduction</p>
    <img src="https://nasheetajacobs1999.github.io/allimages/images/About.jpg" alt="Professional Image">
    <div v-for="about in $store.state.aboutMe" :key="about">
      <p>{{about.name}}</p>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
    
}
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
}
.about img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
