<template>
  <div class="tmk-header">
    <div class="tmk-header__normal-mode">
      <div class="logo">
        <img :src="logoUrl" alt="logo">
      </div>
      <div class="title">{{title}}</div>
      <div class="buttons">
      </div>
    </div>
    <div class="tmk-header__search-mode"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TmkHeader',
  data () {
    return {
      logoUrl: require('@assets/logo.png')
    }
  },
  computed: {
    ...mapState('Header', {
      title: s => s.title
    })
  }
}
</script>

<style lang="scss">
@include b(header) {
  width: 100%;
  height: unit(60);
  background-color: $C06;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include e(normal-mode) {
    display: flex;
    width: unit(1380);
    align-items: center;
    height: 100%;
    .logo{
      width: 70px;
      height: 35px;
      img{
        max-width: 70px;
        max-height: 35px;
      }
    }
    .title{
      flex: 1;
      text-align: center;
      @include text(29);
    }
  }
}
</style>
