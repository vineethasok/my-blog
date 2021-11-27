<template>
  <PostList :posts="posts" title="My Posts" />
</template>
<script>
import PostList from '~/components/PostList.vue'
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('date', 'desc')
      .only(['title', 'slug', 'date'])
      .fetch()
    return { posts }
  },
  components: { PostList },
  head() {
    return {
      title: 'Vineeth Asok Kumar | Blog',
    }
  },
}
</script>