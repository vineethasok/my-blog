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
        resp-sharing-button--linkedin
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <i data-feather="linkedin"></i>
      </div>
    </div>
  </a>
</template>
<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Linkedin',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://www.linkedin.com/shareArticle?mini=true&url=https://www.vineethasok.com${route.value.path}&title=${props.title}&summary=${props.title}&source=https://www.vineethasok.com${route.value.path}`,
    }
  },
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--linkedin {
  background-color: #0077b5;
  border-color: #0077b5;

  &:hover,
  &:active {
    background-color: #046293;
    border-color: #046293;
  }
}
</style>
