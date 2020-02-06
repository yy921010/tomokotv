<template>
  <div class="tmk-confirm">
      <div class="tmk-confirm__top">
        <div class="tmk-confirm__top--title">{{$t('confirm.title')}}</div>
        <div class="tmk-confirm__top--close" @click="cancel('confirm')">
          <t-icon name="close" :size="32"></t-icon>
        </div>
      </div>
      <div class="tmk-confirm__content">{{contentConfirm}}</div>
      <div class="tmk-confirm__bottom">
        <t-button size="small" @click="cancel('confirm')">{{$t('confirm.cancel')}}</t-button>
        <t-button type="primary" size="small" @click="confirm('confirm')">{{$t('confirm.yes')}}</t-button>
      </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'confirm',
  computed: {
    ...mapState('Dialog', {
      title: s => s.dialogTitle,
      contentConfirm: s => s.content
    })
  },
  methods: {
    ...mapMutations('Dialog', {
      cancel: 'cancel',
      confirm: 'confirm'
    })
  }
}
</script>
<style lang="scss">
  @include b(confirm){
    width: unit(460);
    background-color: $C14;
    border-radius: unit(4);
    display: flex;
    flex-direction: column;
    @include e(top){
      height: unit(60);
      border-bottom: unit(1) solid $C19;
      display: flex;
      align-items: center;
      @include m(title){
        text-align: center;
        flex: 1;
        margin-left: unit(30);
        @include text(14, $C35);
      }
      @include m(close){
        margin-right: unit(30);
        color: $C35;
        cursor: pointer;
        &:hover {
          color: $C31;
        }
      }
    }
    @include e(content){
      @include text(29,$C31);
      padding: 0 unit(30) 0 unit(30);
      margin-top: unit(35);
    }
    @include e(bottom){
      width: unit(460-60);
      margin-top: unit(35);
      margin-bottom: unit(35);
      align-self: center;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
