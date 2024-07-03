<template>
  <!-- <div class="gradient-background"> -->
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Projects</h1>
            <p v-if="projects">
              <span>{{ projects }}</span>
            </p>
            <Spinner v-else />
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const projects = computed(() => store.state.projects);

onMounted(() => {
  store.dispatch('fetchProjects')
})
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.gradient-background {
  /* background: linear-gradient(to bottom right, #008080, #001F4D);  */
  height: 100vh; 
  color: #fff; 
}

</style>
