import Component from './teaser'

Component.install = (Vue) => {
  Vue.component(Component.name, Component)
}

export default Component
