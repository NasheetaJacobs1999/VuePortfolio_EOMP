<template>
  <div class="about-page">
    <div class="image-container">
      <img 
        src="https://nasheetajacobs1999.github.io/allimages/images/PortAboutBG.jpg" 
        alt="Background Image" 
        class="background-image"
      >
      <img 
        src="https://nasheetajacobs1999.github.io/allimages/images/Untitled design (1).png" 
        alt="Overlay Image" 
        class="overlay-image"
      >
    </div>
    
    <div class="about-objectives-container">
      <div class="about-me">
        <h1>About Me</h1>
        <p>
          I am a dedicated and results-oriented professional. I have developed a deep understanding of web-developing through self-learning. My career has been marked by a consistent track record of exceeding goals and delivering exceptional results. I am passionate about everything I do, which means I am willing to go the extra mile for every task I am given, continuously seeking opportunities to expand my knowledge and keep on track. As a team-oriented individual with strong communication abilities, I excel in collaborating across teams and fostering positive relationships. I am now eager to bring my expertise and commitment to excellence to a new challenge in web-development. I enjoy going outdoors, interacting with friends and family, reading books, playing games, and coding in my spare time.
        </p>
      </div>
      <div class="my-objectives">
        <h1>My Objectives</h1>
        <p>
          My objective is to leverage my technical proficiency and creative tendencies to craft innovative digital solutions that exceed client expectations and drive business growth. My goal is to achieve a strong foundation in front-end and back-end technologies, including proficiency in languages such as HTML, CSS, JavaScript, and frameworks like React and Node.js. My goal is to not only meet project objectives but to also contribute to a culture of continuous improvement and excellence within the industry.
        </p> 
      </div>
    </div>
    <div class="softSkills" data-aos="fade-left" data-aos-duration="1000">
      <h1>Soft Skills</h1>
      <div class="soft-skills-container">
        <ul class="soft-skills-list">
          <li><font-awesome-icon :icon="['fas', 'lightbulb']" /> Problem-solving</li>
          <li><font-awesome-icon :icon="['fas', 'comments']" /> Effective communication</li>
          <li><font-awesome-icon :icon="['fas', 'users']" /> Team collaboration</li>
          <li><font-awesome-icon :icon="['fas', 'sync-alt']" /> Adaptability</li>
          <li><font-awesome-icon :icon="['fas', 'clock']" /> Time management</li>
          <li><font-awesome-icon :icon="['fas', 'brain']" /> Critical thinking</li>
        </ul>
      </div>
    </div>

    <div class="second text-center" data-aos="fade-left" data-aos-duration="1000">
  <h4 class="mb-3">SKILLS</h4>
  <div
    class="row justify-content-center rowS row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-2 techSkills"
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

          <div class="tech" data-aos="fade-left" data-aos-duration="1000">
            <h1>Tech-related Hobbies & Interests</h1>
      <div class="tech-hobbies-container">
        <ul class="tech-hobbies-list">
          <li><font-awesome-icon :icon="['fas', 'gamepad']" /> Interest in gaming applications</li>
          <li><font-awesome-icon :icon="['fas', 'code']" /> Developing web applications and learning new programming languages</li>
          <li><font-awesome-icon :icon="['fas', 'palette']" /> Experimenting with user interface design</li>
        </ul>
      </div>
          </div>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComp.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLightbulb, faComments, faUsers, faSyncAlt, faClock, faBrain, faGamepad, faDesktop, faPlay, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb, faComments, faUsers, faSyncAlt, faClock, faBrain, faGamepad, faDesktop, faPlay, faCode, faPalette);

export default {
  name: 'AboutPage',
  components: {
    FontAwesomeIcon,
    Spinner,
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getSkills");
  },
};
</script>

<style scoped>
.about-page {
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.about-page h1 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: center;
}

.about-page p {
  font-size: 18px;
  line-height: 1.8;
  border: 1px solid #099a5b; 
  border-radius: 5px;
  padding: 10px;
}

.about-objectives-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about-me, .my-objectives {
  flex-basis: 45%;
  margin: 20px;
}

.about-me h1, .my-objectives h1 {
  margin-top: 0;
}

.image-container {
  position: relative;
  height: 350px;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
}

.overlay-image {
  position: absolute;
  top: 60%; 
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px; 
  height: 250px;
  object-fit: cover;
  z-index: 1;
}

.softSkills {
  margin-top: 2rem;
}

.soft-skills-container {
  border: 1px solid #099a5b;
  padding: 10px;
  border-radius: 8px;
  /* margin-bottom: 20px; */
}

.soft-skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.soft-skills-list li {
  display: flex;
  align-items: center;
  /* margin-bottom: 15px; */
  font-size: 18px;
  color: #ffffff;
}

.soft-skills-list font-awesome-icon {
  margin-right: 10px;
  font-size: 24px;
  color: #099a5b;
}

.soft-skills-list li:hover {
  color: #099a5b;
}

.second {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  background-image: linear-gradient(to bottom, #032B28, #44906F);
  outline: 2px solid #021117;
  border-radius: 1rem;
}

.skills{
  width: 100px ;
}

.rowS {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.second .rowS {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* gap: 10px; */
}


.techSkills {
  width: 60%;
  display: flex;
  flex-direction: column;
}

/* Tech Hobbies Styling */

.tech {
  margin-top: 2rem;
}
.tech-hobbies-container {
  border: 1px solid #099a5b;
  padding: 20px;
  border-radius: 8px;
}

.tech-hobbies-list {
  list-style: none;
  padding: 0;
}

.tech-hobbies-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  color: #ffffff;
}

.tech-hobbies-list font-awesome-icon {
  margin-right: 10px;
  font-size: 24px;
  /* color: #e08a1e; */
}

.tech-hobbies-list li:hover {
  color: #099a5b;
}
</style>