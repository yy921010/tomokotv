import 'remixicon/fonts/remixicon.css'

import Icon from './icon/Icon'
import Button from './button/Button'
import Select from './select/Select'
import Input from './input/Input'
import Checkbox from './checkbox/Checkbox'
import Avatar from './avatar/Avatar'
import AvatarSelected from './avatar-select'

const Components = [
  Icon,
  Button,
  Select,
  Input,
  Checkbox,
  Avatar,
  AvatarSelected
]

export default {
  name: 'tmk',
  ...Components,
  install (Vue, options = {}) {
    Components.forEach(c => {
      Vue.component(c.name, c)
    })
  }
}
