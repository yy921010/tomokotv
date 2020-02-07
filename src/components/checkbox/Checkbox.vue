<template>
  <div class="c-checkbox">
    <t-icon class="c-checkbox__icon" :name="iconName" :size="18"></t-icon>
    <label>
      <input  class="c-checkbox__original" type="checkbox"
              :checked="checked"
              @change="$emit('change', $event.target.checked)">
    </label>
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

<style lang="scss" scoped>
@include c(checkbox){
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
