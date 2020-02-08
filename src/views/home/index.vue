<template>
  <div class="tmk-home">
    <t-poster :height="164" :width="294" :src="''"></t-poster>
    home
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @include b(home){
    width: unit(1220);
  }
</style>
