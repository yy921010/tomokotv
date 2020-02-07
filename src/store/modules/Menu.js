import { getMenu } from '@api/menu'
const state = {
}

const mutations = {
  SET_MENU (state, menus) {
    let menu = [
      {
        menuId: 'home',
        id: 'static',
        text: '首页',
        iconName: 'home',
        iconUrl: '',
        type: 'static'
      },
      {
        menuId: 'tvProgram',
        id: 'static',
        text: '电视节目单',
        iconName: 'home',
        iconUrl: '',
        type: 'static'
      }
    ]
    state.menus = menu.concat(menus)
  },
  CLEAR_MENU (state) {
    state.menus = []
  }
}

const actions = {
  async getMenu ({ commit, state }) {
    const menus = await getMenu()
    commit('CLEAR_MENU')
    commit('SET_MENU', menus)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
