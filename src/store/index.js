import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfilioURL = 'https://mapulecodes.github.io/mapuledata/data/'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    tech_skills: null,
    hobbies: null,

  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setAbout(state, value) {
      state.about = value 
    },
    setHobbies(state, value) {
      state.hobbies = value
    },
    setTechskills(state, value) {
      state.tech_skills = value
    },

  },
  actions: {
    async fetchJobTitle(context) {
      try {
      let { jobTitle } = await (await axios.get(portfilioURL)).data
      context.commit("setJobTitle", jobTitle)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
     }
    },

    async fetchAbout(context) {
      try {
      let { about } = await (await axios.get(portfilioURL)).data
      context.commit("setAbout", about)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-about",
        icon: "error",
        timer: 2000
      })
     }
    },

    async fetchTech_skills(context) {
      try {
      let { education } = await (await axios.get(portfilioURL)).data
      context.commit("setTechskills", education)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-tech_skills",
        icon: "error",
        timer: 2000
      })
     }
    },

    async fetchHobbies(context) {
      try {
      let { hobbies } = await (await axios.get(portfilioURL)).data
      context.commit("setHobbies", hobbies)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-hobbies",
        icon: "error",
        timer: 2000
      })
     }
    },
  },
  modules: {
  }
})