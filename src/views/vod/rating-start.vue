<template>
  <div class="u-rating-star">
    <div class="u-rating-star__views">
      <t-icon
        class="star"
        v-for="(star, index) in stars"
        :key="index"
        :type="star === 'empty'? 'line': 'fill'"
        :name="star === 'full' ? 'star' : star === 'half' ? 'star-half' : 'star'"
        :size="18"
      ></t-icon>
    </div>
    <div class="u-rating-star__number">{{ value }}</div>
  </div>
</template>

<script>
import times from 'lodash/times'
export default {
  name: 'rating-start',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      stars: []
    }
  },
  mounted () {
    let doubleNumber = parseInt(this.value + '')
    let ceilNumber = Math.ceil(this.value)
    this.stars = times(5, i => {
      let curNumber = i + 1
      if (doubleNumber >= curNumber) {
        return 'full'
      }
      if (doubleNumber < ceilNumber && curNumber === ceilNumber) {
        return 'half'
      }
      return 'empty'
    })
  }
}
</script>

<style scoped lang="scss">
@include u(rating-star) {
  display: flex;
  align-items: center;
  margin-right: unit(60);
  @include e(views){
    line-height: unit(18);
    .star{
      margin-right: unit(5);
      color:$C29;
    }
    margin-right: unit(15);
  }
  @include e(number) {
    @include text(27);
  }
}
</style>
