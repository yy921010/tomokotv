import 'remixicon/fonts/remixicon.css'

import Icon from './icon'
import Button from './button'
import Select from './select'
import Input from './input'
import Checkbox from './checkbox'
import Avatar from './avatar'
import AvatarSelected from './avatar-select'
import SnackBar from './snack-bar'
import Poster from './poster'

const Components = [
  Icon,
  Button,
  Select,
  Input,
  Checkbox,
  Avatar,
  AvatarSelected,
  SnackBar,
  Poster
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
