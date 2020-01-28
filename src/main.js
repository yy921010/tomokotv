import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@plugins/i18n'
import '@plugins'
import Login from './mixin/Login'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mixins: [Login],
  mounted () {
    // 刷新浏览器
    store.dispatch('Login/startRefreshToken')
      .then(async () => {
        await this.timeToRefresh()
        await store.dispatch('Login/getUserInfo')
      })
  }
}).$mount('#app')
