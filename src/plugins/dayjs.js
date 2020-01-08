import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

export default {
  install (Vue, opt = {}) {
    Vue.prototype.$dayjs = dayjs
    dayjs.locale('zh-cn')
  }
}
