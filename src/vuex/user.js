export default {
  state: {
    user: null
  },
  mutations: {
    updateUser (state, payload) {
      console.log(payload)
      state.user = payload.user;
      return state;
    }
  },
  actions: {
    updateUser (context, payload) {
      context.commit('updateUser', payload)
    }
  }
}