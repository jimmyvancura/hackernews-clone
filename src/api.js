import axios from 'axios';
import store from './vuex/store'

const PAGE_SIZE = 5;

const api = {
  loadTopStories: () => {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        store.dispatch({
          type: 'updateFeed',
          items: response.data
        })
        api.hydratePosts(response.data.slice(0,PAGE_SIZE), 0);
    })
    .catch(e => {
      console.log(e);
    })
  },

  nextPage: () => {
    const nextPageNumber = store.state.feed.page.number + 1;
    const startIndex = nextPageNumber * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    api.hydratePosts(store.state.feed.posts.slice(startIndex, endIndex), nextPageNumber);
  },

  hydratePosts: (postIds, pageNumber) => {
    const promises = [];
    postIds.forEach(postId => {
      promises.push(axios(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`));
    });
    Promise.all(promises)
      .then(values => {
        store.dispatch({
          type: 'setPage',
          items: values.map(value => value.data),
          pageNumber
        })
      }).catch(e => console.log(e));
  }
}

export default api;