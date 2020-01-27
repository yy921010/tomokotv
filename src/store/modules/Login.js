import User from '@api/user'
import session from '@plugins/session'
let timeDownId = null

const state = {
  isLogin: false,
  accessToken: '',
  expireTime: null,
  isAutoLogin: false
}

const mutations = {
  SAVE_TOKEN (state, tokenData) {
    state.accessToken = tokenData.access_token
    state.expireTime = tokenData.expires_in
    session.put(
      'refreshToken',
      tokenData.refresh_token,
      tokenData.isAutoLogin
    )
    state.isAutoLogin = tokenData.isAutoLogin
  },
  CHANGE_LOGIN_STATUS (state, isLogin) {
    state.isLogin = isLogin
  }
}

const actions = {
  /**
   *
   * @param commit
   * @param username
   * @param password
   * @param $vm
   * @param isAutoLogin
   * @returns {Promise<void>}
   */
  async login ({ commit }, { username, password, isAutoLogin }) {
    if (username && password) {
      const result = await User.login({ username, password })
      if (result) {
        commit('SAVE_TOKEN', {
          access_token: result.access_token,
          refresh_token: result.refresh_token,
          expires_in: result.expires_in,
          isAutoLogin
        })
        commit('CHANGE_LOGIN_STATUS', true)
      }
      return result
    }
  },
  /**
   * 刷新token
   * @param commit
   * @param state
   * @param $vm
   * @returns {Promise<void>}
   */
  async beginFreshByTime ({ commit, state }) {
    const refreshToken = session.get('refreshToken')
    timeDownId = setTimeout(async () => {
      clearTimeout(timeDownId)
      if (refreshToken) {
        const newToken = await User.refreshToken(refreshToken)
        commit('SAVE_TOKEN', {
          access_token: newToken.access_token,
          refresh_token: newToken.refresh_token,
          expires_in: newToken.expires_in,
          isAutoLogin: state.isAutoLogin
        })
        commit('CHANGE_LOGIN_STATUS', true)
        this.dispatch('Login/beginFreshByTime')
      } else {
        commit('SAVE_TOKEN', {
          access_token: '',
          refresh_token: ''
        })
        commit('CHANGE_LOGIN_STATUS', false)
      }
    }, state.expireTime * 1000)
  },

  async reconnectToken ({ commit }, reconnected) {
    clearTimeout(timeDownId)
    await this.dispatch('Login/beginFreshByTime')
  },

  async revokeLogin ({ commit, state }) {
    await User.revokeToken(state.accessToken)
    commit('SAVE_TOKEN', {
      access_token: '',
      refresh_token: '',
      isAutoLogin: state.isAutoLogin
    })
    commit('CHANGE_LOGIN_STATUS', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
