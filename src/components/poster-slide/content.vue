<template>
    <div class="c-content">
      <div
        class="c-content__left"
        :style="{ height: size.height + 'px' }"
        @click="prev"
        v-show="showLeft"
      >
        <t-icon name="arrow-left-s" :size="32" type="line"></t-icon>
      </div>
      <div class="c-content__view">
        <ul
          class="c-content__ul"
          :style="{
            transform: 'translate(' + translateX + 'px,0) translateZ(0)',
            'padding-left': paddingLeft + 'px'
          }"
        >
          <li
            class="c-content__item"
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
            <div class="c-content__info" :style="{ width: size.width + 'px' }">
              <span
                class="c-content__info--title"
                :title="poster.title"
                v-if="poster.title"
              >{{ poster.title }}</span
              >
              <span
                class="c-content__info--subtitle"
                :title="poster.meta"
                v-if="poster.meta"
              >{{ poster.meta }}</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div
        class="c-content__right"
        :style="{ height: size.height + 'px' }"
        @click="next"
        v-show="showRight"
      >
        <t-icon name="arrow-right-s" :size="32" type="line"></t-icon>
      </div>
    </div>
</template>

<script>
const EVER_MARGIN_RIGHT = 15
export default {
  name: 'Content',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'v',
      // v: 竖版 h: 横版
      validate: val => ['v', 'h'].includes(val)
    },
    addCount: {
      type: Number,
      default: 6
    },
    themeBackground: {
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
      if (this.type === 'h') {
        return {
          height: 165,
          width: 294
        }
      }
      return {
        height: 287,
        width: 191
      }
    },
    fullSizeW () {
      return this.size.width + EVER_MARGIN_RIGHT
    },
    itemLen () {
      return (this.items && this.items.length) || 0
    },
    showLeft () {
      return Math.abs(this.translateX) > 0
    },
    showRight () {
      const addCount = this.addCount
      let offsetXNum = this.itemLen - addCount
      let defaultEnterNum = offsetXNum * this.fullSizeW
      return (
        this.itemLen > addCount && Math.abs(this.translateX) < defaultEnterNum
      )
    },
    paddingLeft () {
      let paddingLeft =
        (this.initLocation - this.addCount * 2) * this.fullSizeW
      return paddingLeft <= 0 ? 0 : paddingLeft
    }
  },
  mounted () {
    this.initLocation = this.addCount
    this.tempList(0, this.addCount + 2)
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
      const addCount = this.addCount
      if (Math.abs(this.translateX) > 0) {
        let translateX = 0
        if (this.initLocation - addCount >= addCount) {
          translateX = this.translateX + addCount * this.fullSizeW
          this.initLocation -= addCount
        } else {
          let diffValue = this.initLocation - addCount
          if (diffValue > 0 && diffValue < addCount) {
            translateX = this.translateX + diffValue * this.fullSizeW
            this.initLocation -= diffValue
          }
        }
        let startCutIndex =
          this.initLocation - addCount * 2 <= 0
            ? 0
            : this.initLocation - addCount * 2
        this.tempList(startCutIndex, this.initLocation + addCount)
        this.translateX = translateX
      }
    },
    next () {
      const addCount = this.addCount
      if (this.items && this.itemLen > addCount) {
        let translateX = 0
        if (this.initLocation + addCount <= this.itemLen) {
          translateX = this.translateX - addCount * this.fullSizeW
          this.initLocation += addCount
        } else {
          let diffValue = this.itemLen - this.initLocation
          if (diffValue > 0 && diffValue < addCount) {
            translateX = this.translateX - diffValue * this.fullSizeW
            this.initLocation += diffValue
          }
        }
        let startCutIndex =
          this.initLocation - addCount * 2 <= 0
            ? 0
            : this.initLocation - addCount * 2
        this.tempList(startCutIndex, this.initLocation + 2)
        this.translateX = translateX
      }
    }
  }
}
</script>

<style scoped lang="scss">
@include c(content){
  position: relative;
  width: unit(1220);
  margin: 0 auto;
  z-index: 1;
  @include e(left) {
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
  @include e(right) {
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
  @include e(view) {
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
</style>
