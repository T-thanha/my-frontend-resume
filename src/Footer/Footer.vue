<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bottom-0 left-0 right-0 w-full py-4 border-t border-gray-600/30 bg-gray-900/30 mt-10"
  >
    <div class="container mx-auto px-4">
      <!-- Bottom Section -->
      <div class="flex flex-col flex-row justify-between items-center">
        <p class="font-custom text-sm text-gray-500">
          © {{ currentYear }} Thanakit. All rights reserved.
        </p>
        <p class="font-custom text-sm text-gray-500">
          Built with ❤️ By Thanakrit
        </p>
      </div>
    </div>
  </footer>
</template>
