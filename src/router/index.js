import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import City from '@/assets/pages/city'
// import Detail from '@/assets/pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      // 异步加载组件
      component: () => import('@/components/home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/assets/pages/city')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/assets/pages/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
