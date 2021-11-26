<template>
  <a
    class="resp-sharing-button__link"
    :href="currentUrl"
    target="_self"
    rel="noopener"
    aria-label=""
  >
    <div
      class="
        resp-sharing-button
        resp-sharing-button--email
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <i data-feather="mail"></i>
      </div>
    </div>
  </a>
</template>
<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PostCard',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `mailto:?subject=${props.title}&body=${route.value.fullPath}`,
    }
  },
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--email {
  background-color: #777;
  border-color: #777;

  &:hover,
  &:active {
    background-color: #5e5e5e;
    border-color: #5e5e5e;
  }
}
</style>
