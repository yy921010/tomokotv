<template>
  <div class="tmk-login-dialog">
    <div class="tmk-login-dialog__header">
      <div class="title">{{ $t("loginDialog.title") }}</div>
      <div class="close" @click="closeDialog">
        <t-icon name="close" :size="32"></t-icon>
      </div>
    </div>
    <div class="tmk-login-dialog__content">
      <form action="">
        <t-input
          class="username"
          :placeholder="$t('loginDialog.usernamePlaceholder')"
          v-model="loginId"
          :isError="isError"
        ></t-input>
        <t-input
          :placeholder="$t('loginDialog.passwordPlaceholder')"
          nativeType="password"
          v-model="password"
          :isError="isError"
        ></t-input>
      </form>
    </div>
    <div class="tmk-login-dialog__checkbox">
      <div class="checkbox-container">
        <div class="checkbox-icon">
          <t-checkbox v-model="isAutoLogin"></t-checkbox>
          <span class="checkbox-text">{{ $t("loginDialog.reminder") }}</span>
        </div>
        <div class="checkbox-forget">
          {{ $t("loginDialog.forget") }}
        </div>
      </div>
    </div>
    <div class="tmk-login-dialog__button">
      <t-button type="primary" @click="beginLogin">{{
        $t("loginDialog.button")
      }}</t-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Login from '../../mixin/Login'
export default {
  name: 'login',
  mixins: [Login],
  data () {
    return {
      loginId: '',
      password: '',
      isAutoLogin: true,
      isError: false
    }
  },
  methods: {
    ...mapActions('Dialog', {
      close: 'close'
    }),
    ...mapActions('Login', {
      login: 'getToken',
      getUserInfo: 'getUserInfo'
    }),
    async beginLogin () {
      await this.login({
        username: this.loginId,
        password: this.password,
        isAutoLogin: this.isAutoLogin
      })
      await this.getUserInfo()
      this.timeToRefresh()
      this.closeDialog()
    },
    closeDialog () {
      this.close({
        name: 'login'
      })
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
    .title {
      text-align: center;
      flex: 1;
      margin-left: unit(30);
      @include text(14, $C35);
    }
    .close {
      margin-right: unit(30);
      color: $C35;
      cursor: pointer;
      &:hover {
        color: $C31;
      }
    }
  }
  @include e(content) {
    margin-top: unit(40);
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .username {
        margin-bottom: unit(20);
      }
    }
  }
  @include e(checkbox) {
    display: flex;
    justify-content: center;
    .checkbox-container{
      display: flex;
      justify-content: space-between;
      width: unit(300);
      margin-top: unit(20);
    }
    .checkbox-icon {
      display: flex;
      align-items: center;
      @include text(32);
      .checkbox-text {
        margin-left: unit(10);
      }
    }
    .checkbox-forget {
      @include text(32, $C36);
      cursor: pointer;
    }
  }
  @include e(button) {
    margin-top: unit(40);
    text-align: center;
  }
}
</style>
