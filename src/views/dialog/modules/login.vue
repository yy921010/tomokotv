<template>
  <div class="tmk-login-dialog">
    <div class="tmk-login-dialog__header">
      <div class="title">{{ dialogTitle }}</div>
      <div class="close" @click="close">
        <t-icon name="close" :size="32"></t-icon>
      </div>
    </div>
    <transition name="slide-stretch">
      <div class="tmk-login-dialog__error-tips" v-if="errorMsg">
        {{ errorMsg }}
      </div>
    </transition>
    <div class="tmk-login-dialog__content">
      <form action="">
        <t-input
          class="username"
          :placeholder="$t('loginDialog.usernamePlaceholder')"
          v-model="username"
          :isError="inputError.username"
        ></t-input>
        <t-input
          :placeholder="$t('loginDialog.passwordPlaceholder')"
          nativeType="password"
          v-model="password"
          :isError="inputError.password"
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
      <t-button type="primary" size="large" @click="login">{{
        $t("loginDialog.button")
      }}</t-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import isEmpty from 'lodash/isEmpty'
export default {
  name: 'login',
  data () {
    return {
      usernameCache: '',
      passwordCache: '',
      isAutoLoginCache: true
    }
  },
  computed: {
    ...mapState('Dialog', {
      dialogTitle: s => s.dialogTitle
    }),
    ...mapState('Login', {
      errorMsg: s => s.errorMsg,
      inputError: s => s.inputError
    }),
    username: {
      set (username) {
        this.usernameCache = username
        this.transitData({
          username
        })
        this.setErrorTip('')
        this.setInputError({})
      },
      get () {
        return this.usernameCache
      }
    },
    password: {
      set (password) {
        this.passwordCache = password
        this.transitData({
          password
        })
        this.setErrorTip('')
        this.setInputError({})
      },
      get () {
        return this.passwordCache
      }
    },
    isAutoLogin: {
      set (isAuto) {
        this.isAutoLoginCache = isAuto
        this.transitData({
          isAuto
        })
        this.setErrorTip('')
        this.setInputError({})
      },
      get () {
        return this.isAutoLoginCache
      }
    }
  },
  methods: {
    ...mapMutations('Dialog', {
      cancel: 'cancel',
      confirm: 'confirm',
      transitData: 'transitData'
    }),
    ...mapMutations('Login', {
      setErrorTip: 'SET_ERROR_TIP',
      setInputError: 'SET_INPUT_ERROR_FOCUS'
    }),
    login () {
      if (isEmpty(this.username)) {
        this.setInputError({ username: true })
        this.setErrorTip(this.$t('loginDialog.usernameErrorEmpty'))
        return
      }
      if (isEmpty(this.password)) {
        this.setInputError({ password: true })
        this.setErrorTip(this.$t('loginDialog.passwordErrorEmpty'))
        return
      }
      if (isEmpty(this.errorMsg)) {
        this.confirm('login')
      }
    },
    close () {
      this.setErrorTip('')
      this.setInputError({})
      this.cancel('login')
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.slide-stretch-enter-active {
  animation: zoomIn 0.3s;
}
.slide-stretch-leave-active {
  animation: zoomOut 0.3s;
}

@include b(login-dialog) {
  min-height: unit(364);
  width: unit(460);
  background-color: $C14;
  border-radius: unit(4);
  padding-bottom: unit(35);
  @include e(header) {
    height: unit(60);
    border-bottom: unit(1) solid $C19;
    display: flex;
    align-items: center;
    position: relative;
    .title {
      text-align: center;
      flex: 1;
      @include text(14, $C35);
      letter-spacing: unit(0.6);
    }
    .close {
      position: absolute;
      right: unit(30);
      color: $C35;
      cursor: pointer;
      &:hover {
        color: $C31;
      }
    }
  }
  @include e(content) {
    margin-top: unit(40);
    @include e(error-tips) {
      @include text(32, $C33);
      width: unit(300);
      margin: unit(10) auto 0;
      text-align: center;
    }
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
    .checkbox-container {
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
