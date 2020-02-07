<template>
  <div
    class="c-select"
    :class="[type ? 'c-select--' + type : '']"
    @click.stop="openOptions"
  >
    <div class="c-select__result">
      <input type="text" class="c-select__text" readonly :value="convertText">
      <t-icon class="icon" :name="iconName" :size="24" />
    </div>
    <div class="c-select__options" v-if="isVisibleOption">
      <div
        class="c-select__option"
        v-for="(option, index) in options"
        :key="index"
        @click.stop="chosen(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>
<script>

const selectListenerFunc = function () {
  this.isVisibleOption = false
  this.iconName = 'arrow-down-s'
}

export default {
  name: 'tSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validate: value => ['default', 'center'].includes(value)
    },
    options: {
      type: Array
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isVisibleOption: false,
      result: '',
      iconName: 'arrow-down-s'
    }
  },
  computed: {
    convertText () {
      let currentOption = {}
      if (this.options) {
        currentOption = this.options.find(item => item.value === this.value)
      }
      return currentOption.text || ''
    }
  },
  mounted () {
    document.addEventListener('click', selectListenerFunc.bind(this))
  },
  methods: {
    chosen ({ text, value }) {
      this.isVisibleOption = false
      this.$emit('change', value)
      this.iconName = 'arrow-down-s'
    },
    openOptions () {
      this.isVisibleOption = true
      this.iconName = 'arrow-up-s'
    }
  },
  destroyed () {
    document.removeEventListener('click', selectListenerFunc.bind(this))
  }
}
</script>
<style lang="scss" scoped>
@include c(select) {
  min-width: unit(203);
  text-align: center;
  cursor: pointer;
  @include m(default) {
    background-color: $C15;
    height: unit(40);
    @include e(result) {
      height: unit(40);
      line-height: unit(40);
      @include e(text) {
        @include text(29);
        margin-right: unit(10);
        width: unit(100);
        display: inline-block;
      }
    }
    @include e(options) {
      width: 100%;
      background-color: $C17;
      border-radius: unit(3);
      padding-top: unit(10);
      box-shadow: map_get($mask, 5);
      position: absolute;
      z-index: 2;
      @include e(option) {
        height: unit(32);
        line-height: unit(32) !important;
        @include text(32, $C35);
        &:hover {
          @include text(32, $C31);
          background-color: $C03;
        }
      }
    }
    .icon {
      line-height: unit(24);
    }
  }

  @include m(center) {
    background-color: $C03;
    height: unit(46);
    position: relative;
    @include e(result) {
      height: unit(46);
      line-height: unit(46);
      @include e(text) {
        outline: none;
        @include text(29);
        margin-right: unit(10);
        height: unit(46-2);
        width: 100%;
        text-align: center;
        background-color: transparent;
        border: transparent;
        display: inline-block;
      }
      .icon {
        line-height: unit(24);
        position: absolute;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @include e(options) {
      width: 100%;
      background-color: $C17;
      border-radius: unit(3);
      padding-top: unit(10);
      box-shadow: map_get($mask, 5);
      position: absolute;
      z-index: 2;
      @include e(option) {
        height: unit(46);
        line-height: unit(46) !important;
        @include text(29, $C35);
        &:hover {
          @include text(29, $C31);
          background-color: $C03;
        }
      }
    }
    .icon {
      position: absolute;
      right: 0;
      line-height: unit(46);
      background-color: $C35;
      height: unit(46) !important;
      width: unit(46) !important;
    }
  }
}
</style>
