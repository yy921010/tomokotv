import MyLayout from '../views/my'
const MY_MODULE = [
  {
    path: '/',
    name: 'my',
    component: MyLayout,
    meta: {
      type: 'sync',
      title: '设置'
    },
    children: [
      {
        path: '/user-info',
        name: 'MyUser',
        meta: {
          type: 'sync',
          title: '用户信息'
        },
        component: () =>
          import(/* webpackChunkName: "userInfo" */ '../views/my/user')
      },
      {
        path: '/sub-profile',
        name: 'Profiles',
        meta: {
          type: 'sync',
          title: '子用户设置'
        },
        component: () =>
          import(/* webpackChunkName: "userInfo" */ '../views/my/sub-profile')
      }
    ]
  }
]

export default MY_MODULE
