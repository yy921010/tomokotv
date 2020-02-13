import Component from './tab'

Component.install = (Vue) => {
  Vue.component(Component.name, Component)
}

export default Component
