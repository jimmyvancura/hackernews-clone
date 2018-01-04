import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
      props: (route) => ({
        page: route.query.p
      })
    },
    {
      path: '/user/:userid',
      name: 'User',
      component: User,
      props: true
    }
  ]
})
