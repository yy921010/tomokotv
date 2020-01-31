import 'remixicon/fonts/remixicon.css'

import Icon from './Icon'
import Button from './Button'
import Select from './Select'
import Input from './Input'
import Checkbox from './Checkbox'
import Avatar from './Avatar'

const Components = [
  Icon,
  Button,
  Select,
  Input,
  Checkbox,
  Avatar
]

export default {
  name: 'tmk',
  install (Vue, options = {}) {
    Components.forEach(c => {
      Vue.component(c.name, c)
    })
  }
}
