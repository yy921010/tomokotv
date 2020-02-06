import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('Login', {
      expireTime: s => s.expireTime
    })
  },
  methods: {
    ...mapActions('Login', {
      login: 'login',
      refreshToken: 'startRefreshToken',
      logout: 'logout'
    })
  }
}
