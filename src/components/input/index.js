import Component from './Input'

Component.install = (Vue) => {
  Vue.component(Component.name, Component)
}

export default Component
