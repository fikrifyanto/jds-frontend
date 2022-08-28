<template class>
  <div class="flex flex-col items-center pb-10 bg-slate-100 min-h-screen">
    <div class="fixed flex items-center justify-center h-16 w-full text-center bg-green-500 text-white mb-5">
      <div class="w-[90vw] md:w-[60vw] lg:w-[35vw]">
        <router-link class="float-left" v-if="$route.path == '/form'" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </router-link>

        <h1 class="text-center text-lg">{{ $route.name }}</h1>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
