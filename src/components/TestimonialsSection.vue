<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1 text-center my-5">Testimonials</h1>
          <div class="row" v-if="testimonials?.length">
            <div v-for="(item, index) in testimonials" :key="index" class="col-md-4 mb-4">
              <CardComp>
                <template #cardHeader>
                  <img :src="item.image" alt="testimonial-img" class="card-img-top"/>
                </template>
                <template #cardBody>
                  <div class="card-body text-center">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <h5 class="card-title">{{ item.surname }}</h5>
                    <h5 class="card-title">{{ item.quotes }}</h5>
                  </div>
                </template>
              </CardComp>
            </div>
          </div>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardComp from '@/components/Card.vue';
import Spinner from "./Spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const testimonials = computed(() => store.state.testimonials);

onMounted(() => {
  store.dispatch("fetchTestimonials");
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card {
  background: linear-gradient(#008080, #001F4D, #666e7a);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #ffffff;
}

.card-title {
  color: #ffffff;
}

.card-text {
  color: #ffffff;
}

.btn-dark {
  background-color: #001F4D;
  color: #ffffff;
}

.btn-primary {
  background-color: #008080;
  color: #ffffff;
  border: none;
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  height: 200px; 
  width: 100%;
}

.text-center {
  text-align: center;
}

.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.row > .col-md-4 {
  display: flex;
  justify-content: center;
}
</style>
