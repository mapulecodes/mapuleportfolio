<template>
  <div class="container full-screen">
    <div class="row">
      <video src="https://mapulecodes.github.io/fridayimages/images/landing.mp4" class="media-fluid video-fluid" autoplay loop muted>
      </video>
      <img src="https://mapulecodes.github.io/fridayimages/images/limage.png" class="media-fluid img-fluid" alt="Landing Image">
      <div class="overlay-content">
        <h1 class="header">Mapule Mbuzwana</h1>
        <a href="#contact" class="btn btn-primary contact-btn">Contact Me</a>
        <div class="text">{{ title }}</div>
      </div>
    </div>
    <div class="mobile-content">
      <h1 class="header">Mapule Mbuzwana</h1>
      <a href="#contact" class="btn btn-primary contact-btn">Contact Me</a>
      <div class="text">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const jobTitle = computed(() => store.state.jobTitle);
const title = ref('full stack-developer');
const cnt = ref(-1);

function repeat() {
  try {
    if (cnt.value === jobTitle.value?.length) cnt.value = 0;
    title.value = jobTitle.value?.at(cnt.value)?.title;
    setTimeout(repeat, 2000);
    cnt.value++;
  } catch (e) {
    //
  }
}

onMounted(() => {
  store.dispatch('fetchJobTitle');
  repeat();
});
</script>

<style scoped>
.full-screen {
  height: calc(100vh - 56px); 
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.media-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.img-fluid {
  display: none;
}

.overlay-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white; 
  padding: 20px; 
}

.header {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white; 
}

.contact-btn {
  margin-bottom: 20px;
  font-size: 1.25rem;
  z-index: 10;
}

.text {
  margin-top: 20px; 
}

@media screen and (max-width: 768px) {
  .video-fluid {
    display: none;
  }
  .img-fluid {
    display: block;
    position: relative;
  }
  .overlay-content {
    display: none;
  }
  .mobile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white; 
   
  }
  .header {
    color: white; 
  }
}
</style>
