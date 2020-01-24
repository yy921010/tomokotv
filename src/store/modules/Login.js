import User from '@api/user'
let timeDownId = null

const state = {
  isLogin: false,
  accessToken: '',
  expireTime: null
}

const mutations = {
  SAVE_TOKEN (state, tokenData) {
    state.accessToken = tokenData.access_token
    state.expireTime = tokenData.expires_in
    const vueScope = tokenData.$vm
    console.log(tokenData.refresh_token)
    vueScope.$session.put(
      'refreshToken',
      tokenData.refresh_token,
      tokenData.isAutoLogin
    )
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
  async login ({ commit }, { username, password, $vm, isAutoLogin }) {
    if (username && password) {
      const result = await User.login({ username, password })
      if (result) {
        commit('SAVE_TOKEN', {
          access_token: result.access_token,
          refresh_token: result.refresh_token,
          expires_in: result.expires_in,
          $vm,
          isAutoLogin
        })
        commit('CHANGE_LOGIN_STATUS', true)
      }
      return result
    }
  },

  async beginFreshByTime ({ commit, state }, { $vm }) {
    const refreshToken = $vm.$session.get('refreshToken')
    clearTimeout(timeDownId)
    timeDownId = setTimeout(async () => {
      if (!$vm.$_.isEmpty(refreshToken)) {
        const newToken = await User.refreshToken(refreshToken)
        commit('SAVE_TOKEN', {
          access_token: newToken.access_token,
          refresh_token: newToken.refresh_token,
          $vm
        })
        commit('CHANGE_LOGIN_STATUS', true)
      } else {
        commit('SAVE_TOKEN', {
          access_token: '',
          refresh_token: '',
          $vm
        })
        commit('CHANGE_LOGIN_STATUS', false)
      }
    }, state.expireTime * 1000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
