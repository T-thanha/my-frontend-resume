<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <a
    class="font-custom text-sm text-gray-400 border-1 border-purple-500 hover:border-purple-200 hover:text-pink-200 transition-tranform duration-300 px-2 py-2 rounded-md hover:cursor-pointer"
  >
    {{ label }}
  </a>
</template>
