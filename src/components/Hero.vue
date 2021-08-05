<template>
  <div class="bg-black-df">
    <div class="container">
      <Header/>
      <div class="flex items-center mt-9 mb-12 flex-col-reverse md:flex-row">
        <div class="md:w-1/2 text-white mt-10 md:mt-0">
          <h1 class="text-5xl leading-12 font-bold">The home of gaming and esports jobs</h1>
          <p class="leading-6 mt-10">
            With over 8,000 active listings from more than 50 countries, Hitmarker is the largest gaming and esports
            jobs platform in the world. Find your dream career. Hire top talent. Make your mark.
          </p>
          <div class="mt-14 flex items-center">
            <a href="#" class="inline-block shadow-inner rounded-md font-bold bg-primary text-white py-4 px-14 mr-10">View Jobs</a>
            <a href="#" class="flex items-center text-white-90 leading-6 hover:underline">
              <span class="flex justify-center items-center w-10 h-10 mr-2 border rounded-full">
                <img src="../assets/svg/play.svg" width="15" height="16" class="ml-1" alt="play">
              </span>
              <span>Watch our video</span>
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center relative">
          <div class="inline-block relative">
            <img src="../assets/img/hero-img.png" width="689" height="636" alt="hero">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-white rounded-xl p-6 transform translate-y-14">
        <img src="../assets/img/partners.png" width="1129" height="82" alt="partners">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Hero",
  components: {Header}
}
</script>

<style scoped>

</style>