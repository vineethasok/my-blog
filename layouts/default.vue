<template>
  <div class="va-container">
    <Navigation />
    <Nuxt />
		<Footer />
    <BackToTop
      visibleoffset="500"
      right="auto"
      bottom="40px"
      class="shadow-lg"
    >
      <i data-feather="arrow-up"></i>
    </BackToTop>
  </div>
</template>
<style>
.va-container {
	@apply pt-0.5 mr-auto bg-blend-multiply bg-white bg-white dark:bg-gray-800;

  background-image: url("assets/background.png");; 
}
#app {
	@apply font-montserrat text-center;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.vue-back-to-top {
	@apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full ml-2;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>
