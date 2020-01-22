import MyLayout from '../views/my'
const MY_MODULE = [
  {
    path: '/',
    name: 'guide',
    component: MyLayout,
    meta: {
      type: 'sync',
      title: '设置'
    },
    children: [{
      path: '/user-info',
      name: 'userInfo',
      component: () => import(/* webpackChunkName: "userInfo" */ '../views/my/user')
    }]
  }
]

export default MY_MODULE
