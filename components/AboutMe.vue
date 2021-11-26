<template>
  <section id="about-me">
    <div class="card">
      <div class="card-header">
        <div class="absolute flex">
          <div class="round bg-red-600"></div>
          <div class="round bg-yellow-400"></div>
          <div class="round bg-green-700"></div>
        </div>
        <div class="mx-auto font-bold font-montez text-2xl">About Me</div>
      </div>
      <div class="card-body">
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src="/vinu.jpg" class="rounded-full w-96" alt="" />
        </div>
        <div class="w-full sm:w-3/4 text-left dark:text-white">
          <br />
          <span class="wave">{hello} :) </span>
          <br />
          <br />
          A passionate Full Stack Polyglot Web Developer having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs / Python
          / Django / Flask and some other cool libraries and frameworks.

          <div class="social-icons flex mt-4">
            <a class="facebook" href="https://www.facebook.com/asokvineeth">
              <i data-feather="facebook" class="icon"></i>
            </a>
            <a class="github" href="https://github.com/vineethasok">
              <i data-feather="github" class="icon"></i>
            </a>
            <a class="gitlab" href="https://gitlab.com/vineethasok">
              <i data-feather="gitlab" class="icon"></i>
            </a>
            <a class="linkedin" href="https://www.linkedin.com/in/vineethasok/">
              <i data-feather="linkedin" class="icon"></i>
            </a>
            <a class="mail" href="mailto:me@vineethasok.com">
              <i data-feather="mail" class="icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
#about-me {
  @apply block pt-10 sm:py-20 bg-gray-100 dark:bg-gray-400;

  .round {
    @apply w-4 h-4 mr-2 rounded-full;
  }
  .card {
    @apply shadow-2xl p-0 mx-4 max-w-screen-lg mx-auto;

    &-header {
      @apply relative flex items-center p-4  bg-opacity-25 bg-white rounded-t-lg;
    }
    &-body {
      @apply sm:flex sm:gap-10 text-justify h-auto p-4 bg-opacity-25 bg-gray-400 rounded-b-lg dark:bg-gray-500;

      backdrop-filter: blur(25px) saturate(142%);
      -webkit-backdrop-filter: blur(25px) saturate(142%);
      background-color: rgba(255, 255, 255, 0.57);
      border: 1px solid rgba(209, 213, 219, 0.3);

      .icon {
        @apply ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6;
        &:hover {
          @apply text-gray-100 dark:text-gray-800;
        }
      }
    }
  }

  @screen sm {
    #about-me {
      border-radius: 12rem 0 0 / 4rem 0 0;
    }
  }
}
</style>