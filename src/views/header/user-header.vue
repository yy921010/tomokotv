<template>
  <div class="tmk-user-header">
    <template v-if="!isLogin">
      <t-button class="login-btn" size="mini" @click.stop="openLoginDialog">{{
        $t("header.login_btn")
      }}</t-button>
    </template>
    <template v-else>
      <div class="tmk-user-header__dropdown" @click.stop="isShowSubMenu = true">
        <t-avatar user-avatar :avatar-url="userInfo.avatarUrl"></t-avatar>
        <div class="user-name" :title="userInfo.nickName">
          {{ userInfo.nickName }}
        </div>
      </div>
      <div class="tmk-user-header__arrow" v-show="isShowSubMenu"></div>
      <ul class="tmk-user-header__menu" v-show="isShowSubMenu">
        <li class="user-id-item" @click="targetHandle('MyUser')">
          <span> {{ $t("menu.userId") }} {{ userInfo.username }}</span>
        </li>
        <li
          class="feature-item"
          v-for="(menuInfo, mIndex) of getSubmenu"
          @click.stop="targetHandle(menuInfo.id)"
          :key="mIndex"
        >
          <t-icon class="icon" :name="menuInfo.iconName" :size="18"></t-icon>
          <span class="item-name">{{ $t(menuInfo.name) }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Login from '@mixin/Login'
const dropdownListenerFunc = function () {
  this.isShowSubMenu = false
}

export default {
  name: 'user-header',
  mixins: [Login],
  data: () => ({
    isShowSubMenu: false
  }),
  computed: {
    ...mapState('Login', {
      isLogin: s => s.isLogin,
      userInfo: s => s.userInfo
    }),
    ...mapGetters('My', {
      getSubmenu: 'getSubmenu'
    })
  },
  mounted () {
    document.addEventListener('click', dropdownListenerFunc.bind(this))
  },
  destroyed () {
    document.removeEventListener('click', dropdownListenerFunc.bind(this))
  },
  methods: {
    ...mapActions('Dialog', {
      openDialog: 'open'
    }),
    openLoginDialog () {
      this.openDialog({
        name: 'login'
      })
    },
    targetHandle (menuId) {
      this.isShowSubMenu = false
      if (menuId === 'Logout') {
        this.userLogout()
        return
      }
      this.$router.push({
        name: menuId
      })
    }
  }
}
</script>

<style lang="scss">
@include b(user-header) {
  position: relative;
  .login-btn {
  }
  @include e(dropdown) {
    display: flex;
    align-items: center;

    .user-avatar {
      background-color: #000;
      width: unit(35);
      height: unit(35);
      border-radius: 50%;
    }
    .user-name {
      @include text(29, $C35);
      margin-left: unit(10);
      width: unit(100);
      @include text-overflow;
      &:hover {
        @include text(29, $C31);
      }
    }
  }
  @include e(arrow) {
    border: 8px solid transparent;
    border-bottom: 8px solid $C12;
    width: 0;
    height: 0;
    position: absolute;
    top: unit(42);
    left: unit(62);
    z-index: 4;
  }
  @include e(menu) {
    width: unit(218);
    position: absolute;
    background-color: $C12;
    top: unit(58);
    left: unit(-40);
    box-shadow: map_get($mask, 5);
    z-index: 4;
    border-radius: unit(4);
    .user-id-item {
      padding: unit(10) unit(20) unit(10) unit(20);
      @include text(32, $C31);
      @include text-overflow;
      &:hover {
        background-color: $C03;
      }
    }
    .feature-item {
      height: unit(32);
      @include text(32, $C35);
      text-indent: unit(20);
      display: flex;
      align-items: center;
      .icon {
        fill: $C35;
      }
      .item-name {
        margin-left: unit(15);
      }
      &:last-child {
        margin-bottom: unit(20);
      }
      &:hover {
        background-color: $C03;
        color: $C31;
        fill: $C31;
      }
    }
  }
}
</style>
