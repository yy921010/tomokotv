import { login, refreshToken, revokeToken, getUserInfo } from '@api/user'
import isEmpty from 'lodash/isEmpty'
import session from '@plugins/session'
let timeDownId = null

const state = {
  isLogin: false,
  accessToken: '',
  expireTime: null,
  isAuto: false,
  userInfo: {},
  errorMsg: '',
  inputError: {
    username: false,
    password: false
  }
}

const mutations = {
  SAVE_TOKEN (state, tokenData) {
    state.accessToken = tokenData.access_token
    state.expireTime = tokenData.expires_in
    state.isAuto = tokenData.isAuto
    session.put('refreshToken', tokenData.refresh_token, state.isAuto)
  },

  CLEAR_TOKEN (state) {
    state.accessToken = ''
    state.expireTime = null
    state.userInfo = {}
    session.remove('refreshToken')
  },

  CHANGE_LOGIN_STATUS (state, isLogin) {
    state.isLogin = isLogin
  },

  SAVE_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  },

  SET_ERROR_TIP (state, msg) {
    state.errorMsg = msg
  },

  SET_INPUT_ERROR_FOCUS (state, { username, password }) {
    state.inputError.username = false
    state.inputError.password = false
    if (username) {
      state.inputError.username = true
    }
    if (password) {
      state.inputError.password = true
    }
  }

}

const actions = {
  /**
   * 登陆，调用接口
   * @param commit
   * @param username
   * @param password
   * @param isAuto
   * @param dispatch
   * @returns {Promise<void>}
   */
  async login ({ commit, dispatch }, { username, password, isAuto }) {
    const result = await login({ username, password })
    if (!isEmpty(result)) {
      commit('SAVE_TOKEN', {
        access_token: result.access_token,
        refresh_token: result.refresh_token,
        expires_in: result.expires_in,
        isAuto
      })
      await dispatch('getUserInfo')
      await dispatch('timeDown2Refresh')
      commit('CHANGE_LOGIN_STATUS', true)
    }
  },
  /**
   * 倒计时刷新
   * @param state
   * @param dispatch
   * @returns {Promise<void>}
   */
  async timeDown2Refresh ({ state, dispatch }) {
    timeDownId = setTimeout(async () => {
      clearTimeout(timeDownId)
      await dispatch('startRefreshToken')
    }, state.expireTime * 1000)
  },
  /**
   * 刷新
   * @param commit
   * @param dispatch
   * @returns {Promise<unknown>}
   */
  async startRefreshToken ({ commit, dispatch }) {
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
        // 重新触发刷新
        await dispatch('timeDown2Refresh')
        resolve()
      } else {
        clearTimeout(timeDownId)
        commit('CLEAR_TOKEN')
        commit('CHANGE_LOGIN_STATUS', false)
        reject(new Error('Refresh Token Storage is Empty'))
      }
    })
  },
  /**
   * 当接口访问出现token 过期，则重新进行token认证
   * @param dispatch
   * @param url
   * @param option
   * @param method
   * @returns {Promise<void>}
   */
  async reconnectToken ({ dispatch }, { url, option, method }) {
    clearTimeout(timeDownId)
    await dispatch('startRefreshToken')
  },

  /**
   * 退出登陆
   * @param commit
   * @param state
   * @returns {Promise<void>}
   */
  async logout ({ commit, state }) {
    await revokeToken(state.accessToken)
    commit('CLEAR_TOKEN')
    commit('CHANGE_LOGIN_STATUS', false)
  },
  /**
   * 得到用户信息
   * @param commit
   * @param state
   * @returns {Promise<void>}
   */
  async getUserInfo ({ commit, state }) {
    const username = state.username
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
