<template>
  <div class="c-slide">
    <div class="c-slide__top" @click="handleClick('title', link)">
      <div class="c-slide__top--title" :title="title">{{ title }}</div>
      <t-icon
        class="c-slide__top--icon"
        name="arrow-right-s"
        :size="24"
        type="line"
      ></t-icon>
    </div>
    <div class="c-slide__background" v-if="themeBg">
      <div
        class="c-slide__img"
        :style="{
          'background-image': 'url(' + themeBg + ')'
        }"
      >
        <div class="c-slide__mask"></div>
      </div>
    </div>
    <div class="c-slide__container">
      <div
        class="c-slide__container--left"
        :style="{ height: posterSize.height + 'px' }"
        @click="prev"
        v-show="showLeft"
      >
        <t-icon name="arrow-left-s" :size="32" type="line"></t-icon>
      </div>
      <div class="c-slide__container--views">
        <ul
          class="c-slide__ul"
          :style="{
            transform: 'translate(' + translateX + 'px,0) translateZ(0)',
            width: viewWidth
          }"
        >
          <li
            class="c-slide__item"
            v-for="(poster, index) in items"
            :key="index"
            @click="handleClick('poster', poster)"
            :title="poster.title"
          >
            <t-poster
              :url="poster.background"
              :width="posterSize.width"
              :height="posterSize.height"
            ></t-poster>
            <div
              class="c-slide__info"
              :style="{ width: posterSize.width + 'px' }"
            >
              <span
                class="c-slide__info--title"
                :title="poster.title"
                v-if="poster.title"
                >{{ poster.title }}</span
              >
              <span
                class="c-slide__info--subtitle"
                :title="poster.meta"
                v-if="poster.meta"
                >{{ poster.meta }}</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div
        class="c-slide__container--right"
        :style="{ height: posterSize.height + 'px' }"
        @click="next"
        v-show="showRight"
      >
        <t-icon name="arrow-right-s" :size="32" type="line"></t-icon>
      </div>
    </div>
  </div>
</template>

<script>
const EVER_MARGIN_RIGHT = 15
export default {
  name: 'TSlide',
  props: {
    type: {
      type: String,
      default: 'v',
      // v: 竖版 h: 横版
      validate: val => ['v', 'h'].includes(val)
    },
    // width 730, height 430
    themeBg: {
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
  data () {
    return {
      translateX: 0
    }
  },
  computed: {
    // 屏幕最小尺寸为1220px
    posterSize () {
      const screenWith = 1220
      if (this.type === 'v') {
        const fixSix = 2 / 3
        const posterFullWidth = screenWith - EVER_MARGIN_RIGHT * 5
        return {
          height: posterFullWidth / 6 / fixSix,
          width: posterFullWidth / 6
        }
      }
      const fixSix = 16 / 9
      const posterFullWidth = screenWith - EVER_MARGIN_RIGHT * 3
      return {
        height: posterFullWidth / 4 / fixSix,
        width: posterFullWidth / 4
      }
    },
    showViewNumber () {
      return this.type === 'v' ? 4 : 4
    },
    viewWidth () {
      let itemSize = this.items.length
      return itemSize * (this.posterSize.width + EVER_MARGIN_RIGHT) + 'px'
    },
    showLeft () {
      return this.translateX < 0
    },
    showRight () {
      const fullPosterWidth = this.posterSize.width + EVER_MARGIN_RIGHT
      const itemSize = this.items.length
      let offsetXNum = itemSize - this.showViewNumber
      let defaultEnterNum = offsetXNum * fullPosterWidth
      return (
        this.items.length > this.showViewNumber &&
        Math.abs(this.translateX) < defaultEnterNum
      )
    }
  },
  methods: {
    handleClick (type, value) {
      this.$emit('click', {
        type,
        value
      })
    },
    prev () {
      const transitionABS = Math.abs(this.translateX)
      const fullPosterWidth = this.posterSize.width + EVER_MARGIN_RIGHT
      const enterPosterNum = transitionABS / fullPosterWidth
      if (enterPosterNum > 0) {
        let offsetLeftX = enterPosterNum - this.showViewNumber
        if (offsetLeftX >= 0) {
          this.translateX += this.showViewNumber * fullPosterWidth
        } else {
          this.translateX += transitionABS
        }
      }
    },
    next () {
      if (this.items && this.items.length > 0) {
        const itemSize = this.items.length
        const fullPosterWidth = this.posterSize.width + EVER_MARGIN_RIGHT
        const enterPosterNum = Math.abs(this.translateX) / fullPosterWidth
        let readySize = itemSize - this.showViewNumber - enterPosterNum
        if (readySize <= 0) {
          return
        }
        if (readySize >= this.showViewNumber) {
          this.translateX -= this.showViewNumber * fullPosterWidth
        } else {
          this.translateX -= readySize * fullPosterWidth
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@include c(slide) {
  position: relative;
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
        transition: all $transition-time ease-in;
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
