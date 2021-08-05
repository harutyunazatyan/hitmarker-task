<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between py-10 overflow-hidden" :class="[!menu ? 'h-110' : 'h-auto']">
    <div class="flex items-center justify-between">
      <a href="#">
        <img src="../assets/svg/header-logo.svg" alt="logo">
      </a>
      <button class="md:hidden text-white h-10 w-10 rounded-full bg-primary text-3xl transform transition duration-100" :class="{'rotate-45': menu}" @click="openMenu">+</button>
    </div>
    <ul class="flex flex-col md:flex-row text-white text-sm leading-10 md:leading-df mt-4 md:mt-0">
      <li class="md:mx-5">
        <a href="#" class="hover:underline">Find a job</a>
      </li>
      <li class="md:mx-5">
        <a href="#" class="hover:underline">Post a job</a>
      </li>
      <li class="md:mx-5">
        <a href="#" class="hover:underline">Career advice</a>
      </li>
    </ul>
    <div class="mt-4 md:mt-0">
      <a href="#" class="inline-block mr-6 text-sm text-white leading-df hover:underline">Login</a>
      <a href="#" class="inline-block px-4 py-2 rounded-md bg-primary leading-df text-white shadow-inner text-sm font-bold">Create Account</a>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Header",
  setup() {
    const menu = ref(false)
    function openMenu() {
      menu.value = !menu.value
    }
    return {
      menu,
      openMenu
    }
  }
}
</script>

<style scoped>

</style>