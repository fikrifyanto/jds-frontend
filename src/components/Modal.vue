<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
        <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-lg w-full p-10">
          <div class="bg-white flex justify-center px-4 sm:pt-10 pb-5">
            <div v-if="this.statusCode != 200" class="mx-auto flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
              <svg class="h-14 w-14 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div v-if="this.statusCode == 200" class="mx-auto flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <svg class="h-14 w-14 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div class="text-center">
            <h2 class="font-semibold text-2xl">{{ this.responseText }}</h2>
            <p class="my-4">{{ this.message }}</p>
          </div>
          <div class="px-4 py-3 sm:px-6 sm:flex justify-center">
            <button @click="close" type="button" class="w-full bg-green-500 hover:bg-green-600 px-5 py-3 leading-5 rounded-full font-semibold text-white">Kembali</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "responseText", "statusCode"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
