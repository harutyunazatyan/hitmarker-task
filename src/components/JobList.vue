<template>
  <div class="container mb-16">
    <h3 class="text-center text-secondary text-4xl mt-36 leading-11">Promoted Jobs</h3>
    <p class="text-center text-lg text-subtitle-60 mt-4">These opportunities are shown on every page of our site and shared daily on our Twitter account.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
      <job-card v-for="card in cardList" :key="card.id"
        :card-title="card.cardTitle"
        :name="card.name"
        :country="card.country"
        :card-img="card.cardImg"
        :card-icon="card.cardIcon"
      ></job-card>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import JobCard from "./JobCard.vue";
import img1 from "../assets/img/card-img-1.png";
import img2 from "../assets/img/card-img-2.png";
import img3 from "../assets/img/card-img-3.png";
import germany from "../assets/svg/Germany.svg";
import canada from "../assets/svg/Canada.svg";
import nigeria from "../assets/svg/Nigeria.svg"


export default {
  name: "JobList",
  components: {
    'job-card': JobCard
  },
  setup() {
    const cardList = ref([
      {
        id: 1,
        cardTitle: 'Social Video Creator',
        name: 'Pipeline.com',
        country: 'Germany',
        cardImg: img1,
        cardIcon: germany,
      },
      {
        id: 2,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
      {
        id: 3,
        cardTitle: 'Graphic Designer',
        name: 'Pipeline.com',
        country: 'Irland',
        cardImg: img2,
        cardIcon: nigeria,
      },
      {
        id: 4,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
      {
        id: 5,
        cardTitle: 'Graphic Designer',
        name: 'Pipeline.com',
        country: 'Irland',
        cardImg: img2,
        cardIcon: nigeria,
      },
      {
        id: 6,
        cardTitle: 'Social Video Creator',
        name: 'Pipeline.com',
        country: 'Germany',
        cardImg: img1,
        cardIcon: germany,
      },
      {
        id: 7,
        cardTitle: 'Social Video Creator',
        name: 'Pipeline.com',
        country: 'Germany',
        cardImg: img1,
        cardIcon: germany,
      },
      {
        id: 8,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
      {
        id: 9,
        cardTitle: 'Graphic Designer',
        name: 'Pipeline.com',
        country: 'Irland',
        cardImg: img2,
        cardIcon: nigeria,
      },
      {
        id: 10,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
      {
        id: 11,
        cardTitle: 'Graphic Designer',
        name: 'Pipeline.com',
        country: 'Irland',
        cardImg: img2,
        cardIcon: nigeria,
      },
      {
        id: 12,
        cardTitle: 'Social Video Creator',
        name: 'Pipeline.com',
        country: 'Germany',
        cardImg: img1,
        cardIcon: germany,
      },

      {
        id: 13,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
      {
        id: 14,
        cardTitle: 'Graphic Designer',
        name: 'Pipeline.com',
        country: 'Irland',
        cardImg: img2,
        cardIcon: nigeria,
      },
      {
        id: 15,
        cardTitle: 'Esports Competition Coordinator',
        name: 'Thescore',
        country: 'Canada',
        cardImg: img2,
        cardIcon: canada,
      },
    ])

    return {
      cardList
    }
  }
}
</script>

<style scoped>

</style>