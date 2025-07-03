<script setup>
import Button from "../../ElementUserInterfaceComponent/Button.vue";
import Label from "../../ElementUserInterfaceComponent/Label.vue";

const contactInfo = [
  {
    type: "Email",
    value: "aut70441@gmail.com",
    icon: "pi pi-envelope",
    link: "mailto:aut70441@gmail.com",
  },
  {
    type: "Location",
    value: "Chanthaburi, Thailand",
    icon: "pi pi-map-marker",
    link: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "pi pi pi-github",
    url: "https://github.com/T-thanha",
    color: "text-gray-300 hover:text-white",
  },
  {
    name: "X",
    icon: "pi pi-twitter",
    url: "https://X.com/@ThanakritT49126",
    color: "text-white hover:text-gray-300",
  },
];
</script>

<template>
  <div
    class="flex flex-col gap-6 items-start justify-start w-full h-full max-md:items-center"
  >
    <p class="font-custom text-3xl text-pink-200 hover:cursor-default">
      <span class="pi pi-envelope"></span>
      Contact Me
    </p>

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="space-y-4">
        <h3 class="font-custom text-xl text-white mb-4">Get In Touch</h3>
        <p class="font-custom text-gray-300 mb-6">
          I'm always interested in hearing about new opportunities and exciting
          projects. Feel free to reach out if you'd like to collaborate or just
          want to say hello!
        </p>

        <div class="space-y-3">
          <div
            v-for="(contact, index) in contactInfo"
            :key="index"
            class="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
          >
            <span :class="contact.icon" class="text-white"></span>
            <div class="flex-1">
              <Label :label="contact.type" size="text-xs" />
              <a
                :href="contact.link"
                class="font-custom text-sm text-white hover:text-pink-300 transition-colors duration-300 block"
                :class="{ 'cursor-default': contact.link === '#' }"
              >
                {{ contact.value }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="space-y-4">
        <h3 class="font-custom text-xl text-white mb-4">Send a Message</h3>
        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label class="font-custom text-sm text-gray-400 block mb-2"
              >Name</label
            >
            <input
              type="text"
              class="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white font-custom text-sm focus:border-pink-400 focus:outline-none transition-colors duration-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label class="font-custom text-sm text-gray-400 block mb-2"
              >Email</label
            >
            <input
              type="email"
              class="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white font-custom text-sm focus:border-pink-400 focus:outline-none transition-colors duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label class="font-custom text-sm text-gray-400 block mb-2"
              >Message</label
            >
            <textarea
              rows="4"
              class="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white font-custom text-sm focus:border-pink-400 focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <Button label="Send Message" />
        </form>
      </div>
    </div>

    <!-- Social Links -->
    <div class="w-full py-6 border-t border-b border-gray-600/30">
      <p class="font-custom text-lg text-gray-300 mb-4 text-center">
        Connect with me
      </p>
      <div class="flex justify-center gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :class="social.color"
          class="font-custom text-sm transition-colors duration-300 hover:underline"
        >
          <span :class="social.icon" class="text-xl"></span>
        </a>
      </div>
    </div>
  </div>
</template>
