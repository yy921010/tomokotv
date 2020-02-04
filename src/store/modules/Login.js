import { login, refreshToken, revokeToken, getUserInfo } from '@api/user'
import session from '@plugins/session'
let timeDownId = null

const state = {
  isLogin: false,
  accessToken: '',
  expireTime: null,
  username: null,
  userInfo: {}
}

const mutations = {
  SAVE_TOKEN (state, tokenData) {
    state.accessToken = tokenData.access_token
    state.expireTime = tokenData.expires_in
    const isAutoLogin = session.get('isAutoLogin')
    session.put('refreshToken', tokenData.refresh_token, isAutoLogin)
  },

  CLEAR_TOKEN (state) {
    state.accessToken = ''
    state.expireTime = null
    session.remove('refreshToken')
    session.remove('username')
  },

  CHANGE_LOGIN_STATUS (state, isLogin) {
    state.isLogin = isLogin
  },

  SAVE_USER_NAME (state, username) {
    state.username = username
    session.put('username', username, true)
  },

  SAVE_USER_INFO (state, { nickName, username, avatarUrl, ageLevel, userType, userId }) {
    state.userInfo = {
      nickName,
      username,
      avatarUrl,
      ageLevel,
      userType,
      userId
    }
  }

}

const actions = {
  /**
   *
   * @param commit
   * @param username
   * @param password
   * @param isAutoLogin
   * @returns {Promise<void>}
   */
  async getToken ({ commit }, { username, password, isAutoLogin }) {
    if (username && password) {
      const result = await login({ username, password })
      if (result) {
        commit('SAVE_TOKEN', {
          access_token: result.access_token,
          refresh_token: result.refresh_token,
          expires_in: result.expires_in
        })
        commit('SAVE_USER_NAME', username)
        session.put('isAutoLogin', isAutoLogin) // check autoLogin
        commit('CHANGE_LOGIN_STATUS', true)
      }
      return result
    }
  },

  async startRefreshToken ({ commit }) {
    const refreshTokenStr = session.get('refreshToken')
    return new Promise(async (resolve, reject) => {
      if (refreshTokenStr) {
        const newToken = await refreshToken(refreshTokenStr)
        commit('SAVE_TOKEN', {
          access_token: newToken.access_token,
          refresh_token: newToken.refresh_token,
          expires_in: newToken.expires_in
        })
        commit('CHANGE_LOGIN_STATUS', true)
        resolve()
      } else {
        commit('CLEAR_TOKEN')
        commit('CHANGE_LOGIN_STATUS', false)
        reject(new Error('Refresh Token Storage is Empty'))
      }
    })
  },

  async reconnectToken ({ commit }, { url, option, method }) {
    clearTimeout(timeDownId)
    await this.dispatch('Login/beginFreshByTime')
  },

  async logout ({ commit, state }) {
    await revokeToken(state.accessToken)
    commit('CLEAR_TOKEN')
    commit('CHANGE_LOGIN_STATUS', false)
  },

  async getUserInfo ({ commit, state }) {
    const username = state.username || session.get('username')
    const result = await getUserInfo(username)
    commit('SAVE_USER_INFO', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
