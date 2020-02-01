<template>
  <div class="u-modify-info">
    <div class="u-modify-info__avatar">
      <t-avatar
        :size="130"
        mask-icon="edit"
        :src="avatarUrl"
        @click="showReadyAvatars"
      ></t-avatar>
    </div>
    <div class="u-modify-info__avatar-list" v-if="isShowAvatars">
      <avatarList :avatars="avatarList" @onAvatars="changeAvatar"/>
    </div>
    <div class="u-modify-info__form">
      <form>
        <div class="u-modify-info__form--item">
          <span class="label">{{ $t("user.username") }}</span>
          <t-input
            class="input"
            v-model="nickName"
            type="center"
          ></t-input>
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
        <div class="u-modify-info__form--button u-modify-info__form--item" v-if="!equalInputAndMeta()">
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
</template>

<script>
import { mapActions, mapState } from 'vuex'
import avatarList from './avatar-list'
export default {
  name: 'modify-user-info',
  components: {
    avatarList
  },
  data () {
    return {
      tabId: null,
      nickName: '',
      ageLevel: 0,
      avatarUrl: '',
      isShowButtonGroup: false,
      avatarList: [],
      isShowAvatars: false
    }
  },
  computed: {
    ...mapState('Login', {
      user: s => s.userInfo
    }),
    ...mapState('My', {
      ageLevels: s => s.ageLevels
    })

  },
  watch: {
    nickName () {
      this.equalInputAndMeta()
    },
    ageLevel () {
      this.equalInputAndMeta()
    }
  },
  async mounted () {
    this.tabId = 'modify-user-info'
    this.setInitUserInfo()
    this.avatarList = await this.getCustomConfig('AVATAR_LIST')
  },
  methods: {
    ...mapActions('CustomConfig', {
      getCustomConfig: 'getCustomConfig'
    }),
    setInitUserInfo () {
      this.avatarUrl = this.user.avatarUrl
      this.nickName = this.user.nickName
      this.ageLevel = this.user.ageLevel
    },
    equalInputAndMeta () {
      return this.avatarUrl === this.user.avatarUrl &&
        this.nickName === this.user.nickName &&
        this.ageLevel === this.user.ageLevel
    },
    changeAvatar (url) {
      this.avatarUrl = url
      this.equalInputAndMeta()
    },
    cancel () {
      this.setInitUserInfo()
    },
    showReadyAvatars () {
      this.isShowAvatars = !this.isShowAvatars
    },
    confirm () {

    }
  }
}
</script>

<style lang="scss">
@include u(modify-info) {
  width: unit(766);
  @include e(avatar){
    height: unit(130);
    width: unit(130);
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
  }
  @include e(avatar-list){
    margin-top: unit(80);
  }
  @include e(form){
    margin-top: unit(80);
    display: flex;
    justify-content: center;
    @include m(item){
      display: flex;
      margin-bottom: unit(50);
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
      display: flex;
      margin-bottom: unit(50);
      margin-top: unit(60);
      justify-content: center;
    }
  }
}
</style>
