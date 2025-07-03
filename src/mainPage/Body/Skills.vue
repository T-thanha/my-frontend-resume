<script setup>
import SkillBox from "../../ElementUserInterfaceComponent/SkillBox.vue";

const skiil2Categories = [
  {
    title: "Tools",
    titleColor: "text-amber-200",
    skills: ["Git", "VSCode", "Ida", "x64dbg", "Vim", "GDB", "Docker"],
  },
  {
    title: "OS",
    titleColor: "text-teal-200",
    skills: ["macOS", "Linux", "Windows"],
  },
  {
    title: "Other Skills",
    titleColor: "text-indigo-200",
    skills: ["Reverse Engineering", "Binary Exploitation", "Debugging"],
  },
];
const skillCategories = [
  {
    title: "Programming",
    titleColor: "text-yellow-200",
    skills: ["C++", "C", "Python", "Rust", "Lua"],
  },
  {
    title: "Frontend",
    titleColor: "text-green-200",
    skills: ["HTML/CSS", "JavaScript", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    titleColor: "text-blue-200",
    skills: ["Nestjs", "Express.js", "Node.js", "PHP"],
  },
];
</script>
<template>
  <div
    class="flex flex-col gap-2 items-start justify-start w-full h-full max-md:items-center"
  >
    <p class="font-custom text-3xl text-red-200 hover:cursor-default">
      <span class="pi pi-code"></span>
      My Skills
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full py-4"
    >
      <!-- Row 1: Programming, Frontend, Backend -->
      <SkillBox
        v-for="category in skillCategories"
        :key="category.title"
        :title="category.title"
        :title-color="category.titleColor"
        :skills="category.skills"
        class="xl:col-span-2"
      />

      <!-- Row 2: Other Skills, OS, Tools -->
      <SkillBox
        v-for="category in skiil2Categories"
        :key="category.title"
        :title="category.title"
        :title-color="category.titleColor"
        :skills="category.skills"
        class="xl:col-span-2"
      />
    </div>
  </div>
</template>
