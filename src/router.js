import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      // redirect:'/home',
      component: Home,
      children:[
        {
          path: '/parent',
          name: '我是parent',
          meta:{
            icon:'ios-navigate'
          },
          // name: 'parent',
          // component: Home,
          // route level code-splitting
          // this generates a separate chunk (parent.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "parent" */ './views/parent.vue'),
        },
        {
          path: '/gogoromap',
          name: '地圖總攬',
          meta:{
            icon:'md-map'
          },
          component: () => import( /* webpackChunkName: "gogoromap" */ './views/gogoroMapIndex.vue'),
          children:[
            {
              path: '',
              name: '總攬',
              component: () => import( /* webpackChunkName: "gogoromap" */ './views/gogoroMap.vue'),
            },
          //   {
          //     path: '/map',
          //     name: 'gogoromap',
          //     component: () => import( /* webpackChunkName: "gogorolist" */ './views/gogoroMap.vue')
          //  }
          ]
        },
        {
          path: '/gogorolist',
          name: 'gogo列表',
          meta:{
            icon:'md-list'
          },
          component: () => import( /* webpackChunkName: "gogoromap" */ './views/gogoroMapIndex.vue'),
          children:[
            {
              path: '',
              name: '列表',
              component: () => import( /* webpackChunkName: "gogorolist" */ './views/gogoroList.vue'),
            },
          //   {
          //     path: '/list',
          //     name: 'gogorolist',
          //     component: () => import( /* webpackChunkName: "gogorolist" */ './views/gogoroList.vue')
          //  }
          ]
        },
        {
          path: '/four',
          name: 'four',
          component: () => import( /* webpackChunkName: "gogorolist" */ './views/four.vue')
        }

      ]
    },
  ]
})