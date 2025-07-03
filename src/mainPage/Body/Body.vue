<script setup>
import AboutMe from "./About.vue";
import Skills from "./Skills.vue";
import Experience from "./Experience.vue";
import Education from "./Education.vue";
// import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
</script>
<template>
  <div
    class="mt-50 px-4 flex flex-col gap-10 items-start justify-start h-full w-full overflow-hidden"
  >
    <!-- About Me -->
    <AboutMe id="about" />
    <!-- Skills -->
    <Skills id="skills" />
    <!-- Experience -->
    <Experience id="experience" />
    <!-- Education -->
    <Education id="education" />
    <!-- Projects -->
    <!-- <Projects id="project" /> -->
    <!-- Contact Me -->
    <Contact id="contact" />
  </div>
</template>
