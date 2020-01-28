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
  ]
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

export default {
  namespaced: true,
  state,
  getters
}
