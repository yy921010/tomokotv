import Vue from 'vue'
import axios from './axios'
import dayjs from './dayjs'
import session from './session'
import lodash from './lodash'
import components from '@components'
import vuescroll from 'vuescroll'

Vue
  .use(axios,
    {
      baseURL: process.env.VUE_APP_BASE_API,
      timeout: 5000
    })
  .use(dayjs)
  .use(session)
  .use(components)
  .use(lodash)
  .use(vuescroll, {
    ops: {
      rail: {
        background: 'rgba(0, 0, 0, .5)',
        opacity: 1,
        size: '10px',
        border: '1px'
      },
      bar: {
        background: 'rgba(245, 245, 245, .1)',
        keepShow: true
      }
    }
  })
