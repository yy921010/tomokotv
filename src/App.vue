<template>
  <div id="app">
    <nav>
      <header-wrap/>
    </nav>
    <main>
      <router-view/>
      <footer-wrap/>
    </main>
    <!-- 此区域，描述项目整体背景图 -->
    <div id="frosted" :style="{'background-image':'url('+bgUrl+')'}">
    </div>
    <normalDialog/>
  </div>
</template>
<script>
import headerWrap from './views/header/header'
import footerWrap from './views/footer/footer'
import normalDialog from './views/dialog'
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
  }
}
</script>
<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    background-color: $C07;
    user-select: none;
    font-family: 'Josefin Sans', 'Noto Sans SC', sans-serif;
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
      }
      #frosted{
        height: unit(2000);
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: fixed;
        z-index: -1;
        -webkit-filter: blur(unit(15));
        -moz-filter: blur(unit(15));
        -o-filter: blur(unit(15));
        -ms-filter: blur(unit(15));
        filter: blur(unit(55))  brightness(20%);

      }
    }
  }

</style>
