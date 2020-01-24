<template>
  <div class="tmk-sub-profile">
    <div class="tmk-sub-profile__add-profile">
      <t-button icon="add" type="link">{{ $t("subProfile.addBtn") }}</t-button>
    </div>
    <div class="tmk-sub-profile__list">
      <div class="tmk-sub-profile__item">
        <div class="profile-avatar">
          <img :src="require('@assets/logo.png')" alt="" />
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
@include b(sub-profile) {
  @include e(add-profile) {
  }
  @include e(list) {
    @include e(item) {
      height: unit(140);
      cursor: pointer;
      &:hover {
        background-color: $C03;
      }
      .profile-avatar {
        height: unit(80);
        width: unit(80);
        overflow: hidden;
        border-radius: 50%;
        >img{
          width: 100%;
          height: 100%;
        }
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
