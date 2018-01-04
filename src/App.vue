<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import api from './api'
import store from './vuex/store'

export default {
  name: 'app',
  created() {
    api.loadTopStories();
  },
  store
}
</script>

<style>
#app {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
}
</style>
