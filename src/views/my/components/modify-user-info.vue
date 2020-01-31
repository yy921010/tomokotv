<template>
  <div class="tmk-modify-user-info" v-if="tabId === 'modify-user-info'">
    <div class="avatar-content">
      <t-avatar
        :size="130"
        mask-icon="edit"
        :src="require('@assets/logo.png')"
        @click="showReadyAvatars"
      ></t-avatar>
    </div>
    <div class="avatar-ready-list">
    </div>
    <div class="form-content">
      <form action="">
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.username") }}</span>
          <t-input
            class="form-item__value"
            v-model="username"
            type="center"
          ></t-input>
        </div>
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.ageLevel") }}</span>
          <t-select
            class="form-item__value"
            :options="ageLevels"
            type="center"
            :value="ageLevel"
            @onSelect="changeSelect"
          ></t-select>
        </div>
        <div class="form-item form-button" v-if="isShowButtonGroup">
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
import { mapState } from 'vuex'

export default {
  name: 'modify-user-info',
  data () {
    return {
      tabId: null,
      username: '',
      ageLevel: '',
      isShowButtonGroup: false
    }
  },
  computed: {
    ...mapState('Login', {
      userInfo: s => s.userInfo
    }),
    ...mapState('My', {
      ageLevels: s => s.ageLevels
    })
  },
  watch: {
    username (newVal) {
      this.isShowButtonGroup = newVal !== this.userInfo.username
    }
  },
  mounted () {
    this.tabId = 'modify-user-info'
    this.username = this.userInfo.username
    this.ageLevel = this.userInfo.ageLevel
  },
  methods: {
    cancel () {
      this.username = this.userInfo.username
    },
    changeSelect (value) {
      this.isShowButtonGroup = value !== this.userInfo.ageLevel
    },
    showReadyAvatars () {},
    confirm () {}
  }
}
</script>

<style lang="scss">
@include b(modify-user-info) {
  .avatar-content {
    height: unit(130);
    width: unit(130);
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
  }
  .form-content {
    margin-top: unit(20);
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
