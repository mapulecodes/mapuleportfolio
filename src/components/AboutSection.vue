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
        <div class="col ">
          <div id="images">
            <span v-for="(hobby, index) in hobbies" :key="index">
              <img
                :src="hobby.image"
                alt="Image 1"
                loading="lazy"
                class="rounded-image image-fluid"
              />
              <p>{{ hobby.place }}</p></span
            >
            <!-- <img src="https://mapulecodes.github.io/fridayimages/images/art.png" alt="Image 2" loading="lazy" class="rounded-image">
          <img src="https://mapulecodes.github.io/fridayimages/images/w.jpg" alt="Image 3" loading="lazy" class="rounded-image">
          <img src="https://mapulecodes.github.io/fridayimages/images/gym.png" alt="Image 4" loading="lazy" class="rounded-image">
          <img src="https://mapulecodes.github.io/fridayimages/images/canva.png" alt="Image 5" loading="lazy" class="rounded-image">
          <img src="https://mapulecodes.github.io/fridayimages/images/hiking.png" alt="Image 6" loading="lazy" class="rounded-image"> -->
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
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.rounded-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid blue;
}
</style>
