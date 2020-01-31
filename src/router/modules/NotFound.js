const NOT_FOUND_MODULE = [
  {
    path: '*',
    name: 'pageNotFound',
    meta: {
      type: 'sync',
      title: '页面未找到'
    },
    component: () => import('../../views/notFound/index')
  }
]

export default NOT_FOUND_MODULE
