import Component from './slide'

Component.install = (Vue) => {
  Vue.component(Component.name, Component)
}

export default Component
