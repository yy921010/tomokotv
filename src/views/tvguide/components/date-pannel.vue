<template>
  <div class="tmk-time-date">
    <div class="tmk-time-date__views">
      <div class="arrows">
        <t-icon name="arrow-left-s" :size="24"></t-icon>
      </div>
      <ul class="container">
        <li class="item" v-for="(td,index) in timeDates" :key="index">
          <div class="week-text">{{$t(td.week)}}</div>
          <div class="date-text">{{td.timeDate}}</div>
        </li>
      </ul>
      <div class="arrows">
        <t-icon name="arrow-right-s" :size="24"></t-icon>
      </div>
    </div>
  </div>
</template>

<script>
const WEEK_SIZE = 2
const WEEK_STR = [
  'tvguide.sun',
  'tvguide.mon',
  'tvguide.twe',
  'tvguide.wed',
  'tvguide.thu',
  'tvguide.fri',
  'tvguide.sat'
]
export default {
  name: 'TwoWeek',
  data () {
    return {
      timeDates: []
    }
  },
  mounted () {
    this.makeTwoWeekRule()
  },
  methods: {
    makeTwoWeekRule () {
      const twoWeeks = this.$_.times(WEEK_SIZE * 7)
      this.timeDates = this.$_.map(twoWeeks, item => {
        let dayTime = this.$dayjs().add(item, 'day')
        return {
          week: WEEK_STR[dayTime.day()],
          timeDate: dayTime.format('MM-DD')
        }
      })
      this.timeDate = this.$_.sortBy(this.timeDates, item => item.timeDate)
    }
  }
}
</script>

<style lang="scss">
@include b(time-date) {
  background-color: $C14;
  @include e(views) {
    height: unit(66);
    display: flex;
    .arrows {
      width: unit(30);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:nth-child(1){
          border-right: unit(1) solid $C21;
      }
      &:last-child{
          border-left: unit(1) solid $C21;
      }
    }
    .container {
      display: flex;
      height: 100%;
      .item {
        cursor: pointer;
        width: unit(93);
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        .week-text {
          @include text(28, $C35);
        }
        .date-text {
          @include text(34, $C34);
          margin-top: unit(5);
        }
        @include when(is-checked) {
        }
        &:hover {
          background-color: $C04;
          > .week-text {
            @include text(28, $C31);
          }
          > .date-text {
            @include text(34, $C31);
          }
        }
      }
    }
  }
}
</style>
