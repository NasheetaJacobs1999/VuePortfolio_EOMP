<template>
  <section id="resume" class="resume">
    <div class="container mt-5">
      <div class="container">
        <div class="row rowF">
          <div class="first" data-aos="fade-right" data-aos-duration="1000" v-if="$store.state.education.length > 0">
            <div class="col colE">
              <h4 class="mb-3 mx-4">EDUCATION</h4>
              <ul v-for="item in education" :key="item.ID">
                <li class="bullet">
                  {{ item.title }}
                </li>
                <li class="none">
                  {{ item.year }}
                </li>
                <li class="none">
                  {{ item.description }}
                </li>
              </ul>
            </div>
            <div class="col colE">
              <h4 class="mb-3 mx-4">Experience</h4>
              <div class="accordion mx-auto" id="accordionExample">
                <div class="accordion-item" v-for="item in experience" :key="item.ID">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + item.ID" :aria-expanded="item.ID === 1 ? 'true' : 'false'" :aria-controls="'collapse' + item.ID">
                      {{ item.company }}
                    </button>
                  </h2>
                  <div :id="'collapse' + item.ID" class="accordion-collapse collapse" :class="{ 'show': item.ID === 1 }" aria-labelledby="'heading' + item.ID" data-bs-parent="#accordionExample">
                    <div class="accordion-body text-start">
                      <h6>{{ item.title }}</h6>
                      <ul>
                        <li>{{ item.description }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="links">
              <a
                href="https://drive.google.com/file/d/1pQ3taKL7hkTF-c38CbvXbVUfp69_S4nK/view?usp=drive_link"
                target="_blank"
              >
                <button class="btn btn-primary">
                  <i
                    class="fa-solid fa-file-pdf fa-2xl"
                    style="color: #ffffff"
                  ></i>
                  View My CV
                </button>
              </a>
              <router-link to="/project">
                <button class="btn btn-primary">
                  <i
                    class="fa-solid fa-paper-plane fa-2xl"
                    style="color: #ffffff"
                  ></i>
                  View My Projects
                </button>
              </router-link>
            </div>

          </div>
          <div class="col colSpinner" v-else>
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from "@/components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    education() {
      return this.$store.state.education;
    },
    experience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.$store.dispatch("getEducation");
    this.$store.dispatch("getExperience");
  },
};
</script>

<style scoped>
.resume {
  padding-top: 5rem;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.colE {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: whitesmoke;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.colSpinner {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h4 {
  font-weight: 600;
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  position: relative;
}

h4::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: #099a5b;
  left: 0;
  bottom: -5px;
}

.lis .line {
  width: 100%;
  border-bottom: 2px solid #eeeeee;
  margin-top: 2.5rem;
}

.bullet::before {
  content: "\2022";
  color: #099a5b;
  font-size: 1.2rem;
  margin-right: 0.75rem;
}

ul {
  padding-left: 0;
  margin-top: 0.5rem;
}

ul li {
  font-size: 1rem;
  color: #000000;
}

.accordion-item {
  background: #fff;
  border: none;
  margin-bottom: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.accordion-button {
  font-size: 1.1rem;
  font-weight: 500;
  background-color: transparent;
  color: #000000;
  border: none;
  box-shadow: none;
}

.accordion-body {
  background-color: #fafafa;
  padding: 1rem;
  font-size: 1rem;
  color: #000000;
}

.description {
  display: block;
  height: auto;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}

.mastery {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #099a5b;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: #eeeeee;
}

@media (max-width: 1200px) {
  .resume {
    padding-top: 3rem;
  }

  .colE {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .rowF {
    flex-direction: column;
  }

  .colE {
    width: 100%;
  }

  .accordion-button {
    font-size: 1rem;
  }
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary {
  background-color: #099a5b;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #097c54;
}

.links {
  text-align: center;
}

.links button {
  margin: 10px;
}

</style>