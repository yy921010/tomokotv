<template>
  <div class="c-carousel">
    <div class="c-carousel__poster">
      <div class="c-carousel__left" @click="switchCarousel(-1)">
        <t-icon name="arrow-left-s" :size="32"></t-icon>
      </div>
        <div
          class="c-carouse__posters"
          v-for="(item, index) in items"
          :key="index"
        >
          <transition name="fade">
            <t-poster
              v-if="index === initIndex"
              :width="844"
              :height="473"
              :url="item.background"
            ></t-poster>
          </transition>
        </div>
      <div class="c-carousel__mask"></div>
      <div class="c-carousel__right" @click="switchCarousel(1)">
        <t-icon name="arrow-right-s" :size="32"></t-icon>
      </div>
      <div class="c-carousel__dot">
        <div class="dot"
             v-for="(item, index) in items"
             :key="index"
             :class="{'is-active': index === initIndex }"
             @click="setIndex(index)"
        ></div>
      </div>
    </div>
    <div class="c-carousel__info">
      <div class="c-carousel__container">
        <div class="title" :title="carousel.title">{{ carousel.title }}</div>
        <div class="subtitle">{{ carousel.meta }}</div>
        <div class="description">
          {{ carousel.description }}
        </div>
        <div class="button">
          <t-button
            icon="play"
            size="small"
            type="primary"
            @click="handleClick(carousel)"
            >{{ "播放" }}</t-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const DIRECTION = {
  LEFT: -1,
  RIGHT: 1
}
const DELAY_TIME = 3000
export default {
  name: 'TCarousel',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      initIndex: 0,
      setTimeId: null
    }
  },
  computed: {
    carousel () {
      return this.items[this.initIndex] || {}
    },
    maxIndex () {
      return (this.items && this.items.length - 1) || 0
    }
  },
  mounted () {
    clearInterval(this.setTimeId)
    this.setTimeId = setInterval(() => {
      this.switchCarousel(DIRECTION.RIGHT)
    }, DELAY_TIME)
  },
  destroyed () {
    clearInterval(this.setTimeId)
  },
  methods: {
    handleClick (carousel) {
      this.$emit('click', carousel)
    },
    switchCarousel (direction) {
      if (direction === DIRECTION.LEFT) {
        if (this.initIndex <= 0) {
          this.initIndex = this.maxIndex
        } else {
          this.initIndex -= 1
        }
      }
      if (direction === DIRECTION.RIGHT) {
        if (this.initIndex >= this.maxIndex) {
          this.initIndex = 0
        } else {
          this.initIndex += 1
        }
      }
    },
    setIndex (index) {
      this.initIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
@include c(carousel) {
  height: unit(473);
  width: unit(1220);
  display: flex;
  @include e(poster) {
    width: unit(844);
    position: relative;
    overflow: hidden;
    @include e(left) {
      position: absolute;
      z-index: 2;
      height: 100%;
      left: 0;
      display: flex;
      align-items: center;
      color: $C03;
      cursor: pointer;
      &:hover{
        color: $C01;
      }
    }
    @include e(right) {
      position: absolute;
      z-index: 2;
      height: 100%;
      right: 0;
      top:0;
      display: flex;
      align-items: center;
      color: $C03;
      cursor: pointer;
      &:hover{
        color: $C01;
      }
    }
    @include e(dot){
      position: absolute;
      z-index: 2;
      bottom: unit(20);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      cursor: pointer;
      .dot{
        background-color: $C01;
        width: unit(10);
        height: unit(10);
        border-radius: 50%;
        margin-right: unit(10);
        border: unit(1) solid transparent;
        @include when(active){
          background-color: $C03;
        }
      }
    }
    @include e(mask) {
      position: absolute;
      height: unit(327);
      width: unit(844);
      bottom: 0;
      left: 0;
      z-index: 1;
      background-image: map_get($mask, 2);
    }
  }
  @include e(info) {
    width: unit(1220-844);
    background-color: $C18;
    @include e(container) {
      margin-left: unit(40);
      width: unit(296);
      .title {
        @include text(20);
        margin-top: unit(75);
        @include text-overflow;
      }
      .subtitle {
        @include text(32);
        margin-top: unit(35);
        text-wrap: normal;
        word-break: break-all;
      }
      .description {
        @include text(29, $C35);
        margin-top: unit(35);
      }
      .button {
        margin-top: unit(30);
      }
    }
  }
}
</style>
