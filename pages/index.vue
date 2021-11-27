<template>
  <div>
    <Greeting />
    <AboutMe />
    <Skills />
    <Timeline />
    <back-to-top
      visibleoffset="500"
      right="40px"
      bottom="40px"
      class="shadow-lg"
    >
      <PostList :posts="posts" title="Recent Posts" />
      <i data-feather="arrow-up"></i>
    </back-to-top>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('date', 'desc')
      .only(['title', 'slug', 'date'])
      .limit(3)
      .fetch()
    return { posts }
  },
  components: { PostList },
  head() {
    return {
      title: 'Vineeth Asok Kumar',
    }
  },
})
</script>
