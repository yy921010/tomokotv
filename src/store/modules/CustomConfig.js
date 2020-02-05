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
      let _obj = {}
      if (key) {
        try {
          _obj = JSON.parse(state.customConfig[key])
        } catch (e) {
          console.error('json parse is error')
          _obj = {}
        }
      }
      return _obj
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
