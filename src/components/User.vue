<template>
  <div class="content">
    <div class="header">Hackweek News</div>
    <div class="user">youzer</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api'

export default {
  name: 'User',
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
.user {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  background-color: #f6f6ef;
}
</style>
