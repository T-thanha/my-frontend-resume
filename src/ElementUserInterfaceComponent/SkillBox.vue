<script setup>
import Label from "./Label.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleColor: {
    type: String,
    default: "text-green-200",
  },
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col gap-2 items-start justify-start w-full bg-gray-800/30 border border-gray-600/30 p-4 rounded-lg shadow-lg hover:border-gray-500/50 transition-shadow duration-300 hover:scale-105 transition-transform duration-300"
  >
    <div class="flex flex-row justify-center w-full">
      <h1
        :class="`font-custom text-xl ${titleColor} hover:text-pink-200 transition-color duration-300 hover:cursor-pointer`"
      >
        {{ title }}
      </h1>
    </div>
    <Label v-for="skill in skills" :key="skill" :label="skill" size="text-lg" />
  </div>
</template>
