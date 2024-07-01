<template>
  <section id="resume" class="resume">
    <h2>Resume</h2>
    <h3>Education</h3>
    <ul>
      <li v-for="item in education" :key="item.Id">
        {{ item.schoolName }} ({{ item.Year }})
      </li>
    </ul>
    <h3>Skills</h3>
    <ul>
      <li v-for="skill in skills" :key="skill.Id">
        {{ skill.skillName }} - {{ skill.Level }}
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ResumeView',
  computed: {
    ...mapState(['education', 'skills'])
  },
  created() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchSkills');
  }
}
</script>

<style scoped>
.resume {
  padding: 2rem;
}
</style>
