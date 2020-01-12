import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  strict: process.env.VUE_APP_SERVICE_MODE === 'dev'
})
export default store
