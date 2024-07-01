import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    aboutMe:[],
    
  },
  getters: {
  },
  mutations: {
    setAboutMe(state, about){
      state.aboutMe = about
    }
  },
  actions: {
    getAbout(context){
      axios.get('https://nasheetajacobs1999.github.io/jsonData/')
      .then (res => {
        context.commit('setAboutMe', res.data.about)
      })
    }
  },
  modules: {
  }
})