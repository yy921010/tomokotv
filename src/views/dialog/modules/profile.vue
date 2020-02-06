<template>
  <div class="tmk-dialog-profile">
    <div class="tmk-dialog-profile__top">
      <div class="tmk-dialog-profile__top--title">
        {{ title }}
      </div>
      <div class="tmk-dialog-profile__top--close">
        <t-icon name="close" :size="32" @click="cancel('profile')"></t-icon>
      </div>
    </div>
    <div class="tmk-dialog-profile__content">
      <div class="tmk-dialog-profile__avatar">
        <avatar-selected
        :showSize="5"
        :avatars="getCustomConfig('AVATAR_LIST')"
        @click="changeAvatar"
        :main-avatar="content.avatarUrl"
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
            <span class="label">{{ $t("user.password") }}</span>
            <t-input class="input" v-model="password" type="center"></t-input>
          </div>
          <div class="tmk-dialog-profile__form--item">
            <span class="label">{{ $t("user.reNewPassword") }}</span>
            <t-input class="input" v-model="reNewPassword" type="center"></t-input>
          </div>
          <div class="tmk-dialog-profile__form--item tmk-dialog-profile__form--button">
            <span class="label"></span>
            <t-button @click="cancel('profile')">{{$t('confirm.cancel')}}</t-button>
            <t-button type="primary" @click="confirm('profile')">{{$t('confirm.yes')}}</t-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'profile',
  data () {
    return {
      reNewPassword: ''
    }
  },
  computed: {
    ...mapState('Dialog', {
      title: s => s.dialogTitle,
      content: s => s.content
    }),
    ...mapGetters('CustomConfig', {
      getCustomConfig: 'getCustomConfig'
    }),
    username: {
      set (username) {
        this.transitData({ username })
      },
      get () {
        return this.content.username
      }
    },
    password: {
      set (password) {
        this.transitData({ password })
      },
      get () {
        return this.content.password
      }
    },
    ageLevel: {
      set (ageLevel) {
        this.transitData({ ageLevel })
      },
      get () {
        return this.content.ageLevel || 0
      }
    }
  },
  methods: {
    ...mapMutations('Dialog', {
      cancel: 'cancel',
      confirm: 'confirm',
      transitData: 'transitData'
    }),
    changeAvatar (avatarUrl) {
      this.transitData({ avatarUrl })
    }
  }
}
</script>

<style lang="scss">
@include b(dialog-profile) {
  width: unit(720);
  background-color: $C14;
  border-radius: unit(4);
  padding-bottom: unit(35);
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
      @include m(button){
        margin-top: unit(35);
      }
    }
  }
}
</style>
