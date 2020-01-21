<template>
  <div class="tmk-login-dialog">
    <div class="tmk-login-dialog__header">
      <div class="title">{{ $t("loginDialog.title") }}</div>
      <div class="close">
        <t-icon name="close" :size="32"></t-icon>
      </div>
    </div>
    <div class="tmk-login-dialog__content">
      <form action="">
        <t-input
          class="username"
          :placeholder="$t('loginDialog.usernamePlaceholder')"
          v-model="loginId"
        ></t-input>
        <t-input
          :placeholder="$t('loginDialog.passwordPlaceholder')"
          nativeType="password"
          v-model="password"
        ></t-input>
      </form>
    </div>
    <div class="tmk-login-dialog__button">
      <t-button type="primary">{{ $t("loginDialog.button") }}</t-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginId: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
@include b(login-dialog) {
  height: unit(364);
  width: unit(460);
  background-color: $C14;
  border-radius: unit(4);
  @include e(header) {
    height: unit(60);
    border-bottom: unit(1) solid $C19;
    display: flex;
    align-items: center;
    .title{
      text-align: center;
      flex: 1;
      margin-left: unit(30);
      @include text(14,$C35);
    }
    .close{
      margin-right: unit(30);
      color: $C35;
      cursor: pointer;
      &:hover{
        color: $C31;
      }
    }
  }
  @include e(content){
    margin-top: unit(40);
    >form{
      display: flex;
      flex-direction: column;
      align-items: center;
      .username{
        margin-bottom: unit(20);
      }
    }
  }
  @include e(button){
    margin-top: unit(70);
    text-align: center;
  }
}
</style>
