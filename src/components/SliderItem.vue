<template>
    <div class="container pt-3 lg:mb-72 flex flex-col lg:flex-row justify-between">
      <div class="lg:w-1/3 relative h-496">
        <div class="h-full w-full absolute lg:left-32 top-10 lg:top-28" :style="`background: url(${dots}) no-repeat bottom right`"></div>
        <div class="w-full h-90 absolute mt-10" style="background-color: #19191b"></div>
        <div class="h-full w-full absolute" :style="`background: url(${image}) no-repeat`"></div>
        <div class="h-full w-full absolute right-5" :style="`background: url(${quote}) no-repeat top right`"></div>
      </div>
      <div class="lg:w-3/5 self-end">
        <div class="mb-10 mt-16 lg:mt-0 flex items-center justify-between">
          <h3 class="text-4xl font-medium text-secondary">What people say</h3>
        </div>

        <div class="p-10 border-l-12 border-primary bg-white lg:-ml-28 lg:-mb-8 relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-7">
            <div>
              <h4 class="text-3xl text-secondary">Darrell Steward</h4>
              <p class="text-2xl text-secondary">CEO, ESport.</p>
            </div>
            <div class="flex items-center mt-4 sm:mt-0">
          <span class="mr-2">
            <img src="../assets/svg/star.svg" width="23" height="21" alt="star">
          </span>
              <span class="mr-2">
            <img src="../assets/svg/star.svg" width="23" height="21" alt="star">
          </span>
              <span class="mr-2">
            <img src="../assets/svg/star.svg" width="23" height="21" alt="star">
          </span>
              <span class="mr-2">
            <img src="../assets/svg/star.svg" width="23" height="21" alt="star">
          </span>
              <span>
            <img src="../assets/svg/star-disabled.svg" width="23" height="21" alt="star">
          </span>
            </div>
          </div>

          <p class="text-footer-link-90">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import image from '../assets/img/image.png'
import dots from '../assets/img/dots.png'
import quote from '../assets/img/quote.png'

export default {
  name: "SlideItem",
  data() {
    return {
      image,
      dots,
      quote,
    }
  },
}
</script>

<style scoped>

</style>