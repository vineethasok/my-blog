<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-24
      sm:mt-0
      min-h-screen
    "
  >
    <div class="w-full sm:w-1/3 text-left mx-auto">
      <h2 class="hi">Hi, I'am</h2>
      <h1
        class="
          text-3xl
          sm:text-5xl
          text-center
          sm:text-left
          font-semibold
          text-ternary-dark
          dark:text-primary-light
          uppercase
          font-montez
        "
      >
        Vineeth Asok Kumar
      </h1>
      <p
        class="
          mt-4
          text-2xml
          sm:text-4xl
          text-center
          sm:text-left
          font-semibold
          leading-none
          text-gray-400
        "
      >
        A Full-Stack Polyglot Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Stoman-Resume.pdf"
          href="https://drive.google.com/file/d/1-kwcELdM-dJ0a5UqclGBrxWxwfLIvuR3/view?usp=sharing"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-xl
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
          "
          aria-label="Download Resume"
        >
          <i
            data-feather="download-cloud"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"
          ></i>
          <span class="text-sm sm:text-lg">Download CV</span></a
        >
      </div>
    </div>
    <div class="w-full sm:w-1/2 text-right float-right mt-8 sm:mt-0">
      <ProgrammingSvg />
    </div>
  </section>
</template>

<script lang='ts'>
import feather from 'feather-icons'
import ProgrammingSvg from './svgs/ProgrammingSvg.vue'

export default {
  name: 'Home',
  components: { ProgrammingSvg },
  created() {},
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
  methods: {},
}
</script>

<style scoped>
h1 {
  stroke: #182838;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: handwritingAnimation 1s linear forwards;
}

.hi {
  @apply text-left relative uppercase font-normal text-white mb-2;

  letter-spacing: 0.25rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px #000;;
}
@keyframes handwritingAnimation {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
