<template>
  <div class="social-share">
    <Facebook :title="currentTitle" />
    <Twitter :title="currentTitle" />
    <Tumblr :title="currentTitle" />
    <Mail :title="currentTitle" />
    <Pinterest :title="currentTitle" />
    <Linkedin :title="currentTitle" />
    <Reddit :title="currentTitle" />
    <Whatsapp :title="currentTitle" />
    <Telegram :title="currentTitle" />
  </div>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
import feather from 'feather-icons'

import Facebook from './Facebook.vue'
import Twitter from './Twitter.vue'
import Tumblr from './Tumblr.vue'
import Whatsapp from './Whatsapp.vue'
import Pinterest from './Pinterest.vue'
import Linkedin from './Linkedin.vue'
import Reddit from './Reddit.vue'
import Telegram from './Telegram.vue'
import Mail from './Mail.vue'

export default defineComponent({
  name: 'SocialShare',
  components: {
    Facebook,
    Twitter,
    Tumblr,
    Whatsapp,
    Pinterest,
    Linkedin,
    Reddit,
    Telegram,
    Mail,
  },
  props: {
    title: String,
  },
  setup(props) {
    return {
      currentTitle: encodeURIComponent(props.title || '')
    };
  },
  mounted() {
    feather.replace()
  },
})
</script>

<style lang="scss" scoped>
.social-share {
  @apply flex gap-2 flex-wrap items-center justify-center;
  ::v-deep .resp-sharing-button__link {
    @apply inline-block text-white;

    .resp-sharing-button {
      @apply p-2 rounded-md transition-all flex;

      &--small svg {
        margin: 0;
        vertical-align: middle;
      }
    }

    .resp-sharing-button__icon {
      @apply inline-block;

      stroke: #fff;
      fill: none;
      svg {
        @apply w-4 h-4;

        vertical-align: top;
      }
      &--solidcircle {
        fill: #fff;
        stroke: none;
      }
    }
  }
}
</style>
