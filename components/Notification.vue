<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="sm:p-6 sm:items-start fixed inset-0 flex items-end px-4 py-6 pointer-events-none"
  >
    <div class="sm:items-end flex flex-col items-center w-full space-y-4">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-from-class="sm:translate-y-0 sm:translate-x-2 translate-y-2 opacity-0"
        enter-to-class="sm:translate-x-0 translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="ring-1 ring-black ring-opacity-5 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon
                  class="w-6 h-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ msg }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ subtext }}
                </p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button
                  @click="$emit('close')"
                  class="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex text-gray-400 bg-white rounded-md"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CheckCircleIcon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/solid";
defineProps<{ msg: string; subtext: string; show: boolean }>();
defineEmits(["close"]);
</script>
