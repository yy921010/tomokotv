<template>
  <div class="tmk-pin">
    <div class="tmk-pin__header">
      <div class="tmk-pin__header--title">{{ title }}</div>
      <div class="tmk-pin__header--close" @click="cancel('pin')">
        <t-icon name="close" :size="32"></t-icon>
      </div>
    </div>
    <div class="tmk-pin__content">
      <div class="tmk-pin__error">dsds</div>
      <form action="" class="tmk-pin__content--form">
        <input class="tmk-pin__content--input" type="text" />
        <input class="tmk-pin__content--input" type="text" />
        <input class="tmk-pin__content--input" type="text" />
        <input class="tmk-pin__content--input" type="text" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'pin',
  computed: {
    ...mapState('Dialog', {
      title: s => s.dialogTitle,
      contentConfirm: s => s.content
    })
  },
  methods: {
    ...mapMutations('Dialog', {
      cancel: 'cancel',
      confirm: 'confirm',
      transitData: 'transitData'
    })
  }
}
</script>

<style scoped lang="scss">
@mixin input-basic {
  @include text(32);
  outline: none;
  background-image: none;
  transition: 0.1s;
  border-radius: unit(2);
  &::-webkit-input-placeholder {
    color: $C34;
  }
  &::-ms-input-placeholder {
    color: $C34;
  }
}
@include b(pin) {
  min-height: unit(188);
  width: unit(460);
  background-color: $C14;
  border-radius: unit(4);
  padding-bottom: unit(35);
  @include e(header) {
    height: unit(60);
    border-bottom: unit(1) solid $C19;
    display: flex;
    align-items: center;
    position: relative;
    @include m(title) {
      text-align: center;
      width: 100%;
      @include text(14, $C35);
    }
    @include m(close) {
      color: $C35;
      cursor: pointer;
      position: absolute;
      right: unit(30);
      align-self: center;
      &:hover {
        color: $C31;
      }
    }
  }
  @include e(content) {
    @include m(form){
      text-align: center;
    }
    @include m(input) {
      text-align: center;
      margin-top: unit(30);
      margin-right: unit(30);
      height: unit(46);
      width: unit(46);
      &:nth-child(4){
        margin-right: 0;
      }
      @include input-basic;
      display: inline-block;
      border: unit(1) solid transparent;
      background-color: $C03;
      &:focus,
      &:hover {
        border: unit(1) solid $C21;
        outline: none;
      }
      @include when(error) {
        border: unit(1) solid $C04;
      }
    }
    @include e(error) {
      text-align: center;
      width: unit(400);
      margin: 0 auto;
      margin-top: unit(30);
      @include text(32, $C33);
    }
  }
}
</style>
