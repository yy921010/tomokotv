<template>
  <div class="tmk-time-line">
    <div class="tmk-time-line__gloden-time"></div>
    <div class="tmk-time-line__container">
      <div class="tmk-time-line__time" v-for="(time,index) in timeStr" :key="index">
        <div class="upbar"></div>
        <div class="time-text">{{time}}</div>
        <div class="downbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
const TIMES = 24
export default {
  name: 'guideTimeLine',
  data: () => ({
    timeStr: []
  }),
  mounted () {
    this.createTime()
  },
  methods: {
    createTime () {
      const hours = this.$_.times(TIMES).map(item => {
        return item > 9 ? item + '' : '0' + item
      })
      const hoursWhole = hours.map(item => this.createMinOrHalfMin(item))
      const hoursHalf = hours.map(item => this.createMinOrHalfMin(item, true))
      const timeStr = [...hoursWhole, ...hoursHalf]
      this.timeStr = this.$_.sortBy(timeStr, item => item)
    },
    createMinOrHalfMin (hour, isHalf) {
      return isHalf ? `${hour}:30` : `${hour}:00`
    }
  }
}
</script>

<style lang="scss">
@include b(time-line) {
  height: unit(40);
  background-color: $C16;
  @include e(gloden-time) {
  }
  @include e(container) {
    display: flex;
    height: 100%;
    @include e(time) {
      margin-left: unit(190);
      .upbar {
        height: 13%;
        position: relative;
        border-left: solid unit(1) $C35;
      }
      .time-text {
        @include text(32, $C35);
        position: relative;
        left: unit(-17);
        top:unit(4);
      }
      .downbar {
        height: 13%;
        position: relative;
        top: unit(10);
        border-left: solid unit(1) $C35;
      }
    }
  }
}
</style>
