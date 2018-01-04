import axios from 'axios';
import store from './vuex/store'

const api = {
  loadTopStories: () => {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        store.dispatch({
          type: 'updateFeed',
          items: response.data
        })
        api.hydratePosts(response.data.slice(0,2));
    })
    .catch(e => {
      console.log(e);
    })
  },

  hydratePosts: (postIds) => {
    const promises = [];
    postIds.forEach(postId => {
      promises.push(axios(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`));
    });
    Promise.all(promises)
      .then(values => {
        store.dispatch({
          type: 'hydratePosts',
          items: values.map(value => value.data)
        })
      }).catch(e => console.log(e));
  }
}

export default api;