<template>
  <div id="app">
    <nav>
      <!-- 头部区域 -->
      <header-wrap />
    </nav>
    <main>
      <!-- 主页面区域 -->
      <router-view />
      <!-- 页脚区域 -->
      <footer-wrap />
    </main>
    <!-- 此区域，描述项目整体背景图 -->
    <div
      id="frosted"
      :style="{ 'background-image': 'url(' + bgUrl + ')' }"
    ></div>
    <!-- 全局 module 弹窗 -->
    <normalDialog />
    <!-- 全局 tips 弹窗 -->
    <transition name="fade">
      <Snackbar :messages="message" v-if="isShowSnack" />
    </transition>
  </div>
</template>
<script>
import headerWrap from './views/header'
import footerWrap from './views/footer/footer'
import normalDialog from './views/dialog'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    headerWrap,
    footerWrap,
    normalDialog
  },
  data () {
    return {
      bgUrl: ''
    }
  },
  computed: {
    ...mapState({
      message: s => s.message,
      isShowSnack: s => s.isShowSnack
    })
  },
  created () {
    let vuexStorage = this.$session.get('vuex')
    if (vuexStorage) {
      this.$store.replaceState(Object.assign({}, vuexStorage))
    }
    window.addEventListener('beforeunload', () => {
      this.$session.put('vuex', this.$store.state)
    })
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  background-color: $C07;
  user-select: none;
  font-family: "Josefin Sans", "Noto Sans SC", sans-serif;
  box-sizing: border-box;
  color: $C31;
  height: 100%;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  #app {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    bottom: 0;
    left: 0;
    right: 0;
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }
    main {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: unit(1220);
    }
    #frosted {
      height: unit(2000);
      width: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: fixed;
      z-index: -1;
      filter: blur(unit(55)) brightness(20%);
    }
  }
}
</style>
