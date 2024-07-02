import { createStore } from "vuex";
import axios from 'axios'
const dataUrl = "https://nasheetajacobs1999.github.io/jsonData/data/";

export default createStore({
  state: {
    skills: null,
    education: null,
    experience: null,
    projects: [],
    testimonials: null,
    aboutMe: [],
  },
  getters: {},
  mutations: {
    setSkills(state, value) {
      state.skills = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setExperience(state, value) {
      state.experience = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setAboutMe(state, value){
      state.aboutMe = value
    }
  },

  actions: {
    async getAboutMe(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setAboutMe', res.data.aboutMe)
      })
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let { skills } = await res.json();
        if (skills) {
          context.commit("setSkills", skills);
        } else {
          context.commit("setMessage", "No skills");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let { education } = await res.json();
        if (education) {
          context.commit("setEducation", education);
        } else {
          context.commit("setMessage", "No education");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },
    async fetchExperience(context) {
      try {
        let res = await fetch(dataUrl);
        let { experience } = await res.json();
        if (experience) {
          context.commit("setExperience", experience);
        } else {
          context.commit("setMessage", "No experience");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let { projects } = await res.json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          context.commit("setMessage", "No projects");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let { testimonials } = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          context.commit("setMessage", "No testimonials");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },
  },
  modules: {},
});