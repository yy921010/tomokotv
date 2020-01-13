<template>
  <div class="tmk-select" @click.stop="openOptions">
    <div class="tmk-select__result">
      <span class="tmk-select__text">{{getFinalResult}}</span>
      <t-icon class="icon" :name="iconName" :size="24"/>
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
  min-width: unit(203);
  height: unit(40);
  text-align: center;
  background-color: $C15;
  cursor: pointer;
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
  @include e(options){
    width: 100%;
    background-color: $C17;
    border-radius: unit(3);
    padding-top:unit(10);
    box-shadow: map_get($mask,5);
    @include e(option){
      height: unit(32);
      line-height: unit(32) !important;
      @include text(32,$C35);
      &:hover{
        @include text(32,$C31);
        background-color: $C03;
      }
    }
  }
  .icon{
      line-height: unit(24);
  }
}
</style>
