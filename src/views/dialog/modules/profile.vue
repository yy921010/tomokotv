<template>
  <div class="tmk-dialog-profile">
    <div class="tmk-dialog-profile__top">
      <div class="tmk-dialog-profile__top--title">
        {{ title }}
      </div>
      <div class="tmk-dialog-profile__top--close">
        <t-icon name="close" :size="32" @click="close"></t-icon>
      </div>
    </div>
    <div class="tmk-dialog-profile__content">
      <div class="tmk-dialog-profile__avatar">
        <avatar-selected
        :showSize="5"
        :avatars="getCustomConfig('AVATAR_LIST')"
        @click="changeAvatar"
        :main-avatar="profile.avatarUrl"
      ></avatar-selected>
      </div>
      <div class="tmk-dialog-profile__form">
        <form>
          <div class="tmk-dialog-profile__form--item">
            <span class="label">{{ $t("user.username") }}</span>
            <t-input class="input" v-model="username" type="center"></t-input>
          </div>
          <div class="tmk-dialog-profile__form--item">
            <span class="label">{{ $t("user.ageLevel") }}</span>
            <t-select
              class="input"
              :options="getCustomConfig('AGE_LEVEL')"
              type="center"
              v-model="ageLevel"
            ></t-select>
          </div>

          <div class="tmk-dialog-profile__form--item">
            <span class="label"></span>
            <t-button>dsadsa</t-button>
            <t-button>dsds</t-button>
          </div>
        </form>
      </div>
    </div>
    <div class="tmk-dialog-profile__bottom"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'profile',
  computed: {
    ...mapGetters('CustomConfig', {
      getCustomConfig: 'getCustomConfig'
    }),
    ...mapState('Dialog', {
      profile: s => s.profile,
      title: s => s.profileDialogTitle
    }),
    username: {
      set (username) {
        this.setProfile({
          username
        })
      },
      get () {
        return this.profile.username
      }
    },
    nickname: {
      set (nickname) {
        this.setProfile({
          nickname
        })
      },
      get () {
        return this.profile.nickname
      }
    },
    ageLevel: {
      set (ageLevel) {
        this.setProfile({
          ageLevel
        })
      },
      get () {
        return this.profile.ageLevel
      }
    }
  },
  methods: {
    ...mapMutations('Dialog', {
      confirmCallback: 'confirmCallback',
      cancelCallback: 'cancelCallback',
      setProfile: 'setProfile'
    }),
    changeAvatar (avatarUrl) {
      this.setProfile({
        avatarUrl
      })
    },
    close () {
      this.cancelCallback()
    },
    confirm () {}
  }
}
</script>

<style lang="scss">
@include b(dialog-profile) {
  width: unit(720);
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
    @include e(avatar){}
    @include e(form){
      margin-top: unit(40);
        @include m(item){
          display: flex;
          margin-bottom: unit(20);
          .label{
            @include text(29, $C35);
            margin-right: unit(20);
            width: unit(80);
            line-height: unit(46);
          }
          .input{
            width: unit(460);
          }
      }
    }
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
