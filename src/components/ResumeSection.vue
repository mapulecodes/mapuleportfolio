<template>
  <!-- <div class="gradient-background"> -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Resume</h1>
            <h1>Skills</h1>
            <div class="row gap-4" v-if="skills?.length">
              <CardComp v-for="item in skills" :key="item.title">
                <template #cardHeader>
                  <p>{{ item.title }}</p>
                </template>
                <template #cardBody>
                  <p>{{ item.experience }}</p>
                </template>
              </CardComp>
            </div>
            <Spinner v-else />
          </div>
        </div>
       </div>
       <!-- education -->
            <div>
              <h1>Education</h1>
            <div class="row " v-if="education?.length">
              <CardComp v-for="item in education" :key="item.title">
                <template #cardHeader>
                  <p>{{ item.title }}</p>
                </template>
                <template #cardBody>
                  <p>{{ item.place}}</p>
                  <p>{{ item.time}}</p>
                  <p>{{ item.achievement}}</p>
                </template>
              </CardComp>
            </div>
            <Spinner v-else />
         </div>
      <!-- Experience -->
     <div class="row">
      <!-- <h4 class="display-2">Experience</h4> -->
      <h1>Experience</h1>
            <div class="row gap-4" v-if="experience?.length">
              <CardComp v-for="item in experience" :key="item.id">
                <template #cardHeader>
                  <img src="" alt="experience-img" />
                </template>
                <template #cardBody>
                  <p class="heading">{{ item.place }}</p>
                  <p>{{ item.year }}</p>
                  <p>{{ item.description }}</p>
                </template>
              </CardComp>
            </div>
            <Spinner v-else />
     </div>
   


       </div>  

</template>

<script setup>
import CardComp from '@/components/Card.vue'
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const skills = computed(() => store.state.skills);
const education = computed(() => store.state.education)
const experience = computed(() => store.state.experience)

onMounted(() => {
  store.dispatch('fetchSkills')
  store.dispatch('fetchEducation')
  store.dispatch('fetchExperience')
})
</script>

<style scoped>


</style>
