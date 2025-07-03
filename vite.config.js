import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"], // Fallback font
      },
    },
  },
  plugins: [vue(), tailwindcss()],
});
