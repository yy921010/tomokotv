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
    <div class="c-slide__container">
      <div
        class="c-slide__container--left"
        :style="{ height: size.height + 'px' }"
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
          }"
        >
          <li
            class="c-slide__item"
            v-for="(poster, index) in temps"
            :key="index"
            @click="handleClick('poster', poster)"
            :title="poster.title"
          >
            <t-poster
              :url="poster.background"
              :width="size.width"
              :height="size.height"
            ></t-poster>
            <div
              class="c-slide__info"
              :style="{ width: size.width + 'px' }"
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
        :style="{ height: size.height + 'px' }"
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
const VIEW_SCREEN = 1220
const ADD_COUNT = {
  v: 6,
  h: 4
}
const FIXED = {
  v: 2 / 3,
  h: 16 / 9
}
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
      translateX: 0,
      initLocation: 0,
      temps: []
    }
  },
  computed: {
    // 屏幕最小尺寸为1220px
    size () {
      return {
        height: this.getAllMargin4Shown / ADD_COUNT[this.type] / FIXED[this.type],
        width: this.getAllMargin4Shown / ADD_COUNT[this.type]
      }
    },
    fullSizeW () {
      return this.size.width + EVER_MARGIN_RIGHT
    },
    itemLen () {
      return (this.items && this.items.length) || 0
    },
    getAllMargin4Shown () {
      const allMarginShown = (ADD_COUNT[this.type] - 1) * EVER_MARGIN_RIGHT
      return VIEW_SCREEN - allMarginShown
    },
    showLeft () {
      return Math.abs(this.translateX) > 0
    },
    showRight () {
      const addCount = ADD_COUNT[this.type]
      let offsetXNum = this.itemLen - addCount
      let defaultEnterNum = offsetXNum * this.fullSizeW
      return (
        this.itemLen > addCount &&
        Math.abs(this.translateX) < defaultEnterNum
      )
    }
  },
  mounted () {
    this.initLocation = ADD_COUNT[this.type]
    this.tempList(0, ADD_COUNT[this.type] + 2)
  },
  methods: {
    tempList (stIndex, etIndex) {
      this.temps = this.items.slice(stIndex, etIndex)
    },
    handleClick (type, value) {
      this.$emit('click', {
        type,
        value
      })
    },
    prev () {
      const addCount = ADD_COUNT[this.type]
      if (Math.abs(this.translateX) > 0) {
        let translateX = 0
        if (this.initLocation - addCount > addCount) {
          translateX = this.translateX + VIEW_SCREEN + EVER_MARGIN_RIGHT
          this.initLocation -= addCount
        } else {
          let diffValue = this.initLocation - addCount
          if (diffValue > 0 && diffValue < addCount) {
            translateX = this.translateX + diffValue * (this.fullSizeW)
            this.initLocation -= diffValue
          }
        }
        this.translateX = translateX
      }
    },
    next () {
      const addCount = ADD_COUNT[this.type]
      if (this.items && this.itemLen > addCount) {
        let translateX = 0
        if (this.initLocation + addCount < this.itemLen) {
          translateX = this.translateX - (VIEW_SCREEN + EVER_MARGIN_RIGHT)
          this.initLocation += addCount
        } else {
          let diffValue = this.itemLen - this.initLocation
          if (diffValue > 0 && diffValue < addCount) {
            translateX = this.translateX - diffValue * (this.fullSizeW)
            this.initLocation += diffValue
          }
        }
        this.tempList(0, this.initLocation + 2)
        this.translateX = translateX
      }
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
