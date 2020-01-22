<template>
  <div class="tmk-header">
    <div class="tmk-header__normal-mode">
      <div class="logo" @click="backToHome">
        <img :src="logoUrl" alt="logo">
      </div>
      <div class="title">{{title}}</div>
      <div class="actions">
        <t-button class="login-btn" size="mini" @click="openLoginDialog">{{$t("header.login_btn")}}</t-button>
        <t-icon class="search-btn" name="search" :size="20"></t-icon>
        <t-icon class="menu-btn" name="menu" :size="20"></t-icon>
      </div>
    </div>
    <div class="tmk-header__search-mode"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TmkHeader',
  data () {
    return {
      logoUrl: require('@assets/logo.png')
    }
  },
  computed: {
    ...mapState('Header', {
      title: s => s.title
    })
  },
  methods: {
    ...mapActions('Dialog', {
      open: 'open'
    }),
    backToHome () {
      this.$router.push({
        name: 'home'
      })
    },
    openLoginDialog () {
      this.open({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="scss">
@include b(header) {
  width: 100%;
  height: unit(60);
  background-color: $C06;
  display: flex;
  align-items: center;
  flex-direction: column;
  @include e(normal-mode) {
    display: flex;
    width: unit(1380);
    align-items: center;
    height: 100%;
    .logo{
      width: 70px;
      height: 35px;
      cursor: pointer;
      img{
        max-width: 70px;
        max-height: 35px;
      }
    }
    .title{
      flex: 1;
      text-align: center;
      @include text(29);
    }
    .actions{
      .login-btn{

      }
      .search-btn{
        cursor: pointer;
        margin-left: unit(20);
      }
      .menu-btn{
        cursor: pointer;
        margin-left: unit(20);
      }
    }
  }
}
</style>
