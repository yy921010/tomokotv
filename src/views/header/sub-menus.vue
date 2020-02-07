<template>
  <div class="tmk-sub-menus">
    <div class="tmk-sub-menus__views">
      <ul class="tmk-sub-menus__container">
        <li
          class="tmk-sub-menus__item"
          v-for="(menu, index) in menus"
          :key="index"
          @click="handleClick(menu)"
        >
          <t-icon v-if="menu.iconName" :name="menu.iconName" :size="30"></t-icon>
          <img class="tmk-sub-menus__item--img" v-else :src="menu.iconUrl"/>
          <span class="tmk-sub-menus__item--text">{{ menu.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-menus',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(sub-menus) {
  position: fixed;
  left: 0;
  right: 0;
  top:unit(60);
  background-color: $C06;
  z-index: 99;
  @include e(views){
    margin: 0 auto;
    width: unit(1220);
    padding-top: unit(40);
    padding-bottom: unit(35);
    @include e(container){
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @include e(item){
        cursor: pointer;
        display: flex;
        height: unit(40);
        padding: 0 unit(10) 0 unit(10);
        align-items: center;
        color: $C32;
        transition: all $transition-time;
        &:hover{
          background-color: $C03;
          color: $C31;
        }
        @include m(img){
          margin-right: unit(15);
        }
        @include m(text){
          width: unit(130);
          @include text-overflow;
        }
      }
    }
  }
}
</style>
