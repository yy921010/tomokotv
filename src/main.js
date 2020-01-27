import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@plugins/i18n'
import '@plugins'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted () {
    // 刷新浏览器
    store.dispatch('Login/beginFreshByTime')
  }
}).$mount('#app')
