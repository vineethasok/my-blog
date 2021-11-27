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
        resp-sharing-button--tumblr
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          xml:space="preserve"
        >
          <path
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Tumbr',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${props.title}&caption=${props.title}&content=https://www.vineethasok.com${route.value.path}&canonicalUrl=https://www.vineethasok.com${route.value.path}&shareSource=tumblr_share_button`,
    }
  },
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--tumblr {
  background-color: #35465c;
  border-color: #35465c;

  &:hover,
  &:active {
    background-color: #222d3c;
    border-color: #222d3c;
  }
}
</style>
