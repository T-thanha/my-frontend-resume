<script setup></script>
<template>
  <div class="p-2 w-full sticky top-3">
    <div
      class="flex flex-row items-center gap-4 px-4 border-1 border-blue-200/50 rounded-md shadow-lg w-full h-12 shadow-gray-800/50 hover:shadow-gray-900/50 transition-shadow duration-300 backdrop-blur-md"
    >
      <img
        class="w-8 h-8 rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
        src="/picon.png"
        alt="Logo"
      />
      <p
        class="font-custom text-lg text-gray-400 hover:text-pink-200 transition-color duration-300"
      >
        <router-link to="/">Thanakrit</router-link>
      </p>
      <div
        class="flex flex-row items-start gap-2 ml-auto max-md:overflow-scroll"
      >
        <router-link
          to="/projects"
          class="font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Project
        </router-link>
        <a
          href="https://fastwork.co/user/thanakri_t?source=web_marketplace_profile-menu_profile"
          target="_blank"
          rel="noopener noreferrer"
          class="font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Fastwork
        </a>
        <a
          href="https://youtube.com/@thanakrit3823"
          target="_blank"
          rel="noopener noreferrer"
          class="font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Youtube
        </a>
      </div>
    </div>
  </div>
</template>
