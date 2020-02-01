<template>
<div class="tmk-dialog" v-if="normalVisible">
  <LoginComponent/>
  </div>
  </template>
<script>
import LoginComponent from './modules/login'
import { mapGetters } from 'vuex'
export default {
  components: {
    LoginComponent
  },
  computed: {
    ...mapGetters('Dialog', {
      normalVisible: 'normalVisible'
    })
  }
}
</script>
<style lang="scss" scoped>
@include b(dialog){
  position: fixed;
  z-index: 999;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: $C09;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
