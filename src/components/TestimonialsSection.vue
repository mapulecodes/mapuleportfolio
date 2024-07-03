<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Testimonials</h1>
            <p v-if="testimonials">
              <span>{{ testimonials }}</span>
            </p>
            <Spinner v-else />
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
const testimonials = computed(() => store.state.testimonials);

onMounted(() => {
  store.dispatch('fetchTestimonials')
})
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

/* .gradient-background {
  height: 100vh; 
  color: #fff; 
} */

</style>
