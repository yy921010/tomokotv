import { getCustomConfig } from '@api/custom-config'
const state = {
  customConfig: {}
}

const mutations = {
  SET_CONFIGS (s, configs) {
    if (configs.length > 0) {
      let _object = {}
      configs.forEach(item => {
        _object[item.key] = item.value
      })
      s.customConfig = _object
    }
  }
}

const getters = {
  getCustomConfig (state) {
    return function (key) {
      if (!key) {
        return ''
      }
      return state.customConfig[key]
    }
  }

}
const actions = {
  async customConfig ({ commit }) {
    const result = await getCustomConfig({})
    commit('SET_CONFIGS', result)
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  state,
  actions
}
