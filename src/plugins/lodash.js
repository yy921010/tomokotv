import _ from 'lodash'
export default {
  install (Vue, opt = {}) {
    Vue.prototype.$_ = _
  }
}
