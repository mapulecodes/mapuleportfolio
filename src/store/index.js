import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfilioURL = 'https://mapulecodes.github.io/mapuledata/data/'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    hobbies: null,
    resume: null,
    projects: null,
    testimonials: null,

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
    setResume(state, value) {
      state.resume = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
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
    async fetchResume(context) {
      try {
      let { resume } = await (await axios.get(portfilioURL)).data
      context.commit("setResume", resume)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-resume",
        icon: "error",
        timer: 2000
      })
     }
    },

    async fetchProjects(context) {
      try {
      let { projects } = await (await axios.get(portfilioURL)).data
      context.commit("setProjects", projects)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-projects",
        icon: "error",
        timer: 2000
      })
     }
    },
    async fetchTestimonials(context) {
      try {
      let { testimonials } = await (await axios.get(portfilioURL)).data
      context.commit("setTestimonials", testimonials)
     } catch (e) {
      Swal.fire({
        title: "Error",
        text:"Failed to fetch the data-testimonials",
        icon: "error",
        timer: 2000
      })
     }
    },
  },
  modules: {
  }
})