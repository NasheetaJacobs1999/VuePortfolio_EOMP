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
                <li class="lis"><div class="line"></div></li>
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

          </div>
          <div class="col colSpinner" v-else>
            <Spinner />
          </div>
          <div class="second" data-aos="fade-left" data-aos-duration="1000">
            <h4 class="text-center mb-3">SKILLS</h4>
            <div
              class="row rowS row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-2"
              v-if="skills"
            >
              <div class="col mb-4" v-for="item in skills" :key="item.ID">
                <i :class="item.icon" style="color: #84a7a1; font-size: 7rem;"></i>
                <img :src="item.skill" alt="" srcset="" class="skills">
               
              </div>
            </div>
            <div class="row rowS" v-else>
              <div class="col">
                <Spinner />
              </div>
            </div>
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
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getEducation");
    this.$store.dispatch("getExperience");
    this.$store.dispatch("getSkills");
  },
};
</script>

<style scoped>
.resume {
  height: 100vh;
}
.skills{
  width: 150px ;
}
.colE {
  display: flex;
  flex-direction: column;
}

.colSpinner {
  height: 28vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.first {
  width: 40%;
  border-right: 1px solid #84a7a1;
}

.second {
  width: 60%;
  display: flex;
  flex-direction: column;
}

h4 {
  margin-top: 2.5rem;
  text-decoration: underline;
  float: left;
  color: black;
}

.lis {
  list-style: none;
  display: flex;
  align-items: center;
  width: 80%;
}

ul {
  list-style: none;
}

.bullet::before {
  content: "\2022";
  padding: 0.3rem;
  width: 1em;
  margin-left: -1em;
  color: #64ffda;
}

.line {
  width: 100%;
  border-bottom: 2px solid #84a7a1;
  margin-top: 2.5rem;
}
.desc {
  float: left;
}

.none {
  list-style: none;
}

.rowF {
  display: flex;
  flex-direction: row;
}
.rowS {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.description {
  display: block;
  height: 70px;
  overflow: auto;
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

.mastery {
  font-size: 0.9rem;
  margin-top: 0;
}

@media (max-width: 1200px) {
  .resume {
    height: max-content;
  }
}
@media (max-width: 1000px) {
  .resume {
    height: max-content;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .first {
    width: 40%;
  }

  .second {
    width: 60%;
    height: max-content;
  }
}
@media (max-width: 768px) {

  .first {
    width: 100%;
    height: max-content;
    border: none;
  }

  .rowS {
    flex-wrap: wrap;
  }

  .second {
    width: 100%;
    height: max-content;
  }

  .colE {
    height: max-content;
    display: flex;
    flex-direction: column;
  }
}
</style>