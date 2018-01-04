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
    setPage (state, payload) {
      state.page.number = payload.pageNumber;
      state.page.posts = payload.items;
      return state;
    }
  },
  actions: {
    updateFeed (context, payload) {
      context.commit('updateFeed', payload)
    },
    setPage (context, payload) {
      context.commit('setPage', payload)
    }
  }
}