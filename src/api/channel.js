import Vue from 'vue'
class Channel extends Vue {
  getAllChannel () {
    return this.$http({
      url: '/channel',
      method: 'get'
    })
  }
}

export default new Channel()
