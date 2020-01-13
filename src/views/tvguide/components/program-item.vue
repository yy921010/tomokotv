<template>
    <div class="tmk-guide-program is-now">
      <div class="tmk-guide-program__title">title</div>
      <div class="tmk-guide-program__subtitle">subtitle</div>
    </div>
</template>

<script>

export default {
  name: 'programItem',
  data: () => ({})
}
</script>

<style lang="scss">
  @include b(guide-program){
      height: unit(68);
      border: unit(1) solid $C21;
      background-color: $C15;
    padding: 0 unit(30);
    display: flex;
    justify-content: center;
    flex-direction: column;
    @include e(title){
      @include text(29,$C35);
    }
    @include e(subtitle){
      @include text(32,$C34);
    }
    @include when(now){
      background-color: $C21;
      @include e(title){
        @include text(29,$C31);
      }
    }
  }
</style>
