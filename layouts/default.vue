<template>
  <div class="va-container">
    <Navigation />
    <Nuxt />
		<Footer />
  </div>
</template>
<style>
.va-container {
	@apply pt-0.5 mx-auto bg-blend-multiply bg-white bg-white dark:bg-gray-800;

  background-image: url("assets/background.png");; 
}
#app {
	@apply font-montserrat text-center;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.vue-back-to-top {
	@apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;

	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
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
