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
        resp-sharing-button--telegram
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5.5 5.65.5 12 5.65 23.5 12 23.5zM2.505 11.053c-.31.118-.505.738-.505.738s.203.62.513.737l3.636 1.355 1.417 4.557a.787.787 0 0 0 1.25.375l2.115-1.72a.29.29 0 0 1 .353-.01L15.1 19.85a.786.786 0 0 0 .746.095.786.786 0 0 0 .487-.573l2.793-13.426a.787.787 0 0 0-1.054-.893l-15.568 6z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </a>
</template>
<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Telegram',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://telegram.me/share/url?text=${props.title}&url=https://www.vineethasok.com${route.value.path}`
    };
  }
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--telegram {
  background-color: #54a9eb;
  &:hover {
    background-color: #4b97d1;
  }
}
</style>
