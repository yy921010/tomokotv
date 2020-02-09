<template>
    <div class="tmk-program-detail">
     <div class="tmk-program-detail__detail-main">
       <div class="tmk-program-detail__left">
         <t-poster :width="610" :height="344" :src="'http://img5.mtime.cn/CMS/News/2019/05/04/140021.38161755_620X620.jpg'"/>
       </div>
       <div class="tmk-program-detail__right">
         <div class="tmk-program-detail__title">
           <div class="tmk-program-detail__title--main">title</div>
           <t-icon name="notification-2" type="fill" :size="20"></t-icon>
         </div>
         <div class="tmk-program-detail__subtitle">subt title</div>
         <div class="tmk-program-detail__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur corporis,
           distinctio dolore doloremque expedita iusto non officia officiis sed ullam, voluptas. Cum debitis dolorum ipsam laborum porro, ut.</div>
         <div class="tmk-program-detail__buttons">
           <t-button>cancel remimber</t-button>
           <t-button type="primary">remimber</t-button>
         </div>
       </div>
     </div>
      <div class="tmk-program-detail__line"></div>
      <div class="tmk-program-detail__recommend"></div>
    </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style scoped lang="scss">
@include b(program-detail){
  width: unit(1220);
  display: flex;
  flex-direction: column;
  margin-top: unit(15);
  @include e(detail-main){
    display: flex;
    @include e(left){
      margin-right: unit(30);
    }
    @include e(right){
      @include e(title){
        @include text(32);
        display: flex;
        @include e(title--main){
          margin-right: unit(20);
        }
      }
      @include e(subtitle){
        margin-top: unit(20);
        @include text(29)
      }
      @include e(description){
        margin-top: unit(20);
        @include text(29,$C35)
      }
      @include e(buttons){
        margin-top: unit(20);
      }
    }
  }
  @include e(line){
    border: unit(1) solid $C03;
    margin-top: unit(40);
  }
  @include e(recommend){

  }
}
</style>
