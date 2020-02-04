const state = {
  visibleLogin: false,
  title: ''
}
const getters = {
  normalVisible: state => state.visibleLogin
}

const mutations = {
  login (state, { title, isOpen }) {
    state.visibleLogin = isOpen
    state.title = title
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
  async close ({ commit }, { name }) {
    if (name) {
      const isOpen = false
      const openDialogStr = `${name}`
      commit(openDialogStr, { isOpen })
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
