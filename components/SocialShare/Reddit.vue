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
        resp-sharing-button--reddit
        resp-sharing-button--small
      "
    >
      <div
        aria-hidden="true"
        class="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="9.391" cy="13.392" r=".978" />
          <path
            d="M14.057 15.814c-1.14.66-2.987.655-4.122-.004-.238-.138-.545-.058-.684.182-.13.24-.05.545.19.685.72.417 1.63.646 2.568.646.93 0 1.84-.228 2.558-.642.24-.13.32-.44.185-.68-.14-.24-.445-.32-.683-.18zM5 12.086c0 .41.23.78.568.978.27-.662.735-1.264 1.353-1.774-.2-.207-.48-.334-.79-.334-.62 0-1.13.507-1.13 1.13z"
          />
          <path
            d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.673 14.055c.01.104.022.208.022.314 0 2.61-3.004 4.73-6.695 4.73s-6.695-2.126-6.695-4.74c0-.105.013-.21.022-.313C4.537 13.73 4 12.97 4 12.08c0-1.173.956-2.13 2.13-2.13.63 0 1.218.29 1.618.757 1.04-.607 2.345-.99 3.77-1.063.057-.803.308-2.33 1.388-2.95.633-.366 1.417-.323 2.322.085.302-.81 1.076-1.397 1.99-1.397 1.174 0 2.13.96 2.13 2.13 0 1.177-.956 2.133-2.13 2.133-1.065 0-1.942-.79-2.098-1.81-.734-.4-1.315-.506-1.716-.276-.6.346-.818 1.395-.88 2.087 1.407.08 2.697.46 3.728 1.065.4-.468.987-.756 1.617-.756 1.17 0 2.13.953 2.13 2.13 0 .89-.54 1.65-1.33 1.97z"
          />
          <circle cx="14.609" cy="13.391" r=".978" />
          <path
            d="M17.87 10.956c-.302 0-.583.128-.79.334.616.51 1.082 1.112 1.352 1.774.34-.197.568-.566.568-.978 0-.623-.507-1.13-1.13-1.13z"
          />
        </svg>
      </div>
    </div>
  </a>
</template>
<script lang='ts'>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Reddit',
  props: {
    title: String,
  },
  setup(props) {
    const route = useRoute()
    return {
      currentUrl: `https://reddit.com/submit/?url=https://www.vineethasok.com${route.value.path}&resubmit=true&title=${props.title}`
    };
  }
})
</script>

<style lang="scss" scoped>
.resp-sharing-button--reddit {
  background-color: #5f99cf;
  border-color: #5f99cf;

&:hover,
&:active {
  background-color: #3a80c1;
  border-color: #3a80c1;
  }
}
</style>
