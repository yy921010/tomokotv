<template>
  <div class="tmk-header">
    <div class="tmk-header__normal-mode">
      <div class="logo" @click.stop="home">
        <img :src="logoUrl" alt="logo" />
      </div>
      <div class="title" :title="title">{{ title }}</div>
      <div class="actions">
        <t-icon
          class="search-btn"
          name="search"
          :size="20"
          v-show="!isShowMenu"
        ></t-icon>
        <user-header v-show="!isShowMenu" />
        <t-icon
          class="menu-btn"
          :name="menuIconName"
          :size="20"
          @click.stop="openMenu"
        ></t-icon>
      </div>
      <transition name="fade">
        <subMenus :menus="menus" v-if="isShowMenu" @click="changeMenu" />
      </transition>
    </div>
    <div class="tmk-header__search-mode"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import userHeader from './user-header'
import subMenus from './sub-menus'
import { getMenu } from '@api/menu'

const selectListenerFunc = function () {
  this.isShowMenu = false
}

export default {
  name: 'TmkHeader',
  data () {
    return {
      logoUrl: require('@assets/logo.png'),
      menus: [],
      isShowMenu: false
    }
  },
  components: {
    userHeader,
    subMenus
  },
  computed: {
    ...mapState('Header', {
      title: s => s.title
    }),
    menuIconName () {
      return this.isShowMenu ? 'close' : 'menu'
    }
  },
  async mounted () {
    this.menus = await getMenu()
    document.addEventListener('click', selectListenerFunc.bind(this))
  },
  destroyed () {
    document.removeEventListener('click', selectListenerFunc.bind(this))
  },
  methods: {
    home () {
      this.$router.push({
        name: 'home'
      })
    },
    openMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    changeMenu () {
      this.isShowMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(header) {
  width: 100%;
  height: unit(60);
  background-color: $C06;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include e(normal-mode) {
    display: flex;
    width: unit(1220);
    align-items: center;
    height: 100%;
    position: relative;
    .logo {
      position: absolute;
      width: 70px;
      height: 35px;
      cursor: pointer;
      left: 0;
      img {
        max-width: 70px;
        max-height: 35px;
      }
    }
    .title {
      flex: 1;
      text-align: center;
      @include text(27);
    }
    .actions {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      cursor: pointer;
      .login-btn {
      }
      .search-btn {
        cursor: pointer;
        margin-right: unit(20);
      }
      .menu-btn {
        cursor: pointer;
        margin-left: unit(20);
      }
    }
  }
}
</style>
