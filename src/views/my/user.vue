<template>
  <div class="tmk-user">
      <div class="tmk-user__switch-tab">
        <div class="tmk-user__switch-tab--modify">
          {{$t('user.modifyTab')}}
        </div>
        <div class="tmk-user__switch-tab--password">
          {{$t('user.passwordTab')}}
        </div>
      </div>
      <div class="tmk-user__content"></div>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style lang="scss">
@include b(user){
  @include e(switch-tab){
    @include text(14,$C35);
    display: flex;
    @include m(modify){
      margin-right: unit(60);
    }
  }
}
</style>
