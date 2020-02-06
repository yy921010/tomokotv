<template>
  <section class="tmk-dialog" v-if="normalVisible">
    <LoginComponent v-if="loginShow"/>
    <ConfirmComponent v-if="confirmShow"/>
    <ProfileComponent v-if="profileShow"/>
  </section>
</template>
<script>
import LoginComponent from './modules/login'
import ConfirmComponent from './modules/confirm'
import ProfileComponent from './modules/profile'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    LoginComponent,
    ConfirmComponent,
    ProfileComponent
  },
  computed: {
    ...mapState('Dialog', {
      loginShow: s => s.loginShow,
      confirmShow: s => s.confirmShow,
      profileShow: s => s.profileShow
    }),
    ...mapGetters('Dialog', {
      normalVisible: 'normalVisible'
    })
  }
}
</script>
<style lang="scss">
@include b(dialog) {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $C10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
