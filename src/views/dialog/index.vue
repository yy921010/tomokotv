<template>
  <section class="tmk-dialog" v-if="normalVisible">
    <LoginComponent v-if="visibleLogin"/>
    <ConfirmComponent v-if="visibleConfirm"/>
  </section>
</template>
<script>
import LoginComponent from './modules/login'
import ConfirmComponent from './modules/confirm'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    LoginComponent,
    ConfirmComponent
  },
  computed: {
    ...mapState('Dialog', {
      visibleLogin: s => s.visibleLogin,
      visibleConfirm: s => s.visibleConfirm
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
