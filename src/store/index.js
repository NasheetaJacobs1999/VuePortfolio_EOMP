import { createStore } from "vuex";
import axios from 'axios'
const dataUrl = "https://nasheetajacobs1999.github.io/jsonData/data/";

export default createStore({
  state: {
    skills: [],
    education: [],
    experience: [],
    projects: [],
    testimonials: [],
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
    async getTestimonials(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setTestimonials', res.data.records.testimonials)
      })
    },
    async getSkills(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setSkills', res.data.records.skills)
      })
    },
    async getEducation(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setEducation', res.data.records.education)
        
      })
    },
    async getExperience(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setExperience', res.data.records.experience)
      })
    },
    async getProjects(context){
      await axios.get(dataUrl)
      .then (res => {
        context.commit('setProjects', res.data.records.projects)
        
      })
    },
  },
  modules: {},
});