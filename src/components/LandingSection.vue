<template>
  <div class="container-fluid  d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img
          src="https://mapulecodes.github.io/fridayimages/images/1.png" alt="profile" class="img-fluid" loading="lazy"/>
      </div>
      <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1 class="header">Mapule Mbuzwana</h1>
        <a href="path/to/your/resume.pdf" target="_blank" class="btn btn-primary resume-btn">Resume</a>
        <div class="moving-text">{{ title }}</div>
      </div>
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
.container-fluid {
  background-color: #BAD6EB;
  height: 100vh;
}

.img-fluid {
  max-width: 80%; 
  height: auto;
}

.header {
  font-size: 2rem;
  margin-bottom: 20px;
}

.resume-btn {
  margin-bottom: 20px;
  font-size: 1.25rem;
}

/* .moving-text {
  position: absolute;
  bottom: 20px;
  left: 0;
  font-size: 5rem; 
  color: rgb(253, 253, 253); 
  white-space: nowrap;
  overflow: hidden;
  animation: move 4s linear infinite;
} */

@keyframes move {
  0% { transform: translateX(-100%);}
  100% { transform: translateX(100%);}
}
</style>
