import Mock, { Random } from 'mockjs'

const userInfo = Mock.mock({
  nickName: '@ctitle',
  username: '@email',
  avatarUrl: Random.image('35x35'),
  'ageLevel|1': [0, 6, 12, 15, 18],
  userType: 1,
  userId: 2
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
        expires_in: 400,
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
    url: '/customConfig\?key\=AVATAR_LIST',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: [
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75'),
          Random.image('75x75')]
      }
    }
  },
  {
    url: '/customConfig',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: [{
          key: 'AVATAR_LIST',
          value: [
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75'),
            Random.image('75x75')
          ]
        }]
      }
    }
  },
  {
    url: '/changePassword',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: {}
      }
    }
  },
  {
    url: '/profile',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: [userInfo, userInfo, userInfo, userInfo, userInfo, userInfo]
      }
    }
  }
]
