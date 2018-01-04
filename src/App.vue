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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
