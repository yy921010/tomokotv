import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

import TVGuideModule from './Guide'
import HOME_MODULE from './Home'
import MY_MODULE from './My'
import NOT_FOUND_MODULE from './NotFound'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  ...TVGuideModule,
  ...HOME_MODULE,
  ...MY_MODULE,
  ...NOT_FOUND_MODULE
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
