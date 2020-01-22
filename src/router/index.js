import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

import TVGuideModule from './Guide'
import HOME_MODULE from './Home'
import MY_MODULE from './My'
Vue.use(VueRouter)

const routes = [
  ...TVGuideModule,
  ...HOME_MODULE,
  ...MY_MODULE
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }), // switch page with scrollX ==>0
  routes
})

router.beforeEach((to, from, next) => {
  const { meta } = to
  if (meta.type && meta.type === 'sync') {
    Store.dispatch('Header/setNavTitle', meta.title)
  }
  next()
})

export default router
