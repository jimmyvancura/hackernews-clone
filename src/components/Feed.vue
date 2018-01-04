<template>
  <div class="content">
    <div class="header">Hackweek News</div>
      <div class="feed">
        <div class="post" v-for="post in posts" v-bind:key="post.id">
          <a :href="post.url">{{ post.title }}</a>
          <div class="postMeta">
            <div>{{ post.score }} points</div>
            <div>&nbsp;by {{ post.by }}</div>
            <div>&nbsp;| {{ post.descendants }} comments</div>
          </div>
      </div>
    </div>
    <div class="footer">
      <!-- <a :href='nextPageRef' v-on:click="nextPage" style="margin-left: 10px">More</a> -->
      <a href='#' v-on:click="nextPage" style="margin-left: 10px">More</a>
      <hr style='border-top: 2px solid #ff6600; margin-top: 10px'/>
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
  }),
  methods: {
    nextPage: () => {
      api.nextPage();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-right: 80px;
}
.header {
  background-color: #ff6600;
  color: black;
  padding: 5px;
  font-weight: bold;
}
.feed {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #f6f6ef;
}
.postTitle {
  display: flex;
  position: relative;
}
.postNumber {
  color: #828282;
}
.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
}
.postMeta {
  display: flex;
  font-size: 7pt;
  color: #828282;
}
.footer {
  padding-top: 10px;
  height: 100px;
  background-color: #f6f6ef;
}
a:visited {
    color: #828282;
    text-decoration: none;
}
a:link {
    color: #000000;
    text-decoration: none;
}
</style>
