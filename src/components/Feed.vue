<template>
  <div class="feed">
    FEEDME
    <div v-for="post in posts" v-bind:key="post.id">
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
      <div>{{ post.by }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api'

export default {
  name: 'Feed',
  computed: mapState({
    posts: state => state.feed.page.posts
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
