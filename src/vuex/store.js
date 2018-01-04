import Vuex from 'vuex';
import Vue from 'vue'
import feed from './feed';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    feed
  }
})

export default store;