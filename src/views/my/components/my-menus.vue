<template>
  <div class="tmk-my-menu">
    <div class="tmk-my-menu__user">
      <img class="avatar" :src="userInfo.avatarUrl">
      <span class="username">{{userInfo.username}}</span>
      <span class="rating-level">{{userInfo.ageLevel}}</span>
      <div class="is-admin-crow">
        <t-icon name="vip-crown"></t-icon>
      </div>
    </div>
    <div class="tmk-my-menu__list">
      <div
        class="menu-item"
        v-for="(menuInfo, mIndex) of menus"
        :key="mIndex"
      >
        <div class="first-level" v-if="menuInfo.firstMenu !== ''">
          {{ $t(menuInfo.firstMenu) }}
        </div>
        <div
          class="second-level"
          v-for="(secInfo, msIndex) of menuInfo.secondMenu"
          :key="msIndex"
          @click="handleChosen(secInfo.id)"
          :class="[{ 'is-active': secInfo.id === chosenMenu }]"
        >
          <t-icon
            class="icon"
            :name="secInfo.iconName"
            type="fill"
            :size="16"
          ></t-icon>
          <span class="second-level-title">{{ $t(secInfo.name) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myMenu',
  data: () => ({
    menus: [
      { firstMenu: 'menu.contentManager',
        secondMenu: [
          {
            id: 'HistoryVideo',
            name: 'menu.historyVideo',
            iconName: 'tv'
          },
          {
            id: 'FavoriteVideo',
            name: 'menu.favoriteVideo',
            iconName: 'video'
          }
        ] },
      { firstMenu: 'menu.channelManager',
        secondMenu: [
          {
            id: 'FavoriteChannel',
            name: 'menu.favoriteChannel',
            iconName: 'tv'
          },
          {
            id: 'LockedChannel',
            name: 'menu.lockedChannel',
            iconName: 'lock'
          }
        ] },
      {
        firstMenu: '',
        secondMenu: [
          {
            id: 'Reminders',
            name: 'menu.reminders',
            iconName: 'notification'
          }, {
            id: 'Purchases',
            name: 'menu.purchases',
            iconName: 'shopping-cart-2'
          }
        ]
      },
      {
        firstMenu: '',
        secondMenu: [
          {
            id: 'Profiles',
            name: 'menu.profiles',
            iconName: 'profile'
          },
          {
            id: 'DeviceName',
            name: 'menu.deviceName',
            iconName: 'device'
          },
          {
            id: 'Logout',
            name: 'menu.logout',
            iconName: 'login-circle'
          }
        ]
      }
    ],
    chosenMenu: ''
  }),
  props: {
    userInfo: {
      type: Object,
      default: () => ({
        avatarUrl: '',
        username: '',
        ageLevel: ''
      })
    }
  },
  methods: {
    handleChosen (chosenId) {
      this.chosenMenu = chosenId
      this.$emit('click', chosenId)
    }
  }
}
</script>

<style lang="scss">
  @include b(my-menu) {
    height: unit(980);
    width: unit(264);
    background-color: $C18;

    @include e(user) {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: unit(1) solid $C21;
      .avatar {
        margin-top: unit(40);
        margin-bottom: unit(20);
        width: unit(76);
        height: unit(76);
        border-radius: 50%;
        cursor: pointer;
        &:hover{
          opacity: 0.7;
        }
      }
      .username {
        @include text(23);
        width: unit(204);
        height: unit(30);
        line-height: unit(30);
        text-align: center;
        margin-bottom: unit(42);
      }
      .rating-level {
        @extend .username;
        @include text(23);
        color: $C35;
      }
    }
    @include e(list) {
      height: 100%;
      display: flex;
      flex-direction: column;
      .menu-item {
        margin-top: unit(10);
        border-bottom: unit(1) solid $C21;
        &:last-child {
          border-bottom: none;
        }
        .first-level {
          @include text(16);
          color: $C35;
          height: unit(40);
          line-height: unit(40);
          text-indent: unit(30);
        }
        .second-level {
          cursor: pointer;
          @include text(29);
          color: $C35;
          height: unit(40);
          line-height: unit(40);
          text-indent: unit(30);
          transition: $transition-time;
          display: flex;
          position: relative;
          &:last-child {
            margin-bottom: unit(10);
          }
          &.is-active{
            background-color: $C03;
            &::before{
              content: "";
              width: unit(4);
              height: 100%;
              position: absolute;
              z-index: 1;
              left: 0;
              top: 0;
              background-color: $C04;
              transition: $transition-time;
            }
          }
          &:hover {
            background-color: $C03;
            color: $C31;
            fill: $C31;
          }
          .icon {
            margin-right: unit(15);
          }
          .second-level-title {
          }
        }
      }
    }
  }
</style>
