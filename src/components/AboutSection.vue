<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12 text-center mb-4">
        <h1 class="display-1">About</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="about-section">
          <p v-if="about?.length">   
            <span>{{ about[0] }}</span>
            <span>{{ about[1] }}</span>
          </p>
          <Spinner v-else />
        </div>
      </div>
      <div class="col-md-6">
        <img src="https://mapulecodes.github.io/fridayimages/images/29.jpg" class="img-fluid me-img" alt="Landing Image">
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <div id="images" class="d-flex flex-wrap justify-content-start">
          <div v-for="(hobby, index) in hobbies" :key="index" class="text-center mb-2">
            <img :src="hobby.image" :alt="hobby.place" loading="lazy" class="rounded-image"/>
            <p>{{ hobby.place }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Spinner from "./Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const about = computed(() => store.state.about); 
const hobbies = computed(() => store.state.hobbies);



onMounted(() => {
  store.dispatch("fetchAbout");
  store.dispatch("fetchHobbies");
});
</script>

<style scoped>
#images {
  margin-bottom: 50px;
  gap: 20px; 
  justify-content: flex-start; 
}

.rounded-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
}

.about-section {
  margin-bottom: 10px;
}

img.me-img {
  max-width: 100%;
  height: auto;
  width: 100%; 
  max-width: 350px; 
  display: block;
  margin: auto;
}

p {
  display: flex;
  flex-direction: column;
}




</style>
