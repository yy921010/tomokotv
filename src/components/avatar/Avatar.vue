<template>
  <div
    class="c-avatar"
    :style="{ width: size + 'px', height: size + 'px' }"
    @click="handleClick"
    :class="[{ 'is-selected': isSelected }]"
  >
    <div
      class="c-avatar__image"
      :style="{'background-image':'url('+avatarUrl+')'}"
    />
    <div class="c-avatar__default">
      <t-icon
        class="c-avatar__default--main"
        name="user"
        type="line"
        :size="24"
      ></t-icon>
    </div>
    <div class="c-avatar__master" v-if="maskIcon !== ''">
  <t-icon :name="maskIcon"></t-icon>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TAvatar',
  props: {
    avatarUrl: String,
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
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@include c(avatar) {
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  background-color: $C09;
  border: unit(1) solid transparent;
  @include when(selected){
    box-sizing: border-box;
    border:unit(3) solid white;
  }
  @include e(image) {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 1;
  }
  @include e(default) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @include m(main) {
      color: $C35;
    }
  }
  @include e(master) {
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
