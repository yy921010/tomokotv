import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

import TVGuideModule from './modules/Guide'
import HOME_MODULE from './modules/Home'
import MY_MODULE from './modules/My'
import NOT_FOUND_MODULE from './modules/NotFound'
import DETAIL_MODULE from './modules/Detail'

// to fixed: https://blog.csdn.net/weixin_43202608/article/details/98884620
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  ...TVGuideModule,
  ...HOME_MODULE,
  ...MY_MODULE,
  ...NOT_FOUND_MODULE,
  ...DETAIL_MODULE
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // switch page with scrollX ==>0
  routes
})

router.beforeEach((to, from, next) => {
  const { meta } = to
  if (meta.type && meta.type === 'sync') {
    Store.dispatch('Header/setNavTitle', meta.title)
    document.title = `${meta.title} | tomokotv`
  }
  let accessToken = Store.state.Login.accessToken
  if (meta.isNeedLogin) {
    if (accessToken) {
      next()
    } else {
      process.env.VUE_APP_SERVICE_MODE === 'prod' ? next('/') : next()
    }
  } else {
    next()
  }
})

export default router
