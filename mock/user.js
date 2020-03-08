import Mock, { Random } from 'mockjs'

const userInfo = Mock.mock({
  nickName: '@ctitle',
  username: '@email',
  avatarUrl: Random.image('35x35'),
  'ageLevel|1': [0, 6, 12, 15, 18],
  userType: 1,
  userId: 2
})

const menus = Mock.mock({
  'data|10': [{
    menuId: '@id',
    id: '@id',
    text: '@cword(3,10)',
    iconName: '',
    iconUrl: Random.image('30x30'),
    type: 'dynamic'
  }]
})

const film = Mock.mock({
  data: {
    title: '@ctitle',
    id: '@id',
    'rating|1': ['3.4'],
    'ageRating|1': ['pg-1', 'pg-18', '16', '12'],
    'genres': ['惊悚', '科幻', '喜剧', '美剧'],
    country: '@region',
    description: '@cparagraph',
    casts: [],
    pictures: []

  }
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
    url: '/user?.*',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: userInfo
      }
    }
  },
  {
    url: '/customConfig',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: [
          {
            key: 'AVATAR_LIST',
            value: JSON.stringify([
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
            ])
          },
          {
            key: 'AGE_LEVEL',
            value: JSON.stringify([
              {
                text: '0+',
                value: 0
              },
              {
                text: '6+',
                value: 6
              },
              {
                text: '12+',
                value: 12
              },
              {
                text: '15+',
                value: 15
              },
              {
                text: '18+',
                value: 18
              }
            ])
          },
          {
            key: '',
            value: ''
          }
        ]
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
  },
  {
    url: '/menu',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        ...menus
      }
    }
  },
  {
    url: '/film',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        ...film
      }
    }
  }
]
