<template>
  <a
    class="resp-sharing-button__link"
    :href="currentUrl"
    target="_blank"
    rel="noopener"
    aria-label=""
  >
    <div
      class="
        resp-sharing-button
        resp-sharing-button--facebook
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <i data-feather="facebook"></i>
      </div>
    </div>
  </a>
</template>

<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Facebook',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://facebook.com/sharer/sharer.php?u=${route.value.fullPath}`
    };
  }
})
</script>

<style lang='scss' scoped>
.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;

  &:hover,
  &:active {
    background-color: #2d4373;
    border-color: #2d4373;
  }
}
</style>
