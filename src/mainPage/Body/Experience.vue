<script setup>
import Label from "../../ElementUserInterfaceComponent/Label.vue";

const experiences = [
  {
    company: "Lexnetix Company",
    position: "Intern Backend Developer",
    duration: "2025 - Present",
    location: "Chanthaburi, Thailand",
    responsibilities: [
      "Developed and maintained Backend APIs using NestJS and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Participated in code reviews and implemented best practices",
    ],
  },
  {
    //freelance
    company: "Freelance",
    position: "Desktop Application Developer",
    duration: "2022 - 2023",
    location: "Chanthaburi, Thailand",
    responsibilities: [
      "Developed desktop applications using Python C and C++ with imgui library",
      "Designed and implemented user interfaces for various applications",
      "Collaborated with clients to gather requirements and deliver solutions",
    ],
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-6 items-start justify-start w-full h-full max-md:items-center"
  >
    <p class="font-custom text-3xl text-orange-200 hover:cursor-default">
      <span class="pi pi-briefcase"></span>
      Work Experience
    </p>

    <div class="flex flex-col gap-6 w-full">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="bg-gray-800/30 rounded-lg p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
      >
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4"
        >
          <div>
            <h3 class="font-custom text-xl text-white font-semibold">
              {{ exp.position }}
            </h3>
            <p class="font-custom text-lg text-blue-300">{{ exp.company }}</p>
          </div>
          <div class="text-right">
            <Label :label="exp.duration" size="text-sm" />
            <p class="font-custom text-sm text-gray-400">{{ exp.location }}</p>
          </div>
        </div>

        <ul class="space-y-2">
          <li
            v-for="(responsibility, idx) in exp.responsibilities"
            :key="idx"
            class="font-custom text-sm text-gray-300 flex items-start gap-2"
          >
            <span class="text-pink-300 mt-1">•</span>
            <span>{{ responsibility }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
