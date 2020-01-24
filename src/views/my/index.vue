<template>
  <div class="tmk-my">
    <myMenu :user-info="userInfo" @onMenu="switchMenu"/>
    <div class="tmk-my__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myMenu from './components/my-menus'
export default {
  name: 'my',
  components: {
    myMenu
  },
  data () {
    return {
      userInfo: {
        avatarUrl:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1396190427,3962471256&fm=27&gp=0.jpg',
        username: 'demo',
        ageLevel: 'PG-13'
      }
    }
  },
  methods: {
    switchMenu () {

    }
  }
}
</script>

<style lang="scss">
  @include b(my) {
    width: unit(1380);
    display: flex;
    @include e(content){
      flex: 1;
      margin-left: unit(20);
    }
  }
</style>
