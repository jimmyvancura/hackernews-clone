import axios from 'axios';
import store from './vuex/store'

const PAGE_SIZE = 15;

const api = {
  loadTopStories: (pageNumber) => {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        store.dispatch({
          type: 'updateFeed',
          items: response.data
        })
        api.queryPage(api.getPagePostIds(pageNumber), pageNumber);
    })
    .catch(e => {
      console.log(e);
    })
  },

  getPagePostIds: (pageNumber) => {
    const nextPageNumber = pageNumber;
    const startIndex = nextPageNumber * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return store.state.feed.posts.slice(startIndex, endIndex)
  },

  loadPage: (pageNumber) => {
    api.queryPage(api.getPagePostIds(pageNumber), pageNumber);
  },

  queryPage: (postIds, pageNumber) => {
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
  },

  loadUser: (userid, userLoadedCallback) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${userid}.json`)
      .then(response => {
        userLoadedCallback(response.data)
    })
    .catch(e => {
      console.log(e);
    })
  }
}

export default api;