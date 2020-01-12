<template>
    <i class="tmk-icon" @click="handleClick"
     :class="iconClass"
     :style="[{'font-size':size+'px','width':size+'px','height':size+'px'}]"
  ></i>
</template>
<script>
export default {
  name: 'tIcon',
  props: {
    name: String,
    size: {
      type: Number,
      default: 14
    },
    type: {
      type: String,
      default: 'line',
      validate: (val) => ['line', 'fill'].includes(val)
    }
  },
  computed: {
    iconClass () {
      return `ri-${this.name}-${this.type}`
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
  @include b(icon){
    font-weight: normal;
    font-style: normal;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
  }
</style>
