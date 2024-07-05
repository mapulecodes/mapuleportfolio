<template>
  <div class="container">
    <div id="details">
      <h1 class="display-1">Resume</h1>

      <!-- Skills  -->
      <h2 class="mt-5 mb-4">Skills</h2>
      <div class="row justify-content-center gap-4" v-if="skills?.length">
        <CardComp v-for="item in skills" :key="item.title">
          <template #cardHeader>
            <p class="card-title">{{ item.title }}</p>
          </template>
          <template #cardBody>
            <p>{{ item.experience }}</p>
          </template>
        </CardComp>
      </div>
      <Spinner v-else />

      <!-- Education  -->
      <h2 class="mt-5 mb-4">Education</h2>
      <div class="row justify-content-center mt-5 mb-4" v-if="education?.length">
        <div class="col-lg-6">
          <CardComp v-for="item in education" :key="item.title">
            <template #cardHeader>
              <p class="card-title">{{ item.title }}</p>
            </template>
            <template #cardBody>
              <p>{{ item.place }}</p>
              <p>{{ item.time }}</p>
              <p>{{ item.achievement }}</p>
            </template>
          </CardComp>
        </div>
        <!-- <div class="col-lg-6">
          <div class="image-container">
            <img src="https://mapulecodes.github.io/fridayimages/images/bg.jpg" alt="Education Image" class="img-fluid" />
          </div>
        </div> -->
      </div>
      <Spinner v-else />

      <!-- Experience -->
      <div class="row justify-content-center mt-5 mb-5" v-if="experience?.length">
        <div class="col-lg-8">
          <h2 class="mb-4">Experience</h2>
          <div class="row gap-4">
            <CardComp v-for="item in experience" :key="item.id">
              <template #cardHeader>
              </template>
              <template #cardBody>
                <p class="heading">{{ item.place }}</p>
                <p>{{ item.year }}</p>
                <p>{{ item.description }}</p>
              </template>
            </CardComp>
          </div>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </div>
</template>

<script setup>
import CardComp from '@/components/Card.vue';
import Spinner from './Spinner.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const skills = computed(() => store.state.skills);
const education = computed(() => store.state.education);
const experience = computed(() => store.state.experience);

onMounted(() => {
  store.dispatch('fetchSkills');
  store.dispatch('fetchEducation');
  store.dispatch('fetchExperience');
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.image-container {
  position: relative;
}

.image-container img {
  width: 50%; 
  max-width: 100%; 
  height: auto; 
  border-radius: 8px;
}

.card-title {
  color: white; 
}
.card {
  background: linear-gradient( #008080, #001F4D, #666e7a);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(25, 32, 124, 0.1);
  color: #ffffff;
}

@media (max-width: 768px) {
  .row.justify-content-center {
    flex-direction: column;
    align-items: center;
  }
  
  .col-lg-6 {
    width: 100%; 
  }
}
</style>
