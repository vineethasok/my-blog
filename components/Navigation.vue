<template>
  <nav id="nav" class="sticky inset-x-0 top-0 w-full z-50">
    <div
      class="
        bg-white
        dark:bg-gray-800
        sm:bg-transparent
        block
        flex
        justify-between
        sm:items-center
        mx-auto
        shadow-xl
        px-4
        backdrop-filter backdrop-blur-xl
        bg-opacity-60
        z-50
      "
    >
      <div class="flex justify-between items-center px-4 sm:px-0">
        <div>
          <router-link to="/" class="font-montez relative">
            Vineeth Asok Kumar
            <i
              data-feather="pen-tool"
              class="text-black dark:text-gray-100 absolute top-1/2 left-full"
              height="20"
              width="20"
            ></i>
          </router-link>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="
          bg-white
          dark:bg-gray-800
          sm:bg-transparent
          m-0
          sm:ml-4 sm:mt-3 sm:flex
          p-5
          sm:p-0
          justify-center
          items-center
          shadow-lg
          sm:shadow-none
          absolute
          sm:relative
          w-full
          left-0
          top-10
          sm:w-auto
          backdrop-filter backdrop-blur-xl
          bg-opacity-90
          sm:top-auto sm:left-auto
        "
      >
        <router-link to="/#about-me" class="nav-items" aria-label="About Me"
          >About Me</router-link
        >
        <router-link to="/#timeline" class="nav-items" aria-label="Projects"
          >Timeline</router-link
        >
        <a href="javascript:void(Tawk_API.toggle())" class="nav-items"
          >Contact</a
        >
        <router-link to="/blog" class="nav-items"> Blog </router-link>
      </div>
      <!-- Header links end -->

      <!-- Header right section buttons start -->
      <div class="flex justify-between items-center flex-row">
        <!-- Theme switcher largr screen start -->
        <ThemeSwitcher
          class="
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        />
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            class="focus:outline-none"
            aria-label="Humberger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="
                h-7
                w-7
                fill-current
                text-secondary-dark
                dark:text-ternary-light
              "
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import ThemeSwitcher from './ThemeSwitcher.vue'

export default defineComponent({
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      isOpen: false,
    }
  },
})
</script>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}

.nav-items {
  @apply block text-left text-lg font-medium text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-100 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2;
}
</style>
