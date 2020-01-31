import Mock, { Random } from 'mockjs'

const userInfo = Mock.mock({
  nickName: '@ctitle',
  username: '@email',
  avatarUrl: Random.image('35x35'),
  'ageLevel|1': [0, 6, 12, 15, 18],
  userType: 1
})

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
  },
  {
    url: '/token/revoke',
    type: 'post',
    response: config => {
      return {}
    }
  },
  {
    // eslint-disable-next-line no-useless-escape
    url: '/user?\.*',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: userInfo
      }
    }
  },
  {
    // eslint-disable-next-line no-useless-escape
    url: '/customConfig?\.*',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: {
          nickName: Random.ctitle(),
          username: Random.email(),
          avatarUrl: Random.image('35x35'),
          ageLevel: '[1,10]',
          userType: 1
        }
      }
    }
  }
]
