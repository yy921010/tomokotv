const HOME_MODULE = [
  {
    path: '/',
    name: 'home',
    meta: {
      type: 'sync',
      title: '主页'
    },
    component: () => import('../views/home')
  }
]

export default HOME_MODULE
