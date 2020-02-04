import Vue from 'vue'
import dayjs from './dayjs'
import session from './session'
import lodash from './lodash'
import components from '@components'
import vuescroll from 'vuescroll'
import VueLogger from 'vuejs-logger'
const isProduction = process.env.VUE_APP_SERVICE_MODE === 'prod'

Vue
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
  .use(VueLogger, {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '-',
    showConsoleColors: true
  })
