import { Random } from 'mockjs'

export default [
  {
    url: '/userInfo',
    type: 'get',
    response: config => {
      return {
        code: 0,
        data: {
          username: Random
        }
      }
    }
  },
  /**
   * request
   */
  {
    url: '/token',
    type: 'post',
    response: config => {
      return {
        access_token: Random.guid(),
        token_type: 'Bearer',
        expires_in: 10,
        refresh_token: Random.guid()
      }
    }
  }
]
