<template>
  <button
    class="c-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
  buttonClass,
  disable?'is-disable':'',
  size !==''? 'c-button--'+size:''
   ]"
  >
    <t-icon v-if="icon !== ''" :name="icon" :type="iconType" :size="20" class="c-button--icon"/>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
/**
 * 用于项目中的公共 button
 */
export default {
  name: 'TButton',
  props: {
    type: {
      type: String,
      validator: value =>
        ['default', 'primary', 'info', 'link'].includes(value),
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val)
    },
    size: {
      type: String,
      default: '',
      validator: val => ['', 'large', 'medium', 'small', 'mini'].includes(val)
    },
    disable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: 'line'
    }
  },
  computed: {
    buttonClass () {
      return `c-button__${this.type}`
    }
  },
  methods: {
    handleClick (evt) {
      if (this.disable) {
        return
      }
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
$vi-theme-button: (
  text: $C01,
  background: (
    default: transparent,
    primary: $C04,
    info: $C22,
    link: transparent
  ),
  hover: (
    default: $C03,
    primary: $C04,
    info: $C22,
    link: $C03
  ),
  border: (
    default: $C01,
    primary: $C04,
    info: $C22,
    link: transparent
  ),
  disable: (
    default: transparent,
    primary: $C23,
    info: $C23,
    link: $C23
  )
);
@mixin button-base {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  @include text(26);
  @include button-size(200, 46, 2);
}

@mixin button-size($width, $height, $border-radius) {
  min-width: unit($width);
  height: unit($height);
  border-radius: unit($border-radius);
}

@function button-background-get($button-type) {
  @return map_get(map_get($vi-theme-button, background), $button-type);
}

@function button-hover-get($button-type) {
  @return map_get(map_get($vi-theme-button, hover), $button-type);
}

@function button-border-get($button-type) {
  @return map_get(map_get($vi-theme-button, border), $button-type);
}

@function button-disable-get($button-type) {
  @return map_get(map_get($vi-theme-button, disable), $button-type);
}

@mixin button-variant($button-type) {
  background-color: button-background-get($button-type);
  border: unit(1) solid button-border-get($button-type);
  transition: all $transition-time;
  &:hover {
    border-color: button-background-get($button-type);
    background-color: button-hover-get($button-type);
  }
  &:active {
    outline: none;
  }
  @include when(disable) {
    &,
    &:hover,
    &:focus {
      color: $C47;
      cursor: not-allowed;
      background-image: none;
      background-color: button-disable-get($button-type);
      border-color: button-disable-get($button-type);
    }
  }
}

@include c(button) {
  @include button-base;
  @include select-none;
  padding: 0 unit(10);
  & + & {
    margin-left: unit(10);
  }

  &::-moz-focus-inner {
    border: 0;
  }

  @include m(icon) {
    margin-right: unit(10);
  }

  @include e(default) {
    @include button-variant(default);
  }
  @include e(primary) {
    @include button-variant(primary);
  }
  @include e(info) {
    @include button-variant(info);
  }
  @include e(link) {
    @include button-variant(link);
  }
  @include m(large) {
    @include button-size(300, 40, 2);
  }

  @include m(medium) {
    @include button-size(200, 46, 2);
  }
  @include m(small) {
    @include button-size(140, 40, 2);
  }

  @include m(mini) {
    font-size: unit(16);
    @include button-size(60, 28, 2);
  }
}
</style>
