<template>
  <div class="post-container">
    <div>
      <div class="header-container">
        <div class="relative h-full w-full">
          <img :src="article.imgSrc" alt="Post Image" />
          <div class="header">
            <h1>{{ article.title }}</h1>
            <h3 class="text-sm">- {{ article.author }}</h3>
          </div>
          <div class="header-subcontainer">
            <h3>{{ article.date }}</h3>
            <SocialShare :title="article.title" />
          </div>
        </div>
      </div>
    </div>
    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
import SocialShare from '~/components/SocialShare/index.vue'
export default {
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()
    article.imgSrc = require(`assets/images/${article.slug}.png`)
    return { article }
  },
  components: { SocialShare },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            `Read more about ${this.article.title}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Read more about ${this.article.title}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.imgSrc,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Read more about ${this.article.title}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.imgSrc,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.article.imgSrc,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.title,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.post-container {
  @apply min-h-screen;

  ::v-deep article {
    @apply max-w-screen-lg mx-auto p-4;

    h1 {
      @apply text-3xl font-bold mb-3;
    }
    h2 {
      @apply text-2xl font-bold mb-3;
    }
    p {
      @apply mb-2;
    }
    img {
      @apply my-4;
    }
  }

  .header-container {
    @apply h-64 w-full;

    img {
      @apply h-full w-full object-cover;
    }

    .header{
      @apply absolute top-0 font-bold text-blue-400 dark:text-white mb-2 p-4;
      h1 {
        @apply text-2xl mb-2;
      }
      * {
        text-shadow: 2px 2px 4px #000;
      }
    }
    .header-subcontainer {
      @apply absolute inset-x-0 bottom-0 mb-1;

      h3 {
        @apply my-3 font-semibold text-blue-400 dark:text-white px-4;

        text-shadow: 2px 2px 4px #000;
      }
    }
  }

  @screen lg {
    @apply grid mt-10;

    gap: 1rem;
    grid-template-columns: 20vw 1fr;

    .header-container {
      @apply fixed bottom-0 mb-auto pl-4;

      top: 10%;
      max-width: 20vw;

      img {
        @apply w-full object-cover;
      }
      .header {
        @apply relative bottom-auto;

        * {
          text-shadow: none;
        }
      }
      .header-subcontainer {
        @apply relative bottom-auto;
        h3 {
          text-shadow: none;
        }
      }
    }
  }
}
</style>