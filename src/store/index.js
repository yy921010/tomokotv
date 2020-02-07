import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import persistedState from 'vuex-persistedstate'
import throttle from 'lodash/throttle'
import session from '../plugins/session'
Vue.use(Vuex)

let messageTimer = null
let DELAY_TIME = 3000

let throttleSaveSate = throttle(
  function (key, value) {
    session.put(key, value)
  },
  1000,
  {
    leading: false,
    trailing: true
  }
)

const store = new Vuex.Store({
  plugins: [
    persistedState({
      key: 'vuex',
      storage: {
        getItem: key => session.get(key),
        setItem: (key, value) => {
          throttleSaveSate(key, value)
        },
        removeItem: key => {
          session.remove(key)
        }
      },
      reducer: value => value // 用来处理state
    })
  ],
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
