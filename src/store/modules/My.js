import { getProfiles } from '@api/user'
const state = {
  menus: [
    { firstMenu: 'menu.contentManager',
      secondMenu: [
        {
          id: 'HistoryVideo',
          name: 'menu.historyVideo',
          iconName: 'time'
        },
        {
          id: 'FavoriteVideo',
          name: 'menu.favoriteVideo',
          iconName: 'star'
        }
      ] },
    { firstMenu: 'menu.channelManager',
      secondMenu: [
        {
          id: 'FavoriteChannel',
          name: 'menu.favoriteChannel',
          iconName: 'heart-2'
        },
        {
          id: 'LockedChannel',
          name: 'menu.lockedChannel',
          iconName: 'lock'
        }
      ] },
    {
      firstMenu: '',
      secondMenu: [
        {
          id: 'Reminders',
          name: 'menu.reminders',
          iconName: 'notification'
        }, {
          id: 'Purchases',
          name: 'menu.purchases',
          iconName: 'shopping-cart-2'
        }
      ]
    },
    {
      firstMenu: '',
      secondMenu: [
        {
          id: 'Profiles',
          name: 'menu.profiles',
          iconName: 'user-settings'
        },
        {
          id: 'DeviceName',
          name: 'menu.deviceName',
          iconName: 'device'
        },
        {
          id: 'Logout',
          name: 'menu.logout',
          iconName: 'login-circle'
        }
      ]
    }
  ],
  ageLevels: [
    {
      text: '0+',
      value: 0
    }, {
      text: '6+',
      value: 6
    },
    {
      text: '12+',
      value: 12
    }, {
      text: '15+',
      value: 15
    }, {
      text: '18+',
      value: 18
    }
  ],
  profiles: []
}

const getters = {
  getSubmenu (state) {
    let subMenus = []
    state.menus.forEach(mainMenu => {
      subMenus = [...subMenus, ...mainMenu.secondMenu]
    })
    return subMenus
  }
}

const mutations = {
  SET_PROFILES (state, data) {
    state.profiles = data
  }
}

const actions = {
  async getProfiles ({ commit, rootState }) {
    const profiles = await getProfiles(rootState.Login.userInfo.userId)
    commit('SET_PROFILES', profiles)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
