import { mapActions, mapState } from 'vuex'
let refreshTokenTimeDown = null

export default {
  computed: {
    ...mapState('Login', {
      expireTime: s => s.expireTime
    })
  },
  methods: {
    ...mapActions('Login', {
      getToken: 'getToken',
      refreshToken: 'startRefreshToken',
      logout: 'logout'
    }),

    async userLogout () {
      clearTimeout(refreshTokenTimeDown)
      this.logout()
    },

    async timeToRefresh () {
      refreshTokenTimeDown = setTimeout(async () => {
        clearTimeout(refreshTokenTimeDown)
        try {
          await this.refreshToken()
          await this.timeToRefresh()
        } catch (e) {
          console.error('error:', e)
          clearTimeout(refreshTokenTimeDown)
        }
      }, this.expireTime * 1000)
    }
  }
}
