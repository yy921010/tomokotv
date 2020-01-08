<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      {{$t("hello")}}
    </div>
    <button @click="$i18n.locale = 'en'">button</button>
    <router-view/>
  </div>
</template>

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
      min-height: 100%;
      display: flex;
      flex-direction: column;
      header {
        position: fixed;
        z-index: 999;
        top: 0;
        width: 100%;
      }

      main {
        margin: 0 auto;
        padding: 0 unit(10);
        display: block;
        position: relative;
        width: unit(1380);
        flex: 1;
        min-height: calc(100% - 100px);
      }

      footer {
        bottom: 0;
        width: 100%;
        margin-top: unit(60);
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
