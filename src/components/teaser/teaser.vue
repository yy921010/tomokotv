<template>
  <div class="c-teaser">
    <template v-if="type === 'single'">
      <div
        class="c-teaser__content--big"
        v-for="(item, index) in items"
        :key="index"
        @click="handleClick(item)"
      >
        <t-poster :url="item.background" :width="1220" :height="339">
          <div class="c-teaser__label" v-if="item.label">{{ item.label }}</div>
          <div class="c-teaser__mask">
            <div class="c-teaser__mask--genre" :title="item.genre">
              {{ item.genre }}
            </div>
            <div class="c-teaser__mask--title is-big-title" :title="item.title">
              {{ item.title }}
            </div>
            <div class="c-teaser__mask--meta" :title="item.meta">
              {{ item.meta }}
            </div>
          </div>
        </t-poster>
      </div>
    </template>
    <template v-else>
      <div
        class="c-teaser__content"
        v-for="(item, index) in items"
        :key="index"
        @click="handleClick(item)"
      >
        <t-poster :url="item.background" :width="602" :height="339">
          <div class="c-teaser__label" v-if="item.label">{{ item.label }}</div>
          <div class="c-teaser__mask">
            <div class="c-teaser__mask--genre" :title="item.genre">
              {{ item.genre }}
            </div>
            <div class="c-teaser__mask--title" :title="item.title">
              {{ item.title }}
            </div>
            <div class="c-teaser__mask--meta" :title="item.meta">
              {{ item.meta }}
            </div>
          </div>
        </t-poster>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TTeaser',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'couple',
      validate: (val) => ['couple', 'single'].includes(val)
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
@mixin base {
  margin-left: unit(20);
  width: unit(462);
  @include text-overflow;
}
@include c(teaser) {
  width: unit(1220);
  margin: 0 auto unit(60);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  @include e(content) {
    overflow: hidden;
    @include e(label) {
      position: absolute;
      top: 0;
      left: unit(20);
      z-index: 9;
      background-color: $C01;
      border-radius: unit(2);
      @include text(16, $C06);
      padding: 0 5px 3px 5px;
    }
    @include e(mask) {
      position: absolute;
      background-image: map_get($mask, 6);
      width: 100%;
      height: unit(140);
      z-index: 9;
      bottom: 0;
      @include m(genre) {
        @include base;
        @include text(25)
      }
      @include m(title) {
        @include base;
        @include text(20);
        @include when(big-title){
          width: unit(900);
        }
      }
      @include m(meta) {
        @include base;
        @include text(17)
      }
    }
  }
}
</style>
