<script setup>
import Body from "../mainPage/Body/Body.vue";
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-gray-700/30 h-full w-full min-h-dvh"
  >
    <div
      class="flex flex-col h-full w-full md:w-3/4 lg:w-2/3 xl:w-1/2 transition-all duration-300 ease-in-out"
    >
      <Header msg="Header " />
      <Body msg="Body " />
    </div>
    <Footer />
  </div>
</template>
