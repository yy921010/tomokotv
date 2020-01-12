<template>
  <div class="tmk-select" @click.stop="openOptions">
    <div class="tmk-select__result">
      <span class="tmk-select__text">{{getFinalResult}}</span>
      <t-icon class="icon" :name="iconName" :size="24"></t-icon>
    </div>
    <div class="tmk-select__options" v-if="isVisibleOption">
      <div
        class="tmk-select__option"
        v-for="(option,index) in options"
        :key="index"
        @click.stop="chosen(option)"
      >{{option.text}}</div>
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
  props: {
    options: {
      type: Array
    },
    value: {
      type: String,
      default: ''
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
    getFinalResult () {
      return this.value || this.result || this.options[0].text
    }
  },
  mounted () {
    document.addEventListener('click', selectListenerFunc.bind(this))
  },
  methods: {
    chosen ({ text, value }) {
      this.isVisibleOption = false
      this.result = text
      this.$emit('onSelect', value)
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
<style lang="scss">
@include b(select) {
  min-width: unit(203-50);
  height: unit(40);
  padding: 0 unit(25);
  text-align: center;
  background-color: $C15;
  border-top: unit(1) solid $C21;
  border-bottom: unit(1) solid $C21;
  cursor: pointer;
  @include e(result) {
    height: unit(40);
    line-height: unit(40);
  }
  @include e(text) {
    @include text(29);
    margin-right: unit(10);
  }
  .icon{
      line-height: unit(24);
  }
}
</style>
