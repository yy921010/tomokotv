import { getCustomConfig } from '@api/custom-config'
const state = {
  customConfig: {}
}

const mutations = {
  SET_CONFIGS (s, configs) {
    if (configs.length > 0) {
      s.customConfig = configs.map(item => ({ [item.key]: item.value }))
    }
  },
  SET_CONFIG_SINGLE (state, curConfig) {
    if (state.customConfig[curConfig.key]) {
      state.customConfig[curConfig.key] = curConfig.value
    }
  }
}
const actions = {
  async getCustomConfig ({ commit, state }, configKey) {
    if (configKey) {
      if (state.customConfig[configKey]) {
        return state.customConfig[configKey]
      }
      const result = await getCustomConfig({
        key: configKey
      })
      commit('SET_CONFIG_SINGLE', result[0])
      return result[0].value
    } else {
      const result = await getCustomConfig({})
      commit('SET_CONFIGS', result)
    }
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
