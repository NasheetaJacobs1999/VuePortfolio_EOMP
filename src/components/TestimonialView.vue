<template>
  <section id="testimonial" class="testimonial">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="card mb-3" v-for="item in testimonials" :key="item.ID" data-aos="fade-right">
            <div class="row g-0">
              <div class="col-md-4 colI line">
                <img :src="item.Image" class="img-fluid" :alt="item.Name" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.Name }}</h5>
                  <p class="card-text">
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
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.colI {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
}

.line {
  border-right: 1px solid #84a7a1;
}

.card {
  background-color: #141c27;
  color: #84a7a1;
}

.card:hover {
  transform: scale(1.01);
  transition: ease-out 0.2s;
}

img {
  height: 14rem;
  border-radius: 1rem;
}

.card-title {
  text-decoration: underline;
}

.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
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