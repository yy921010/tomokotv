const state = {
  title: ''
}

const mutations = {
  SET_NAV_TITLE (state, title) {
    state.title = title
  }
}

const actions = {
  setNavTitle ({ commit }, data) {
    commit('SET_NAV_TITLE', '电视节目单')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
