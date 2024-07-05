<template>
  <div class="card">
    <div class="card-header">
  <slot name="cardHeader"></slot>
  </div>
  <div class="card-body">
    <slot name="cardBody"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardComp'
}
</script>

<style scoped>
.card{
  width: 18rem;
}

/* .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
} */
</style>
