<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="card-container">
      <Card v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </Card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        { id: 1, title: 'Project 1', description: 'Description of project 1' },
        { id: 2, title: 'Project 2', description: 'Description of project 2' },
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 2rem;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
