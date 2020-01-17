const HOME_MODULE = [
  {
    path: '/',
    name: 'home',
    meta: {
      type: 'sync',
      title: '主页'
    },
    component: () => import(/* webpackChunkName:"home" */'../views/home')
  }
]

export default HOME_MODULE
