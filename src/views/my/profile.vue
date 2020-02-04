<template>
  <div class="tmk-profile">
    <div class="tmk-profile__add">
      <t-button icon="add" type="link" @click="addProfile">{{ $t("subProfile.addBtn") }}</t-button>
    </div>
    <div class="tmk-profile__list">
      <div class="tmk-profile__list--item" v-for="(profile,index) in profiles" :key="index">
        <div class="avatar">
          <t-avatar :src="profile.avatarUrl" :size="80"/>
        </div>
        <div class="info">
          <div class="title">
            {{profile.username}}
          </div>
          <div class="subtitle">
            <span>{{$t('subProfile.agelevel')}} :</span>
            {{profile.ageLevel}}
          </div>
        </div>
        <div class="buttons">
          <t-button size="small">{{ $t("subProfile.editInfo") }}</t-button>
          <t-button type="primary" size="small" @click="delProfile(profile)">{{
            $t("subProfile.delProfile")
          }}</t-button>
        </div>
      </div>
    </div>
    <div class="tmk-sub-profile__empty"></div>
  </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapState('Login', {
      userInfo: s => s.userInfo
    }),
    ...mapState('My', {
      profiles: s => s.profiles
    })
  },
  mounted () {
    this.getProfiles()
  },
  methods: {
    ...mapActions('My', {
      getProfiles: 'getProfiles'
    }),
    ...mapMutations('My', {
      setProfiles: 'SET_PROFILES'
    }),
    ...mapActions('Dialog', {
      confirm: 'confirm'
    }),
    addProfile () {

    },
    delProfile ({ username }) {
      this.confirm({
        content: this.$t('confirm.delContent', {
          user: username
        }),
        yesCallback: () => {
          console.log(23123)
        }
      })
    }
  },
  destroyed () {
    // clear cache
    this.setProfiles([])
  }
}
</script>

<style lang="scss">
@include b(profile) {
  @include e(add) {
    color: $C35;
  }
  @include e(list) {
    margin-top: unit(60);
    @include m(item) {
      height: unit(140);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        background-color: $C03;
        > .buttons {
          display: block;
        }
      }
      .avatar {
        margin-left: unit(60);
      }
      .info {
        .title {
          @include text(32, $C31);
          @include text-overflow;
          width: unit(400);
        }
        .subtitle {
          @include text(31, $C35);
          @include text-overflow;
          width: unit(400);
        }
      }
      .buttons {
        margin-right: unit(60);
      }
    }
  }
}
</style>
