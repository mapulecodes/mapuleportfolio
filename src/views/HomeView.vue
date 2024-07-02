<template>
  <div class="container">
    <section class="row" id="landing">
       <LandingSection/>
    </section>
  
    <section class="row" id="about">
    
    </section>
    <section class="row" id="education">
     
    </section>
      <section class="row" id="experiences">
     
    </section>
    <section class="row" id="resume">
    
    </section>
    <section class="row" id="projects">
    </section>
    <section class="row" id="testimonials">
    </section>
    <section class="row" id="reachme">
    </section>
  </div>
</template>
<script>

import LandingSection from '@/components/LandingSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection
   
  }
}
</script>