<template>
  <section id="projects" class="projects" v-if="$store.state.projects.length > 0" >
    <div class="container" >
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div
          class="col g-4 mb-4"
          v-for="item in projects"
          :key="item.ID"
          data-aos="fade-up"
        >
          <div class="card">
            <div class="image mb-2">
              <img
                :src="item.Image"
                class="card-img-top"
                :alt="item.Title"
                loading="lazy"
              />
            </div>
            <div class="line"></div>
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.Title }}</h5>
              <p class="card-text">
                {{ item.Description }}
              </p>
              <div class="links">
                <a :href="item.GitHub" class="card-link" target="_blank"
                  ><button>GitHub</button></a
                >
                <a :href="item.Netlify" class="card-link" target="_blank"
                  ><button>Live Server</button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section v-else>
    <Spinner/>
  </section>
</template>
<script>
  import Spinner from "@/components/SpinnerComp.vue"
export default {
  components:{
    Spinner
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style scoped>
.projects {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.col {
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  background-color: #141c27;
  color: #84a7a1;
  width: 23rem;
  height: 25rem;
  border-radius: 1.5rem;
}

.card:hover {
  transform: scale(1.05);
  transition: ease-in 0.2s;
}

.card-title {
  height: 50px;
  border-bottom: 1px solid #64ffda;
}

.image {
  display: flex;
  justify-content: center;
  background-size: contain;
  margin-top: 1rem;
}

img {
  display: flex;
  justify-content: center;
  height: 140px;
  width: 250px;
  border-radius: 1rem;
}

.card-text {
  height: 72px;
  margin-bottom: 2rem;
  display: flex;
  text-align: center;
  overflow: auto;
}

.links {
  text-align: center;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
}

button {
  background-color: #0a0d12;
  color: #84a7a1;
  border-radius: 1rem;
  padding: 0.3rem;
  border: 0;
  width: 7rem;
}

button:hover {
  background-color: #141c27;
  color: #84a7a1;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

::-webkit-scrollbar {
  width: 1px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #84a7a1;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

@media (max-width: 1500px) {
  .projects {
    height: max-content;
  }
}
@media (max-width: 768px) {
 img {
  width: 230px;
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

  img {
    width: 250px;
  }
}
</style>