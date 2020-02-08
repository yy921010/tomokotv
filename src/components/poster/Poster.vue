<template>
  <div
    class="c-poster"
    :style="{ width: getWidth, height: getHeight }"
    @click="handleClick"
  >
    <t-icon
      class="c-poster--default"
      :name="bgIconName"
      type="fill"
      :size="bgIconSize"
    ></t-icon>
    <div
      class="c-poster--image"
      :style="{
        'background-image': 'url(' + src + ')'
      }"
    ></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TPoster',
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    bgIconName: {
      type: String,
      default: 'film'
    },
    bgIconSize: {
      type: Number,
      default: 80
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    getWidth () {
      return `${this.width}px`
    },
    getHeight () {
      return `${this.height}px`
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style scoped lang="scss">
@include c(poster) {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $C17;
  cursor: pointer;
  border-radius: unit(4);
  @include m(image) {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 1;
    border-radius: unit(4);
  }
  @include m(default) {
    color: $C03;
  }
}
</style>
