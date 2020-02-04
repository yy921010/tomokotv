
let confirmCallback = () => {}
let cancelCallback = () => {}
const state = {
  visibleLogin: false,
  title: '',
  visibleConfirm: false,
  contentConfirm: ''
}
const getters = {
  normalVisible: state => state.visibleLogin || state.visibleConfirm
}

const mutations = {
  login (state, { title, isOpen }) {
    state.visibleLogin = isOpen
    state.title = title
  },
  confirm (state, { isOpen, opts }) {
    state.visibleConfirm = isOpen
    state.contentConfirm = opts.content
  },
  confirmCallback (state) {
    state.visibleConfirm = false
    state.contentConfirm = ''
    confirmCallback()
  },
  cancelCallback (state) {
    state.visibleConfirm = false
    state.contentConfirm = ''
    cancelCallback()
  }
}

const actions = {
  open ({ commit }, { name, title, opts }) {
    if (name) {
      const isOpen = true
      const openDialogStr = `${name}`
      commit(openDialogStr, { title, isOpen, opts })
    }
  },
  async close ({ commit }, { name, closeType }) {
    if (name) {
      const isOpen = false
      const openDialogStr = `${name}`
      commit(openDialogStr, { isOpen })
    }
  },
  confirm ({ commit }, { content, yesCallback, abortCallback }) {
    commit('confirm', {
      isOpen: true,
      opts: {
        content
      }
    })
    if (yesCallback) {
      confirmCallback = yesCallback
    }
    if (abortCallback) {
      cancelCallback = abortCallback
    }
  },
  closeAll () {}
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
