<template>
  <section id="testimonials" class="testimonials">
    <h2>Testimonials</h2>
    <div class="card-container">
      <Card v-for="testimonial in testimonials" :key="testimonial.id">
        <p>{{ testimonial.text }}</p>
        <p><strong>{{ testimonial.author }}</strong></p>
      </Card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsView',
  data() {
    return {
      testimonials: [
        { id: 1, text: 'Testimonial 1', author: 'Author 1' },
        { id: 2, text: 'Testimonial 2', author: 'Author 2' },
        { id: 3, text: 'Testimonial 3', author: 'Author 3' },
        { id: 4, text: 'Testimonial 4', author: 'Author 4' },
        { id: 5, text: 'Testimonial 5', author: 'Author 5' },
      ]
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 2rem;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
