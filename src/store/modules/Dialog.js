import isObject from 'lodash/isObject'
let callConfirm = () => {}
let callCancel = () => {}

let cacheObject = {}
const state = {
  dialogTitle: '',
  loginShow: false,
  confirmShow: false,
  profileShow: false,
  content: null
}
const getters = {
  normalVisible: state =>
    state.loginShow || state.confirmShow || state.profileShow
}

const mutations = {

  confirm (state, name) {
    let visibleStr = `${name}Show`
    state[visibleStr] = false
    console.log(state.content)
    callConfirm(state.content)
    cacheObject = {}
    callConfirm = () => {}
  },

  cancel (state, name) {
    let visibleStr = `${name}Show`
    state[visibleStr] = false
    state.content = null
    cacheObject = {}
    callCancel()
    callCancel = () => {}
  },

  setDialogTitle (state, title) {
    state.dialogTitle = title
  },

  openDialog (state, name) {
    let visibleStr = `${name}Show`
    state[visibleStr] = true
  },

  transitData (state, content) {
    if (isObject(content)) {
      content = { ...cacheObject, ...content }
      cacheObject = content
    }
    state.content = content
  }
}

const actions = {
  /**
   * 统一处理的dialog 逻辑
   * @param commit
   * @param name
   * @param content
   * @param title
   * @param yesCallback
   * @param abortCallback
   */
  openDialog ({ commit }, { name, title, content, confirm, cancel }) {
    if (name) {
      commit('openDialog', name)
      commit('transitData', content)
      commit('setDialogTitle', title)
      if (confirm) {
        callConfirm = confirm
      }
      if (cancel) {
        callCancel = cancel
      }
    } else {
      console.error('[state] [dialog] name is empty')
    }
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
