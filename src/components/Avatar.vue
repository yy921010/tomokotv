<template>
  <div class="tmk-avatar" :style="{ width: size + 'px', height: size + 'px' }" @click="handleClick">
    <img
      class="tmk-avatar__image"
      :src="src"
      alt="tmk-avatar"
      @error="setErrorImg"
    />
    <div class="tmk-avatar__default">
      <t-icon class="avatar_default" name="user" type="line" :size="24"></t-icon>
    </div>
    <div class="tmk-avatar__master" v-if="maskIcon !== ''">
      <t-icon :name="maskIcon"></t-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TAvatar',
  props: {
    src: String,
    size: {
      type: Number,
      default: 35
    },
    maskIcon: {
      type: String,
      default: ''
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setErrorImg () {
      console.log(11111)
      this.src = require('@assets/images/dot.gif')
    },
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@include b(avatar) {
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  overflow:hidden;
  background-color: $C09;
  @include e(image) {
    width: 100%;
    height: 100%;
  }
  @include e(default) {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar_default{
      color: $C35;
    }
  }
  @include e(master){
    height: unit(30);
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: $C08;
    bottom: 0;
    text-align: center;
  }
}
</style>
