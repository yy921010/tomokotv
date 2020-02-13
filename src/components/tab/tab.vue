<template>
  <div class="c-tab">
    <div
      class="c-tab__content"
      v-for="(item, index) in items"
      :key="index"
      @click="handleClick(item)"
    >
      <t-poster :url="item.background" :width="size.width" :height="size.height">
        <div class="c-tab__mask">
          <div class="c-tab__mask--title" :title="item.title">
            {{ item.title }}
          </div>
          <div class="c-tab__mask--meta" :title="item.meta">
            {{ item.meta }}
          </div>
        </div>
      </t-poster>
    </div>
  </div>
</template>

<script>
const VIEW_WIDTH = 1220
const MARGIN_LEFT = 15
export default {
  name: 'tTab',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'double',
      validate: val => ['double', 'triple']
    }
  },
  computed: {
    size () {
      return {
        width:
          this.type === 'double'
            ? (VIEW_WIDTH - MARGIN_LEFT) / 2
            : (VIEW_WIDTH - MARGIN_LEFT * 2) / 3,
        height: 165
      }
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style scoped lang="scss">
  @include c(tab){
    width: unit(1220);
    margin: 0 auto unit(60);
    display: flex;
    justify-content: space-between;
    @include e(content){
      @include e(mask){
        position: absolute;
        z-index: 3;
        background-image: map_get($mask,2);
        width: 100%;
        height: unit(94);
        bottom: 0;
        @include m(title){
          margin-left: unit(20);
          width: unit(360);
          @include text-overflow;
          @include text(22)
        }
        @include m(meta){
          margin-left: unit(20);
          @include text(13);
        }
      }
    }
  }
</style>
