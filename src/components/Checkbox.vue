<template>
  <div class="tmk-checkbox">
    <t-icon class="tmk-checkbox__icon" :name="iconName" :size="18"></t-icon>
    <input  class="tmk-checkbox__original" type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)">
  </div>
</template>

<script>
export default {
  name: 'TCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  computed: {
    iconName () {
      return this.checked ? 'checkbox' : 'checkbox-blank'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
@include b(checkbox){
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  @include e(icon){
    color: $C28;
  }
  @include e(original){
    opacity: 0;
    outline: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
  }
}
</style>
