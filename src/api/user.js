import Vue from 'vue'
class User extends Vue {
  login ({ username, password }) {
    return this.$http({
      url: '/token',
      method: 'post',
      data: {
        username,
        password,
        grant_type: 'password'
      }
    })
  }

  refreshToken (refreshToken) {
    return this.$http({
      url: '/token',
      method: 'post',
      data: {
        refreshToken,
        grant_type: 'refresh_token'
      }
    })
  }
}

export default new User()
