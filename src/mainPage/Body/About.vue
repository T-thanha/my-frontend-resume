<script setup>
import Button from "../../ElementUserInterfaceComponent/Button.vue";
</script>
<template>
  <div
    class="flex flex-row max-md:flex-col max-md:items-center gap-4 items-start justify-start pt-10"
  >
    <img
      class="w-40 h-40 hover:scale-110 hover:-rotate-10 hover:shadow-md shadow-sky-700 transition-tranform duration-300 rounded-full"
      src="/picon.png"
      alt="Logo"
    />
    <div
      class="flex flex-col gap-4 max-md:items-center items-start justify-center h-full w-full"
    >
      <p class="font-custom1 text-5xl text-pink-300">$THANAKIT!</p>
      <div class="flex flex-col max-md:items-center items-start gap-2">
        <p class="font-custom text-xl text-gray-400">Software Engineer</p>
        <p class="font-custom text-lg text-gray-400">
          I don’t think I’m a coding genius, but I’m definitely not giving up on
          learning it!
        </p>
        <Button label="Contact Me" href="#contact" />
      </div>
    </div>
  </div>
</template>
