import Component from './Carousel'

Component.install = Vue => {
  Vue.component(Component.name, Component)
}

export default Component
