<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "text-sm",
  },
});
</script>
<template>
  <label
    :class="`font-custom ${size} text-gray-400 hover:text-pink-200 transition-color duration-300`"
  >
    {{ label }}
  </label>
</template>
