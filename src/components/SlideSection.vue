<template>
  <div class="container">
    <swiper
        :slides-per-view="1"
        :space-between="50"
        :navigation="{
        prevEl: prev,
        nextEl: next
      }"
    >
      <swiper-slide v-for="item in 2" :key="item">
        <slider-item></slider-item>
      </swiper-slide>
    </swiper>
    <div class="lg:relative mt-8 lg:mt-0 mb-24 lg:mb-0 flex justify-center lg:z-10">
      <div class="items-center flex lg:absolute lg:-top-80 lg:-mt-76 lg:right-4">
        <button ref="prev" class="mr-6">
          <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25.2112" cy="26.7967" rx="25.2121" ry="25.9718" transform="rotate(-180 25.2112 26.7967)" fill="#FF7468" fill-opacity="0.12"/>
            <path d="M21.2726 34.5873L14.1817 26.7957M14.1817 26.7957L21.2726 19.0042M14.1817 26.7957L39.3938 26.7957" stroke="#FF6810" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button ref="next">
          <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25.7876" cy="26.7951" rx="25.2121" ry="25.9718" fill="#FF7468" fill-opacity="0.12"/>
            <path d="M29.7264 19.0045L36.8173 26.7961M36.8173 26.7961L29.7264 34.5876M36.8173 26.7961H11.6052" stroke="#FF6810" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import SliderItem from "./SliderItem.vue";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
SwiperCore.use([Navigation]);

export default {
  name: "SlideSection",
  components: {
    Swiper,
    SwiperSlide,
    'slider-item': SliderItem
  },
  setup() {
    const prev = ref(null)
    const next = ref(null)
    return {
      prev,
      next
    }
  }
}
</script>

<style scoped>
button:hover svg ellipse {
  fill-opacity: 1;
  fill: #FF6810;
}
button:hover svg path {
  stroke: #fff;
}
</style>