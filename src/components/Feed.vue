<template>
  <div class="content">
    <div class="header">Hackweek News</div>
      <div class="feed">
        <div class="post" v-for="(post, index) in posts" v-bind:key="post.id">
          <div class="postIndex"><span>{{ index + 1}}.</span></div>
          <div class="postContents">
            <a target="_new" :href="post.url">{{ post.title }}</a>
            <div class="postMeta">
              <div>{{ post.score }}&nbsp;points</div>
              <router-link :to="post.by | createUserLink" class="userLink">&nbsp;{{ post.by }}</router-link>
              <div>&nbsp;| {{ post.descendants }}&nbsp;comments</div>
            </div>
          </div>
      </div>
    </div>
    <div class="footer">
      <router-link :to="page | createNextPageLink" class="moreButton">More</router-link>
      <hr class="footerSeparator" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api'

export default {
  props: ['page'],
  name: 'Feed',
  computed: mapState({
    posts: state => state.feed.page.posts,
    pageNumber: state => state.feed.page.number
  }),
  filters: {
    createUserLink: function(userid) {
      return `/user/${userid}`;
    },
    createNextPageLink: function(page) {
      const pageToLoad = page ? parseInt(page) + 1 : 1;
      return `/?p=${pageToLoad}`;
    },
  },
  watch: {
    '$route' (to, from) {
      api.loadPage(this.page);
    }
  },
  created: function() {
    const pageToLoad = this.page ? this.page : 0;
    api.loadTopStories(pageToLoad);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './feed.css'
</style>
