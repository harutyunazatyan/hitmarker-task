<template>
  <div class="bg-gray-50">
    <Hero/>
    <job-list></job-list>
    <promote-job></promote-job>
    <slide-section></slide-section>
    <Footer/>
  </div>
</template>

<script>
import JobList from "./components/JobList.vue";
import Footer from "./components/Footer.vue";
import PromoteJob from "./components/PromoteJob.vue";
import Hero from "./components/Hero.vue";
import SlideSection from "./components/SlideSection.vue";

export default {
  name: 'App',
  components: {
    SlideSection,
    Hero,
    'promote-job': PromoteJob,
    'job-list': JobList,
    'slide-section': SlideSection,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
