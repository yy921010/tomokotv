import MyLayout from '../views/my'
const isNeedLogin = true
const MY_MODULE = [
  {
    path: '/',
    name: 'my',
    component: MyLayout,
    meta: {
      type: 'sync',
      title: '设置',
      isNeedLogin
    },
    children: [
      {
        path: '/user-info',
        name: 'MyUser',
        meta: {
          type: 'sync',
          title: '用户信息',
          isNeedLogin
        },
        component: () =>
          import('../views/my/user')
      },
      {
        path: '/sub-profile',
        name: 'Profiles',
        meta: {
          type: 'sync',
          title: '子用户设置',
          isNeedLogin
        },
        component: () =>
          import('../views/my/sub-profile')
      }
    ]
  }
]

export default MY_MODULE
