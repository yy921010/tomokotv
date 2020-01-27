const TV_GUIDE_MODULE = [
  {
    path: '/tv-guide',
    name: 'guide',
    meta: {
      type: 'sync',
      title: '电视节目单'
    },
    component: () => import('../views/tvguide/tvguide')
  }
]

export default TV_GUIDE_MODULE
