import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import sessionManager from '@plugins/session'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    // todo 存在性能问题
    persistedState({
      storage: {
        getItem: key => sessionManager.get(key),
        setItem: (key, value) => sessionManager.put(key, value),
        removeItem: key => sessionManager.remove(key)
      }
    })],
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
