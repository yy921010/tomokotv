let confirmCallback = () => {}
let cancelCallback = () => {}

const state = {
  visibleLogin: false,
  title: '',
  visibleConfirm: false,
  contentConfirm: '',
  visibleProfile: false,
  profile: {},
  profileDialogTitle: ''
}
const getters = {
  normalVisible: state =>
    state.visibleLogin || state.visibleConfirm || state.visibleProfile
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
    state.visibleProfile = false
    state.contentConfirm = ''
    confirmCallback(state.profile)
    confirmCallback = () => {}
  },
  cancelCallback (state) {
    state.visibleConfirm = false
    state.visibleProfile = false
    state.contentConfirm = ''
    state.profile = {}
    cancelCallback()
    cancelCallback = () => {}
  },
  setProfile (state, { avatarUrl, nickname, password, ageLevel }) {
    state.profile.avatarUrl = avatarUrl
    state.profile.nickname = nickname
    state.profile.password = password
    state.profile.ageLevel = ageLevel
  },
  setProfileOpen (state) {
    state.visibleProfile = true
  },
  setProfileDialog (state, title) {
    state.profileDialogTitle = title
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
  profile (
    { commit },
    { avatarUrl,
      nickname,
      password,
      ageLevel,
      yesCallback,
      abortCallback,
      dialogTitle
    }
  ) {
    commit('setProfileDialog', dialogTitle)
    commit('setProfileOpen')
    commit('setProfile', {
      avatarUrl,
      nickname,
      password,
      ageLevel
    })
    if (yesCallback) {
      confirmCallback = yesCallback
    }
    if (abortCallback) {
      cancelCallback = abortCallback
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
