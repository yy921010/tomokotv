import 'remixicon/fonts/remixicon.css'

import Icon from './Icon'
import Button from './Button'
import Select from './Select'

const Components = [
  Icon,
  Button,
  Select
]

export default {
  name: 'tmk',
  install (Vue, options = {}) {
    Components.forEach(c => {
      Vue.component(c.name, c)
    })
  }
}
