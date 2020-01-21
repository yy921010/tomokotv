<template>
  <div class="tmk-home">
    here is home
    <loginDailog></loginDailog>
  </div>
</template>

<script>
import loginDailog from '../dialog/login'
export default {
  name: 'Home',
  components: {
    loginDailog
  }
}
</script>

<style lang="scss">
  @include b(home){
    width: unit(1380);
  }
</style>
