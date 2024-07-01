import { createStore } from 'vuex'

export default createStore({
  state: {
    education: [],
    skills: [],
  },
  mutations: {
    SET_EDUCATION(state, education) {
      state.education = education;
    },
    SET_SKILLS(state, skills) {
      state.skills = skills;
    }
  },
  actions: {
    async fetchEducation({ commit }) {
      try {
        const response = await fetch('https://github.com/yourusername/yourrepo/raw/main/path/to/education.json');
        const data = await response.json();
        commit('SET_EDUCATION', data.education);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await fetch('https://github.com/yourusername/yourrepo/raw/main/path/to/skills.json');
        const data = await response.json();
        commit('SET_SKILLS', data.skills);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    }
  }
})
