<template>
  <div class="gradient-background">
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Resume</h1>
            <p v-if="resume">
              <span>{{ resume }}</span>
            </p>
            <Spinner v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const resume = computed(() => store.state.resume);

onMounted(() => {
  store.dispatch('fetchResume')
})
</script>

<style scoped>


</style>
