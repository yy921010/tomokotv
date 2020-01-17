import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@plugins/i18n'
import '@plugins'
Vue.config.productionTip = false

// 如果是模拟数据，这边采用的mock 数据
if (process.env.VUE_APP_SERVICE_MODE === 'mock') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
