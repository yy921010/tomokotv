<template>
  <div class="u-modify-password">
    <div class="u-modify-password__description">
      <div class="u-modify-password__description--info">
        {{ $t("user.description") }}
      </div>
      <div class="u-modify-password__description--tip">
        {{ $t("user.descriptionTips") }}
      </div>
    </div>
    <div class="u-modify-password__form">
      <form>
        <div class="u-modify-password__form--item">
          <span class="label">{{ $t("user.oldPassword") }}</span>
          <t-input
            class="input"
            v-model="oldPassword"
            type="center"
            nativeType="password"
            @blur="blurOnOldPassword"
          ></t-input>
          <t-icon
            :name="oldTip.name"
            class="icon"
            :size="20"
            v-if="oldTip.isShow"
            :class="[
              { 'is-red': oldTip.color === 'red' },
              { 'is-green': oldTip.color === 'green' }
            ]"
          ></t-icon>
        </div>
        <div class="u-modify-password__form--item">
          <span class="label">{{ $t("user.newPassword") }}</span>
          <t-input
            class="input"
            v-model="newPassword"
            type="center"
            nativeType="password"
            @blur="blurOnPassword"
          ></t-input>
          <t-icon
            :name="newTip.name"
            class="icon"
            :size="20"
            v-if="newTip.isShow"
            :class="[
              { 'is-red': newTip.color === 'red' },
              { 'is-green': newTip.color === 'green' }
            ]"
          ></t-icon>
        </div>
        <div class="u-modify-password__form--item">
          <span class="label">{{ $t("user.reNewPassword") }}</span>
          <t-input
            class="input"
            v-model="reNewPassword"
            type="center"
            nativeType="password"
            @blur="blurOnRePassword"
          ></t-input>
          <t-icon
            :name="reNewTip.name"
            class="icon"
            :size="20"
            v-if="reNewTip.isShow"
            :class="[
              { 'is-red': reNewTip.color === 'red' },
              { 'is-green': reNewTip.color === 'green' }
            ]"
          ></t-icon>
        </div>
        <div class="u-modify-password__form--item" v-if="errorMsg !== ''">
          <span class="label"></span>
          <div class="input error">{{ errorMsg }}</div>
        </div>
        <div
          class="u-modify-password__form--item u-modify-password__form--button"
          v-if="isShowConfirmButton"
        >
          <span class="label"></span>
          <div class="input">
            <t-button @click="confirm" type="primary" size="large">{{
              $t("user.confirm")
            }}</t-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { checkPwdStrong } from '@utils'
export default {
  name: 'modify-password',
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
      oldTip: {
        name: 'checkbox-circle',
        isShow: false,
        color: 'green'
      },
      newTip: {
        name: 'checkbox-circle',
        isShow: false,
        color: 'green'
      },
      reNewTip: {
        name: 'checkbox-circle',
        isShow: false,
        color: 'green'
      },
      errorMsg: '',
      oldPasswordPass: false,
      newPasswordPass: false,
      reNewPasswordPass: false
    }
  },
  computed: {
    ...mapState('Login', {
      username: s => s.username
    }),
    isShowConfirmButton () {
      return (
        this.oldPasswordPass && this.newPasswordPass && this.reNewPasswordPass
      )
    }
  },
  methods: {
    ...mapActions('Login', {
      getToken: 'getToken',
      startRefreshToken: 'startRefreshToken'
    }),
    confirm () {},
    blurOnOldPassword () {
      if (!this.oldPassword) {
        this.setErrorInfo(this.$t('user.errorOldPassEmpty'), 'oldTip')
        this.oldPasswordPass = false
        return
      }
      this.getToken({
        username: this.username,
        password: this.oldPassword,
        isAutoLogin: this.$session.get('isAutoLogin')
      }).then(
        () => {
          this.startRefreshToken()
          this.setSuccessInfo('oldTip')
          this.oldPasswordPass = true
        },
        () => {
          this.setErrorInfo(this.$t('user.errorOldPass'), 'oldTip')
          this.oldPasswordPass = false
        }
      )
    },
    blurOnPassword () {
      if (!this.newPassword) {
        this.setErrorInfo(this.$t('user.errorNewPassEmpty'), 'newTip')
        this.newPasswordPass = false
        return
      }
      switch (checkPwdStrong(this.newPassword)) {
        case 0:
        case 3:
          this.setErrorInfo(this.$t('user.errorWeakPass'), 'newTip')
          this.newPasswordPass = false
          break // 密码强度很弱
        default:
          this.setSuccessInfo('newTip')
          this.newPasswordPass = true
      }
    },
    blurOnRePassword () {
      if (!this.reNewPassword) {
        this.setErrorInfo(this.$t('user.errorReNewPassEmpty'), 'reNewTip')
        this.reNewPasswordPass = false
        return
      }
      if (this.newPassword === this.reNewPassword) {
        this.setSuccessInfo('reNewTip')
        this.reNewPasswordPass = true
      } else {
        this.setErrorInfo(this.$t('user.error'), 'reNewTip')
        this.reNewPasswordPass = false
      }
    },

    setErrorInfo (msg, formScopeIcon) {
      this.errorMsg = msg
      this[formScopeIcon].name = 'error-warning'
      this[formScopeIcon].isShow = true
      this[formScopeIcon].color = 'red'
    },

    setSuccessInfo (formScopeIcon) {
      this.errorMsg = ''
      this[formScopeIcon].name = 'checkbox-circle'
      this[formScopeIcon].isShow = true
      this[formScopeIcon].color = 'green'
    }
  }
}
</script>

<style lang="scss">
@include when(red) {
  color: $C33;
}
@include when(green) {
  color: $C28;
}
@include u(modify-password) {
  width: unit(766);
  @include e(description) {
    @include m(info) {
      @include text(32);
    }
    @include m(tip) {
      @include text(32, $C35);
      margin-top: unit(20);
    }
  }
  @include e(form) {
    margin-top: unit(54);
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @include m(item) {
      display: flex;
      margin-bottom: unit(50);
      align-items: center;
      width: unit(600);
      .label {
        @include text(29, $C35);
        margin-right: unit(20);
        width: unit(80);
        line-height: unit(46);
      }
      .input {
        width: unit(460);
      }
      .error {
        @include text(32, $C33);
      }
      .icon {
        margin-left: unit(15);
      }
    }
    @include m(button) {
      text-align: center;
    }
  }
}
</style>
