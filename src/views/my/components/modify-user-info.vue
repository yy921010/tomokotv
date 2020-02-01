<template>
  <div class="tmk-modify-user-info" v-if="tabId === 'modify-user-info'">
    <div class="avatar-content">
      <t-avatar
        :size="130"
        mask-icon="edit"
        :src="avatarUrl"
        @click="showReadyAvatars"
      ></t-avatar>
    </div>
    <div class="avatar-ready-list" v-if="isShowAvatars">
      <avatarList :avatars="avatarList" @onAvatars="changeAvatar"/>
    </div>
    <div class="form-content">
      <form action="">
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.username") }}</span>
          <t-input
            class="form-item__value"
            v-model="nickName"
            type="center"
          ></t-input>
        </div>
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.ageLevel") }}</span>
          <t-select
            class="form-item__value"
            :options="ageLevels"
            type="center"
            v-model="ageLevel"
          ></t-select>
        </div>
        <div class="form-item form-button" v-if="!equalInputAndMeta()">
          <t-button @click="cancel">{{ $t("user.undo") }}</t-button>
          <t-button @click="confirm" type="primary">{{
            $t("user.confirm")
          }}</t-button>
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
      ageLevel: '',
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
@include b(modify-user-info) {
  width: unit(766);
  .avatar-content {
    height: unit(130);
    width: unit(130);
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
  }
  .avatar-ready-list{
    margin-top: unit(80);
  }
  .form-content {
    margin-top: unit(80);
    display: flex;
    justify-content: center;
    .form-item {
      display: flex;
      margin-bottom: unit(50);
      .form-item__label {
        @include text(29, $C35);
        margin-right: unit(20);
        width: unit(80);
        line-height: unit(46);
      }
      .form-item__value {
        width: unit(460);
      }
    }
    .form-button {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
