<template>
  <div class="tmk-poster-wall">
    <div class="tmk-poster-wall__list">
      <t-poster
        v-for="(item, index) in posters"
        :url="item.background"
        :height="posterStyle.height"
        :width="posterStyle.width"
        @click="showDetail(item)"
        :key="index"
      ></t-poster>
    </div>
  </div>
</template>

<script>
/**
 * 通过鼠标滚动进行 分页加载
 */
export default {
  name: 'posterWall',
  data () {
    return {
      posters: []
    }
  },
  computed: {
    posterStyle () {
      return {
        height: '',
        width: ''
      }
    }
  },
  methods: {
    showDetail () {}
  }
}
</script>

<style scoped lang="scss">
@include b(poster-wall) {
}
</style>
