<template>
  <div class="content">
    <div class="header">Hackweek News</div>
    <div class="user">
      <div>user: {{ user.id }}</div>
      <div>created: {{ user.created }}</div>
      <div>karma: {{ user.karma }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import api from '../api'

export default {
  props: ['userid'],
  name: 'User',
  computed: mapState({
    user: state => state.user.user
  }),
  created: function() {
    api.loadUser(this.userid);
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
.user {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #f6f6ef;
}
</style>
