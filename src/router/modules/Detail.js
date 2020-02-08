const DETAIL_MODULE = [
  {
    path: '/detail',
    name: 'guide',
    meta: {
      type: 'sync',
      title: '详情'
    },
    component: () => import('../../views/tv/detail')
  }
]

export default DETAIL_MODULE
