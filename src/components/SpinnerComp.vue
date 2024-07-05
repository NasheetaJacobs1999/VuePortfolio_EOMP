<template>
  <div v-if="loader">
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        loader: true,
        data: [],
      };
    },
    mounted() {
      // Fetch data from the provided URL
      fetch('https://nasheetajacobs1999.github.io/jsonData/data/')
        .then(response => response.json())
        .then(data => {
          this.data = data;
          this.loader = false;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.loader = false;
        });
    },
};
</script>

<style scoped></style>
