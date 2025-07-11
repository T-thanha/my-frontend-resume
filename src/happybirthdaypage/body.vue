<script setup>
// add function click to submit button
import { ref } from "vue";
const name = ref("");
const wish = ref("");
const handleSubmit = () => {
  if (!wish.value) {
    alert("เหมือนว่าคุณยังไม่ได้ใส่คำอวยพรนะ");
    return;
  }
  if (name.value) alert(`ขอบคุณ ${name.value} สำหรับคำอวยพร`);
  else alert(`ขอบคุณสำหรับคำอวยพร`);
};
</script>

<template>
  <div
    class="flex flex-col gap-6 mt-50 items-center justify-start w-full min-h-screen max-md:items-center"
  >
    <p class="font-custom text-3xl text-emerald-200 hover:cursor-default">
      <span class="pi pi-heart-fill"></span>
      Happy Birthday!
    </p>

    <input
      type="text"
      placeholder="Tell me your name"
      class="font-custom text-center w-full p-2 rounded-lg border text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      v-model="name"
      @keyup.enter="handleSubmit"
    />
    <input
      type="text"
      placeholder="Leave your birthday wishes here"
      class="font-custom text-center w-full p-2 rounded-lg border text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      v-model="wish"
      @keyup.enter="handleSubmit"
    />
    <button
      class="w-1/2 max-md:w-full text-center font-custom text-lg text-pink-200 hover:text-white transition-colors duration-300 rounded-md border border-gray-100 py-1"
      text="Submit"
      @click="handleSubmit"
      :disabled="!wish"
    >
      <span class="pi pi-check"></span>
      Subbmit
    </button>
  </div>
</template>
