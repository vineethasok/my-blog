<template>
  <button
    type="button"
    aria-label="Theme Switcher"
    class="flex rounded-full"
    :class="$colorMode.preference"
    @click="toggleTheme"
  >
		<i
			key='sun'
			data-feather="sun"
			class="sun text-gray-200 hover:text-gray-50 w-5"
		></i>
		<i
			key="moon"
			data-feather="moon"
			class="moon text-gray-900 hover:text-gray-100 w-5 w-5"
		></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import feather from 'feather-icons'

export default defineComponent({
  mounted() {
    feather.replace()
  },
	methods: {
		toggleTheme() {
			this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light'
		},
	},
})
</script>

<style scoped>
    svg {
      @apply hidden;
    }
  .light .moon, .dark .sun {
    @apply block;
  }
</style>

