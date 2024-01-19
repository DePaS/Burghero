import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  proxy: {
    "/api": "http://13.48.27.75:3000",
  },
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
