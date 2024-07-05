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
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #001F4D, #666e7a, #554671, #3f1d5a);
  min-height: 110vh; /* Increased height */
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.form-container {
  width: 45%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  /* color: white; */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: none;
  /* border-bottom: 2px solid white; */
  background: transparent;
  /* color: white; */
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #503799;
}

.image-container {
  width: 45%;
  position: relative;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
}

.social-icons {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.social-icons a {
  color: white;
  font-size: 2rem;
  margin: 0 10px;
}


@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .form-container,
  .image-container {
    width: 100%;
  }

  .image-container {
    margin-top: 20px;
  }
}
</style>