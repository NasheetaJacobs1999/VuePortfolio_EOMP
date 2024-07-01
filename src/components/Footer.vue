<template>
  <footer>
    <p>&copy; {{ currentYear }} Your Name. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}
</style>
