const NOT_FOUND_MODULE = [
  {
    path: '*',
    name: 'pageNotFound',
    meta: {
      type: 'sync',
      title: '页面未找到'
    },
    component: () => import(/* webpackChunkName:"guide" */'../views/notFound')
  }
]

export default NOT_FOUND_MODULE
