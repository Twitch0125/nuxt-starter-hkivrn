import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
  nitro: {
    preset: 'netlify-edge'
  },
  vite: {
    optimizeDeps: {
      include: [
        "@heroicons/vue/solid",
        "@heroicons/vue/outline",
        "@headlessui/vue",
      ],
    },
  },
});
