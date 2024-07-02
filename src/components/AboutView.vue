<template>
  <section id="about" class="about">
    <div class="container pt-5" v-for="value in $store.state.aboutMe" :key="value">
      <div class="container" data-aos="fade-right" >
        <div class="row mt-3">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 colI line">
                  <img
                    src="https://nasheetajacobs1999.github.io/allimages/images/About.jpg"
                    class="img-fluid"
                    alt="Nasheeta Jacobs"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{value.name}}</h5>
                    <p class="card-text">
                      {{value.text}}
                    </p>
                    <h3 class="card-title">{{value.heading}}</h3>
                    <p class="card-text">{{value.info}}</p>
                    <div class="links">
                      <a
                        href=""
                        target="_blank"
                        ><button class="btn1">
                          <i
                            class="fa-solid fa-file-pdf fa-2xl"
                            style="color: #84a7a1"
                          ></i
                          >View My CV
                        </button></a
                      >
                      <router-link to="/resume"
                        ><button class="btn1">
                          <i
                            class="fa-solid fa-paper-plane fa-2xl"
                            style="color: #84a7a1"
                          ></i
                          >View My Resume
                        </button></router-link
                      >
                    </div>
                  </div>
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
  computed:{
      getAboutMe(){
      return this.$store.dispatch("getAboutMe")
    },
  },
  mounted(){
    this.getAboutMe
  }
};
</script>

<style scoped>
.about {
  min-height: 85vh;
}
.colI {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #141c27;
  color: #84a7a1;
  border-radius: 2rem;
}

.card:hover {
  transform: scale(1);
  transition: ease-in 0.2s;
}

.card-body {
  min-height: 20rem !important;
}

img {
  height: 20rem;
}

.line {
  border-right: 1px solid #84a7a1;
}

.card-title {
  text-decoration: underline;
  font-size: 2rem;
  height: 3.5rem;
}

.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  line-height: 2rem;
}

button {
  color: #84a7a1;
  background-color: #09101a;
  border-radius: 1rem;
  padding: 0.6rem;
  border: 0;
  margin: 0.7rem;
  width: 13rem;
}

button:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

.links {
  display: flex;
}

@media (max-width: 1000px) {
  button {
    padding: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    width: 10rem;
  }

  .card-title {
  text-decoration: underline;
  font-size: 2rem;
  height: 4rem;
}

.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
  line-height: 2rem;
}

}

@media (max-width: 768px) {

  .colI {
    height: 19rem;
  }

  .line {
    border: 0;
  }
  .card {
    height: max-content;
  }
  .card-text {
    height: max-content;
  }

  img {
    border-bottom: 1px solid #84a7a1;
  }

  .links {
    justify-content: space-between;
  }
  
}

@media (max-width: 530px) {

  button {
    padding: 0.4rem;
    margin: 0rem;
    font-size: 0.6rem;
    margin-bottom: 1rem;
    width: 6.5rem;
  }

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