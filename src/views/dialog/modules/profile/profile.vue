<template>
  <div class="tmk-dialog-profile">
    <div class="tmk-dialog-profile__top">
      <div class="tmk-dialog-profile__top--title">
        {{ $t("confirm.title") }}
      </div>
      <div class="tmk-dialog-profile__top--close">
        <t-icon name="close" :size="32"></t-icon>
      </div>
    </div>
    <div class="tmk-dialog-profile__content">
      <div class="tmk-dialog-profile__avatar">
        <avatar-selected
          :showSize="6"
          :avatars="avatarList"
          @click="changeAvatar"
          :main-avatar="avatarUrl"
        ></avatar-selected>
      </div>
      <div class="tmk-dialog-profile__form">
        <form>
          <div class="u-modify-info__form--item">
            <span class="label">{{ $t("user.username") }}</span>
            <t-input class="input" v-model="nickName" type="center"></t-input>
          </div>
          <div class="u-modify-info__form--item">
            <span class="label">{{ $t("user.ageLevel") }}</span>
            <t-select
              class="input"
              :options="ageLevels"
              type="center"
              v-model="ageLevel"
            ></t-select>
          </div>
          <div class="u-modify-info__form--item">
            <span class="label">{{ $t("user.username") }}</span>
            <t-input class="input" v-model="nickName" type="center"></t-input>
          </div>
          <div
            class="u-modify-info__form--button u-modify-info__form--item"
            v-if="!equalInputAndMeta()"
          >
            <span class="label"></span>
            <div class="input">
              <t-button @click="cancel">{{ $t("user.undo") }}</t-button>
              <t-button @click="confirm" type="primary">{{
                $t("user.confirm")
              }}</t-button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="tmk-dialog-profile__bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style lang="scss">
@include b(tmk-dialog-profile) {
  width: unit(460);
  background-color: $C14;
  border-radius: unit(4);
  display: flex;
  flex-direction: column;
  @include e(top) {
    height: unit(60);
    border-bottom: unit(1) solid $C19;
    display: flex;
    align-items: center;
    @include m(title) {
      text-align: center;
      flex: 1;
      margin-left: unit(30);
      @include text(14, $C35);
    }
    @include m(close) {
      margin-right: unit(30);
      color: $C35;
      cursor: pointer;
      &:hover {
        color: $C31;
      }
    }
  }
  @include e(content) {
    @include text(29, $C31);
    padding: 0 unit(30) 0 unit(30);
    margin-top: unit(35);
  }
  @include e(bottom) {
    width: unit(460-60);
    margin-top: unit(35);
    margin-bottom: unit(35);
    align-self: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
