<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">About</h1>
          <p v-if="about">
            <span>{{ about }}</span>
          </p>
          <Spinner v-else />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="images" class="d-flex flex-wrap justify-content-center">
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

<style>
#images {
  margin-top: 20px;
  gap: 30px; 
}

.rounded-image {
  width: 100px; 
  height: 100px;
  border-radius: 50%;
  border: 2px solid blue;
}
</style>
