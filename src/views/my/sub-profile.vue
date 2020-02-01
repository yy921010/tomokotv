<template>
  <div class="tmk-profile">
    <div class="tmk-profile__add">
      <t-button icon="add" type="link">{{ $t("subProfile.addBtn") }}</t-button>
    </div>
    <div class="tmk-profile__list">
      <div class="tmk-profile__list--item">
        <div class="avatar">
          <t-avatar :src="require('@assets/logo.png')" :size="80"></t-avatar>
        </div>
        <div class="info">
          <div class="title">ds</div>
          <div class="subtitle">ds</div>
        </div>
        <div class="buttons"></div>
      </div>
    </div>
    <div class="tmk-sub-profile__empty"></div>
  </div>
</template>

<script>

export default {
  name: 'sub-profile'
}
</script>

<style lang="scss">
@include b(profile) {
  @include e(add) {
  }
  @include e(list) {
    @include m(item) {
      height: unit(140);
      cursor: pointer;
      &:hover {
        background-color: $C03;
      }
      .info {
        .title{
          @include text(32,$C31);
        }
        .subtitle{
          @include text(31,$C35)
        }
      }
      .buttons {
      }
    }
  }
}
</style>
