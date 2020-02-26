const VOD_MODULE = [
  {
    path: '/vod-detail',
    name: 'vodDetail',
    meta: {
      type: 'sync',
      title: '正片'
    },
    component: () => import('../../views/vod/detail')
  }
]

export default VOD_MODULE
