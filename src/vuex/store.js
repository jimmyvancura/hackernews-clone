import Vuex from 'vuex';
import Vue from 'vue'
import feed from './feed';
import user from './user';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    feed,
    user
  }
})

export default store;