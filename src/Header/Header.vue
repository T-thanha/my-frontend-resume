<script setup></script>
<template>
  <div class="p-2 w-full sticky top-3">
    <div
      class="flex flex-row items-center gap-4 px-4 border-1 border-blue-200/50 rounded-md shadow-lg w-full h-15 shadow-gray-800/50 hover:shadow-gray-900/50 transition-shadow duration-300 backdrop-blur-md"
    >
      <img
        class="w-10 h-10 rounded-full active:rotate-360 transition-transform duration-300"
        src="/picon.JPG"
        alt="Logo"
      />
      <p
        class="font-custom text-lg text-gray-400 hover:text-pink-200 transition-color duration-300"
      >
        <router-link to="/">Thanakrit</router-link>
      </p>
      <div class="flex flex-row items-start gap-2 ml-auto max-md:hidden">
        <router-link
          to="/projects"
          class="font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Project
        </router-link>
        <a
          href="https://github.com/T-thanha"
          target="_blank"
          rel="noopener noreferrer"
          class="font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Github
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
      <div class="md:hidden ml-auto">
        <button
          class="items-center justify-center font-custom text-sm text-gray-400 hover:bg-gray-900 transition-tranform duration-300 hover:text-pink-200 transition-color duration-300 px-4 py-2 rounded-md hover:cursor-pointer border-1 border-gray-600/50"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span class="pi pi-bars"></span>
        </button>
      </div>
    </div>
  </div>
</template>
