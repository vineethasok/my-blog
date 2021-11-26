<template>
  <div>
    <h1 class="text-center text-4xl font-montez my-4 font-bold">{{ title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-screen-lg">
      <Card
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :slug="post.slug"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Card from './Card.vue'

export default {
  name: 'RecentPosts',
  components: { Card },
  props: {
    posts: Array,
    title: String
  },
}
</script>