<script setup>
import Label from "../../ElementUserInterfaceComponent/Label.vue";

const education = [
  {
    institution: "Rambhai Barni Rajabhat University",
    degree: "Bachelor of Computer Science",
    duration: "2019 - 2023",
    gpa: "3.75",
    location: "Bangkok, Thailand",
    description:
      "Focused on software engineering, algorithms, and data structures",
  },
  {
    institution: "Khlungratchadapisake High School",
    degree: "High School Diploma - Computer Science",
    duration: "2016 - 2019",
    gpa: "3.85",
    location: "Bangkok, Thailand",
    description: "Specialized in programming and computer systems",
  },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-6 items-start justify-start w-full h-full max-md:items-center"
  >
    <p class="font-custom text-3xl text-purple-200 hover:cursor-default">
      <span class="pi pi-graduation-cap"></span>
      Education
    </p>

    <!-- Education Section -->
    <div class="flex flex-col gap-4 w-full">
      <div
        v-for="(edu, index) in education"
        :key="index"
        class="bg-gray-800/30 rounded-lg p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
      >
        <div
          class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3"
        >
          <div>
            <h3 class="font-custom text-lg text-white font-semibold">
              {{ edu.degree }}
            </h3>
            <p class="font-custom text-md text-green-300">
              {{ edu.institution }}
            </p>
            <p class="font-custom text-sm text-gray-300 mt-1">
              {{ edu.description }}
            </p>
          </div>
          <div class="text-right">
            <Label :label="edu.duration" size="text-sm" />
            <p class="font-custom text-sm text-gray-400">{{ edu.location }}</p>
            <p class="font-custom text-sm text-yellow-300">
              GPA: {{ edu.gpa }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Certifications Section -->
    <div class="w-full mt-4">
      <p class="font-custom text-2xl text-cyan-200 mb-4">Certifications</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="bg-gray-800/20 rounded-lg p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
        >
          <h4 class="font-custom text-md text-white font-semibold">
            {{ cert.name }}
          </h4>
          <p class="font-custom text-sm text-blue-300">{{ cert.issuer }}</p>
          <Label :label="cert.year" size="text-xs" />
        </div>
      </div>
    </div>
  </div>
</template>
