import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

let messageTimer = null
let DELAY_TIME = 3000
const store = new Vuex.Store({
  modules,
  state: {
    message: '',
    isShowSnack: false
  },
  mutations: {
    showMessage (state, msg) {
      state.message = msg
      state.isShowSnack = true
      clearTimeout(messageTimer)
      messageTimer = setTimeout(() => {
        state.isShowSnack = false
        state.message = ''
      }, DELAY_TIME)
    }
  },
  strict: process.env.VUE_APP_SERVICE_MODE === 'dev'
})
export default store
