<template>
  <div class="p-4 rounded-lg bg-white shadow-3xl">
    <div class="border-b pb-4 pl-1">
      <span class="text-lg leading-7">{{cardTitle}}</span>
    </div>
    <div class="flex mt-5 items-center">
      <span>
        <img :src="cardImg" width="24" height="24" alt="img">
      </span>
      <span class="ml-3 leading-6">{{name}}</span>
    </div>
    <div class="flex mt-4 mb-1 items-center">
      <span class="mr-0.5 ml-1">
         <img :src="cardIcon" width="20" height="15" alt="flag">
      </span>
      <span class="ml-3 text-xs text-description leading-5">{{country}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    cardTitle: String,
    cardImg: String,
    name: String,
    cardIcon: String,
    country: String,

  }
}
</script>

<style scoped>

</style>