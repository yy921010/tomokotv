<template>
  <div class="tmk-my">
    <myMenu :user-info="userInfo"/>
    <div class="tmk-my__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myMenu from './components/my-menus'
import { mapState } from 'vuex'
export default {
  name: 'my',
  components: {
    myMenu
  },
  computed: {
    ...mapState('Login', {
      userInfo: s => s.userInfo
    })
  },

  methods: {

  }
}
</script>

<style lang="scss">
  @include b(my) {
    width: unit(1220);
    display: flex;
    @include e(content){
      flex: 1;
      margin-left: unit(20);
    }
    @include e(bottom){
      position: fixed;
      bottom: 0;
    }
  }
</style>
