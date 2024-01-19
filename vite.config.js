import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  server: {
    host: true,
    port: 80,
  },
  plugins: [vue(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
