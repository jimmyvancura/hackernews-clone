export default {
  state: {
    posts: [],
    page: {
      number: -1,
      posts: []
    }
  },
  mutations: {
    updateFeed (state, payload) {
      state.posts = payload.items;
      return state;
    },
    hydratePosts (state, payload) {
      state.page.number = 0;
      state.page.posts = payload.items;
      return state;
    }
  },
  actions: {
    updateFeed (context, payload) {
      context.commit('updateFeed', payload)
    },
    hydratePosts (context, payload) {
      context.commit('hydratePosts', payload)
    }
  }
}