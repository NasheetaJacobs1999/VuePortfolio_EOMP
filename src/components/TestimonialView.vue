<template>
  <section id="testimonial" class="testimonial">
    <div class="container mt-5 text-center">
      <div class="row justify-content-center align-items-start vh-100 testimonial-content">
          <h3 class="sectHeader">Testimonials</h3>
        <div class="col">
          <div class="card mb-3" v-for="item in testimonials" :key="item.ID">
            <div class="row g-0">
              <div class="col-md-4 colI line">
                <img :src="item.Image" class="img-fluid testImage" :alt="item.Name" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{{ item.Name }}</h3>
                  <p class="card-text test">
                   "{{ item.Content }}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials
    }
  },
  mounted() {
    this.$store.dispatch("getTestimonials")
  },
};
</script>

<style scoped>
.test {
  border-radius: 10px;
  border: none;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  background-color: rgba(186, 205, 146, 1);
  padding: 10px;
}
.testImage {
  width: 10rem;
  border-radius: 100%;
  padding-bottom: 10%;
}

@media (max-width: 1000px) {
  .card-text {
    height: max-content;
  }
}

@media (max-width: 992px) {
  .img-fluid {
    width: 220px !important;
  }
}

@media (max-width: 767.5px) {
  .line {
    border: 0;
  }

  .img-fluid {
    width: 100%;
  }
}
@media (max-width: 568px) {
  button:hover {
    transition: none;
    transform: none;
  }
  .card:hover {
    transform: none;
    transition: none;
  }
}
</style>