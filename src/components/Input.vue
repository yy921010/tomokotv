<template>
  <div class="tmk-input">
    <input
      :type="nativeType"
      :maxlength="maxlength"
      :tabindex="tabindex"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      @input="handleInput"
      @click="handleClick"
      :class="[isError?'is-error':'', type?'tmk-input__'+type:'']"
      autocomplete
    >
    <t-icon class="tmk-input--clear" name="close" :size="iconSize" v-if="showClear" @click="clearWord"/>
    <t-icon class="tmk-input--search-icon" name="search" :size="iconSize" v-if="showSearchIcon"/>
  </div>
</template>
<script>
export default {
  name: 'TInput',
  props: {
    nativeType: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    tabindex: String,
    maxlength: Number,
    isError: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'search', 'center'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showClear () {
      return !this.readonly && this.value !== ''
    },
    showSearchIcon () {
      return !this.readonly && this.type === 'search' && this.value === ''
    },
    iconSize () {
      return this.type === 'center' ? 21 : 14
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    clearWord () {
      this.$emit('input', '')
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
  @mixin input-basic {
    @include text(32);
    outline: none;
    background-image: none;
    transition: .1s;
    border-radius: unit(2);
    &::-webkit-input-placeholder {
      color: $C34;
    }
    &::-ms-input-placeholder {
      color: $C34;
    }
  }

    @include b(input) {
      display: inline-block;
      position: relative;
      @include e(default) {
        @include input-basic;
        width: unit(300-44-2);
        height: unit(40-2);
        border: unit(1) solid transparent;
        background-color: $C03;
        padding: 0 unit(34) 0 unit(10);
        &:focus,
        &:hover {
          border: unit(1) solid $C21;
          outline: none;
        }
        @include when(error) {
          border: unit(1) solid $C04;
        }
      }
      @include e(center){
        @include input-basic;
        width: unit(460-44-2);
        height: unit(46-2);
        border: unit(1) solid transparent;
        background-color: $C03;
        padding: 0 unit(34) 0 unit(10);
        text-align: center;
        &:focus,
        &:hover {
          border: unit(1) solid $C21;
          outline: none;
        }
        @include when(error) {
          border: unit(1) solid $C04;
        }
      }
      @include e(search) {
        @include input-basic;
        border-radius: unit(18);
        border: unit(1) solid $C03;
        background-color: transparent;
        height: unit(36-2);
        padding-left: unit(20);
        padding-right: unit(36);
        width: unit(300-68);
        &:focus,
        &:hover {
          border: unit(1) solid $C21;
          outline: none;
        }
        @include when(error) {
          border: unit(1) solid $C04;
        }
      }

      @include m(clear) {
        color: $C34;
        position: absolute;
        top: unit(12);
        right: unit(10);
        cursor: pointer;
      }
      @include m(center) {
        @include input-basic;
        width: unit(460);
        height: unit(46);
        text-align: center;
        background-color:$C03;
      }
      @include m(search-icon) {
        position: absolute;
        top: unit(10);
        right: unit(10);
        color: $C34;
      }

    }
</style>
