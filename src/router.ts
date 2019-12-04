import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artist/:name/:id',
      name: 'artistById',
      component: () => import('./views/Artist'),
    },
    {
      path: '/artist/:name',
      name: 'artistByName',
      component: () => import('./views/Artist'),
    },
  ],
})
