<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="about-section">
          <h1 class="display-1">About</h1>
          <p v-if="about?.length">   
            <span>{{ about [0] }}</span>
             <span>{{ about [1] }}</span>
          </p>
       
          <Spinner v-else />
        </div>
      </div>
      <!-- <div class="col-md-6">
        <div class="contact-info">
          <p class="reach-out">Feel free to reach out to me!</p>
          <div class="contact-icons">
            <a href="https://github.com/mapulembuzwana" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mapulembuzwana/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <img src="https://mapulecodes.github.io/fridayimages/images/contact-image.png" alt="Contact Image" class="contact-image" />
        </div>
      </div> -->
    </div>

   
    <div class="row mt-4">
      <div class="col">
        <div id="images" class="d-flex flex-wrap justify-content-start">
          <div v-for="(hobby, index) in hobbies" :key="index" class="text-center mb-4">
            <img
              :src="hobby.image"
              :alt="hobby.place"
              loading="lazy"
              class="rounded-image"
            />
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
  margin-top: 20px;
  gap: 30px;
  justify-content: flex-start; 
}

.rounded-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid blue;
}

.about-section {
  margin-bottom: 40px; 
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px; 
}

.icon {
  width: 30px;
  height: 30px;
}

.reach-out {
  margin-bottom: 10px; 
}

.contact-image {
  width: 100%;
  max-width: 300px; 
  margin-top: 20px; 
}
</style>
