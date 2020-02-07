<template>
  <div class="tmk-footer">
    <div class="tmk-footer--container">
      <div class="tmk-footer__main">
        <div class="firstally">
          <div class="title">{{$t('footer.logoTitle')}}</div>
          <p class="description">{{$t('footer.description')}}</p>
        </div>
        <div class="secondary">
          <div class="title">{{$t('footer.moreLink')}}</div>
          <ul class="list">
            <li class="items">
              <span class="item-content" v-for="(link,index) in moreLinks" :key="index">
                <mo-icon :name="link.iconName" :size="24"></mo-icon>
                <span class="item-text">{{link.linkName}}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="tmk-footer__utility">
        <ul class="list">
          <li class="item" v-for="(link,index) in footerMenus" :key="index">
            <span class="item-link">{{link.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TmkFooter',
  data () {
    return {
      moreLinks: [],
      footerMenus: []
    }
  }
}
</script>

<style lang="scss" scoped>
  @include b(footer) {
    border-top: unit(1) solid $C03;
    background-color: $C06;
    height: unit(364);
    width: 100%;
    @include m(container) {
      position: relative;
      margin: 0 auto;
      height: 100%;
      width: unit(1220);
      @include e(main) {
        padding: unit(48) unit(48) unit(32);
        height: 62%;
        &:before {
          content: " ";
          display: table;
        }
        .firstally {
          width: 66%;
          float: left;
          height: 100%;
          border-right: unit(1) solid $C03;
          .title {
            @include text(29);
            color: $C32;
          }
          .description {
            line-height: unit(30);
            padding-right: unit(32);
          }
        }
        .secondary {
          width: 32%;
          float: left;
          padding-left: unit(16);
          .title {
            @include text(29);
            color: $C32;
          }
          .list {
            width: 100%;
            cursor: pointer;
            .items {
              float: left;
              width: 50%;
              padding: 4px 0;
              fill: $C31;
              &:hover {
                opacity: 0.7;
              }
              .item-content {
                margin-right: unit(20);
                .item-text {
                  margin-left: unit(10);
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      @include e(utility) {
        padding: 0 unit(48);
        .list {
          height: 50px;
          position: relative;
          top: 5px;
          border-top: 1px solid $C03;
          // color: rgba(map_get($GREY, 50), .32);
          float: left;
          width: 100%;
          .item {
            display: inline-block;
            line-height: 50px;
            margin: 0;
            .item-link {
            }
            &:nth-child(2) {
              float: right;
              margin-right: 0;
            }
            &:nth-child(3) {
              float: right;
            }
            &:last-child {
              float: right;
            }
          }
        }
      }
    }
  }
</style>
