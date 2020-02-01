<template>
  <div class="u-avatars">
    <div class="u-avatars__prev" @click="prev">
      <t-icon :size="24" name="arrow-left-s" />
    </div>
    <div class="u-avatars__views">
      <ul
        class="u-avatars__main"
        :style="{
          transform: 'translate3d(' + translateX + 'px,0,0)'
        }"
      >
        <li
          class="u-avatars__item"
          v-for="(avatar, index) in avatars"
          :key="index"
        >
          <t-avatar
            :size="75"
            :src="avatar"
            @click="handleClick(avatar,index)"
            :is-selected="currentIndex === index"
          ></t-avatar>
        </li>
      </ul>
    </div>
    <div class="u-avatars__next" @click="next">
      <t-icon :size="24" name="arrow-right-s" />
    </div>
  </div>
</template>

<script>
const stepTranslateX = 75 + 40
export default {
  name: 'avatar-list',
  props: {
    avatars: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      translateX: 0,
      currentIndex: -1
    }
  },

  methods: {
    handleClick (url, index) {
      this.currentIndex = index
      this.$emit('onAvatars', url)
    },
    prev () {
      if (this.translateX < 0) {
        this.translateX += stepTranslateX
      }
    },
    next () {
      const avatarWrapSize = this.avatars.length * stepTranslateX
      const moveLength = avatarWrapSize - 766 - 40
      console.log(moveLength)
      if (moveLength > 0 && Math.abs(moveLength) >= Math.abs(this.translateX)) {
        this.translateX -= stepTranslateX
      }
    }
  }
}
</script>

<style lang="scss">
@include u(avatars) {
  position: relative;
  @include e(views) {
    width: unit(766);
    overflow: hidden;
    @include e(main) {
      display: flex;
      transition: transform $transition-time;
      @include e(item) {
        margin-right: unit(40);
      }
    }
  }
  @include e(prev) {
    cursor: pointer;
    color: $C35;
    position: absolute;
    z-index: 2;
    top: unit(30);
    left: unit(-40);
    &:hover {
      color: $C31;
    }
  }
  @include e(next) {
    cursor: pointer;
    color: $C35;
    position: absolute;
    right: unit(-40);
    top: unit(30);
    z-index: 2;
    &:hover {
      color: $C31;
    }
  }
}
</style>
