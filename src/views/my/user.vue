<template>
  <div class="tmk-user">
    <div class="tmk-user__switch-tab">
      <div
        class="tmk-user__switch-tab--modify-user-info"
        :class="[{ 'is-tab-active': tabId === 'modify-user-info' }]"
        @click="switchTab4User('modify-user-info')"
      >
        {{ $t("user.modifyTab") }}
      </div>
      <div
        class="tmk-user__switch-tab--modify-password"
        :class="[{ 'is-tab-active': tabId === 'modify-password' }]"
        @click="switchTab4User('modify-password')"
      >
        {{ $t("user.passwordTab") }}
      </div>
    </div>
    <div class="tmk-user__line"></div>
    <div class="tmk-user__content">
      <transition name="bounce">
        <ModifyUserInfo v-if="tabId === 'modify-user-info'"></ModifyUserInfo>
      </transition>
      <transition name="bounce">
        <ModifyPassword  v-if="tabId === 'modify-password'"></ModifyPassword>
      </transition>
    </div>
  </div>
</template>

<script>
import ModifyUserInfo from './components/modify-user-info'
import ModifyPassword from './components/modify-password'
export default {
  name: 'user',
  components: {
    ModifyUserInfo,
    ModifyPassword
  },
  data () {
    return {
      loginId: '',
      tabId: ''
    }
  },
  mounted () {
    this.tabId = 'modify-user-info'
  },
  methods: {
    switchTab4User (tabId) {
      this.tabId = tabId
    }
  }
}
</script>

<style lang="scss">
@keyframes fadeInRight {
   from {
     opacity: 0;
     -webkit-transform: translate3d(40px, 0, 0);
     transform: translate3d(40px, 0, 0);
   }

   to {
     opacity: 1;
     -webkit-transform: translate3d(0, 0, 0);
     transform: translate3d(0, 0, 0);
   }
 }

.bounce-enter-active {
  animation: fadeInRight .3s;
}
@include when(tab-active) {
  color: $C31;
}
@include b(user) {
  @include e(switch-tab) {
    @include text(14, $C35);
    display: flex;
    @include m(modify-user-info) {
      margin-right: unit(60);
      cursor: pointer;
    }
    @include m(modify-password) {
      cursor: pointer;
    }
  }

  @include e(line) {
    border-bottom: unit(1) solid $C35;
    width: 100%;
    margin-top: unit(20);
  }
  @include e(content) {
    margin-top: unit(30);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
