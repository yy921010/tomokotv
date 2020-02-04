<template>
  <div class="tmk-confirm">
      <div class="tmk-confirm__top">
        <div class="tmk-confirm__top--title"></div>
        <div class="tmk-confirm__top--close"></div>
      </div>
      <div class="tmk-confirm__content"></div>
      <div class="tmk-confirm__bottom"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'confirm',
  computed: {
    ...mapState('Dialog', {
      title: s => s.title
    })
  }
}
</script>
<style lang="scss"></style>
