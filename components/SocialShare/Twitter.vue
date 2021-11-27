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
        resp-sharing-button--twitter
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <i data-feather="twitter"></i>
      </div>
    </div>
  </a>
</template>

<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Twitter',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://twitter.com/intent/tweet/?text=${props.title}&url=https://www.vineethasok.com${route.value.path}`,
    };
  },
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;

  &:hover,
  &:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }
}
</style>
