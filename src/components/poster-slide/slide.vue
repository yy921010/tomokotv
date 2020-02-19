<template>
  <div class="c-slide" :style="slideStyle">
    <div class="c-slide__top" @click="handleClick('title', link)">
      <div class="c-slide__top--title" :title="title">{{ title }}</div>
      <t-icon
        class="c-slide__top--icon"
        name="arrow-right-s"
        :size="24"
        type="line"
      ></t-icon>
    </div>
    <div class="c-slide__background" v-if="themeBackground" :style="backgroundStyle">
      <div class="c-slide__img" :style="{
        'background-image': 'url(' + themeBackground + ')'
      }">
        <div class="c-slide__mask"></div>
      </div>
    </div>
    <p-content
      :style="pContentStyle"
      :items="items"
      :type="type"
      :theme-background="themeBackground"
      :add-count="addCount"
      @click="handleClick"
    ></p-content>
  </div>
</template>

<script>
import pContent from './content'
const ADD_COUNT = {
  v: 6,
  h: 4
}
export default {
  name: 'TSlide',
  components: {
    pContent
  },
  props: {
    type: {
      type: String,
      default: 'v',
      // v: 竖版 h: 横版
      validate: val => ['v', 'h'].includes(val)
    },
    // width 730, height 430
    themeBackground: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    addCount () {
      if (this.themeBackground) {
        return this.type === 'v' ? 4 : 3
      }
      return ADD_COUNT[this.type]
    },
    slideStyle () {
      if (this.themeBackground) {
        let height = this.type === 'v' ? '475px' : '373px'
        return {
          height
        }
      }
      return {
        height: 'auto'
      }
    },
    backgroundStyle () {
      let height = this.type === 'v' ? '418px' : '317px'
      return { height }
    },
    pContentStyle () {
      if (!this.themeBackground) {
        return {
          width: '1220px',
          margin: '0 auto'
        }
      }
      if (this.type === 'h') {
        return {
          top: '40px',
          width: '911px',
          margin: '0px 0 0 339px'
        }
      }
      return {
        top: '40px',
        width: '810px',
        margin: '0px 0 0 441px'
      }
    }
  },
  methods: {
    handleClick (type, value) {
      this.$emit('click', {
        type,
        value
      })
    }
  }
}
</script>

<style scoped lang="scss">
@include c(slide) {
  position: relative;
  margin-bottom: unit(30);
  @include e(background) {
    height: unit(418);
    width: unit(1220);
    margin-left: unit(30);
    position: absolute;
    background-color: $C16;
    @include e(img) {
      position: relative;
      height: 100%;
      width: unit(730);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      @include e(mask) {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        background-image: linear-gradient(to right, $C11, $C16);
      }
    }
  }
  @include e(top) {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: unit(20);
    transition: color $transition-time;
    margin-left: unit(30);
    &:hover {
      color: $C35;
      > .c-slide__top--title {
        color: $C35;
      }
    }
    @include m(title) {
      @include text(13);
      transition: color $transition-time;
      margin-right: unit(10);
    }
    @include m(icon) {
      color: $C03;
    }
  }
  @include e(container) {
    position: relative;
    width: unit(1220);
    margin: 0 auto;
    @include m(left) {
      position: absolute;
      left: unit(-32);
      display: flex;
      top: 0;
      align-items: center;
      cursor: pointer;
      transition: color $transition-time;
      &:hover {
        color: $C35;
      }
    }
    @include m(right) {
      position: absolute;
      right: unit(-32);
      display: flex;
      top: 0;
      align-items: center;
      cursor: pointer;
      transition: color $transition-time;
      &:hover {
        color: $C35;
      }
    }
    @include m(views) {
      overflow: hidden;
      @include e(ul) {
        display: flex;
        transition: transform $transition-time ease-in;
        @include e(item) {
          margin-right: unit(15);
          cursor: pointer;
          @include e(info) {
            display: flex;
            flex-direction: column;
            @include m(title) {
              @include text(29);
              @include text-overflow;
              width: 100%;
              margin-top: unit(15);
            }
            @include m(subtitle) {
              @include text(32);
              color: $C35;
              @include text-overflow;
              width: 100%;
              margin-top: unit(10);
            }
          }
        }
      }
    }
  }
}
</style>
