<template>
  <div class="content">
    <div class="header">Hackweek News</div>
    <div class="user" v-if="user">
      <div class="userField">user: {{ user.id }}</div>
      <div class="userField">created: {{ user.created | formatCreated }}</div>
      <div class="userField">karma: {{ user.karma }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
import api from '../api'

export default {
  props: ['userid'],
  name: 'User',
  data() {
    return {
      user: {}
    }
  },
  filters: {
    formatCreated: function(created) {
      return moment(created*1000).format('LLL');
    },
  },
  created: function() {
    api.loadUser(this.userid, (user) => this.user = user);
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
.userField {
  margin-bottom: 5px;
}
</style>
