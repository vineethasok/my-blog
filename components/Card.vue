<template>
  <router-link :to="slug" class="box" :class="slug" rel="prefetch">
    <div class="date">
      <h4>{{ date }}</h4>
    </div>
    <h1>{{ title }}</h1>
  </router-link>
</template>

<script lang='ts'>
export default {
  name: 'PostCard',
  props: {
    title: String,
    date: String,
    slug: String,
  },
}
</script>

<style>
.box {
  @apply relative text-center mx-auto my-4 rounded-md bg-cover bg-no-repeat bg-center;

  width: 300px;
  height: 400px;
  transition: 200ms ease-in-out;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.box:hover {
  transform: scale(0.9, 0.9);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}
.box h1 {
  color: #fff;
  padding: 30px;
  margin-top: 100px;
  text-align: center;
  font-weight: 100;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
}

.date {
  position: absolute;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}

.date h4 {
  color: #fff;
  font-weight: 300;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
}
</style>

