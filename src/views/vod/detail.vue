<template>
  <div class="tmk-vod-detail">
    <div class="tmk-vod-detail__content">
      <div class="tmk-vod-detail__info">
        <div class="tmk-vod-detail__title">title</div>
        <div class="tmk-vod-detail__meta">
          <div class="rating">
            <t-icon name="star" :size="18"></t-icon>
            <t-icon name="star" :size="18"></t-icon>
            <t-icon name="star" :size="18"></t-icon>
            <t-icon name="star" :size="18"></t-icon>
            <t-icon name="star" :size="18"></t-icon>
          </div>
          <div class="rating-number">rating-number</div>
          <t-icon name="user" :size="18" class="watch-users"></t-icon>
          <div class="watch-user-number">watch-user-number</div>
          <div class="other-info">other-info</div>
          <div class="quality">
            <t-icon name="hd" type="fill" :size="18"></t-icon>
          </div>
        </div>
        <div class="tmk-vod-detail__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          cum cupiditate dolor dolore dolorem facere ipsa iusto optio quae rem
          reprehenderit sed, sit. Atque commodi eos expedita maxime sed!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          cum cupiditate dolor dolore dolorem facere ipsa iusto optio quae rem
          reprehenderit sed, sit. Atque commodi eos expedita maxime sed!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          cum cupiditate dolor dolore dolorem facere ipsa iusto optio quae rem
          reprehenderit sed, sit. Atque commodi eos expedita maxime sed!
        </div>
      </div>
      <div class="tmk-vod-detail_poster">
        <t-poster url="http://img5.mtime.cn/mt/2020/01/08/104948.27498713_185X277X4_185X277X4.jpg" :width="300" :height="400"></t-poster>
      </div>
    </div>
    <div class="tmk-vod-detail__button">
      <t-button> play</t-button>
    </div>
    <div class="tmk-vod-detail__explode">
      <div class="title">分级</div>
    </div>
    <div class="tmk-vod-detail__cast">
      <div class="title">演员</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@include b(vod-detail) {
  position: relative;
  @include e(content) {
    width: unit(1220);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @include e(info) {
      width: unit(880);
      @include e(title) {
        @include text(22);
        margin-top: unit(45);
        margin-bottom: unit(15);
      }
      @include e(meta) {
        display: flex;
        align-items: center;
        margin-bottom: unit(20);
        .rating {
          margin-right: unit(15);
        }
        .rating-number {
          @include text(27);
          margin-right: unit(60);
        }
        .watch-users {
          color: $C41;
          margin-right: unit(60);
        }
        .watch-user-number {
          @include text(29);
          margin-right: unit(60);
        }
        .other-info {
          @include text(29);
          margin-right: unit(10);
        }
      }
      @include e(description) {
        @include text(29, $C35);
      }
    }
    @include e(poster){

    }
  }
  @include e(explode){
    margin-top: unit(45);
    .title{
      @include text(13)
    }
  }
  @include e(cast){
    margin-top: unit(45);
    .title{
      @include text(13)
    }
  }
}
</style>
