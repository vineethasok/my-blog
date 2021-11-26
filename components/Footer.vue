<template>
  <footer class="p-4 border-t flex justify-between">
    <router-link to="/" class="font-montez relative">
      Vineeth Asok Kumar
      <i
        data-feather="pen-tool"
        class="text-black absolute top-1/2 left-full"
        height="20"
        width="20"
      ></i>
    </router-link>
    <div class="flex flex-row gap-4 mr-20">
      <router-link to="/" class="relative"> Home </router-link>
      <router-link to="/blog" class="relative"> Blog </router-link>
    </div>
  </footer>
</template>