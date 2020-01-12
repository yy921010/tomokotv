import Vue from 'vue'
import axios from './axios'
import dayjs from './dayjs'
import session from './session'
import lodash from './lodash'
import components from '@components'

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
