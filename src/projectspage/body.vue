<script setup>
import Button from "../ElementUserInterfaceComponent/Button.vue";

const projects = [
  {
    title: "e-commerce-backend Project",
    description:
      "A Backend for an e-commerce platform with user authentication, product management.",
    technologies: ["TypeScript", "Nest.js", "MariaDB"],
    github: "https://github.com/T-thanah/e-commerce-backend-project",
    demo: "https://github.com/T-thanah/e-commerce-backend-project",
    image: "/project1.jpg",
  },
  {
    title: "to-do-list Api",
    description:
      "A simple to-do list API built with Nest.js and TypeScript. It allows users to create, read, update, and delete tasks with JWT authentication.",
    technologies: ["TypeScript", "Nest.js", "MariaDB"],
    github: "https://github.com/T-thanha/to-do-list-api",
    demo: "https://github.com/T-thanha/to-do-list-api",
    image: "/project3.jpg",
  },
  {
    title: "License Plate Detection",
    description:
      "A license plate detection system using Pytorch pretrained model. It detects and recognizes license plates from images or video.",
    technologies: ["Python", "Pytorch"],
    github: "https://github.com/T-thanha/ProjectML",
    demo: "https://github.com/T-thanha/ProjectML",
    image: "/project2.jpg",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-6 mt-50 items-start justify-start w-full min-h-screen max-md:items-center"
  >
    <p class="font-custom text-3xl text-emerald-200 hover:cursor-default">
      <span class="pi pi-box"></span>
      Projects
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
      >
        <!-- Project Image Placeholder -->
        <div
          class="h-40 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center"
        >
          <p class="font-custom text-lg text-gray-300">{{ project.title }}</p>
        </div>

        <div class="p-6">
          <h3 class="font-custom text-lg text-white font-semibold mb-2">
            {{ project.title }}
          </h3>
          <p class="font-custom text-sm text-gray-300 mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-1 bg-gray-700/50 rounded-full font-custom text-xs text-gray-300 border border-gray-600/30"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2">
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1"
            >
              <Button label="GitHub" />
            </a>
            <a
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1"
            >
              <Button label="Demo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
