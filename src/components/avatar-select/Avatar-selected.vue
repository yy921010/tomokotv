<template>
  <div class="c-av-selected">
    <div class="c-av-selected__avatar">
      <t-avatar
        :size="130"
        mask-icon="edit"
        :avatarUrl="mainAvatar"
        @click="showList"
      />
    </div>
    <div class="c-av-selected__list" v-if="isShowAvatars">
      <div class="c-av-selected__list--prev" @click="prev">
        <t-icon :size="24" name="arrow-left-s" />
      </div>
      <div class="c-av-selected__view" :style="{width:viewWidth}">
        <ul
          class="c-av-selected__main"
          :style="{
            transform: 'translate3d(' + translateX + 'px,0,0)'
          }"
        >
          <li
            class="c-av-selected__item"
            v-for="(avatar, index) in avatars"
            :key="index"
          >
            <t-avatar
              :size="75"
              :avatarUrl="avatar"
              @click="handleClick(avatar, index)"
              :is-selected="currentIndex === index"
            />
          </li>
        </ul>
      </div>
      <div class="c-av-selected__list--next" @click="next">
        <t-icon :size="24" name="arrow-right-s" />
      </div>
    </div>
  </div>
</template>

<script>
const stepTranslateX = 75 + 40
export default {
  name: 'avatar-selected',
  props: {
    avatars: {
      type: Array,
      default: () => ([])
    },
    showSize: {
      type: Number,
      default: 5
    },
    mainAvatar: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    currentIndex: -1,
    isShowAvatars: false,
    translateX: 0
  }),
  computed: {
    viewWidth () {
      return (this.showSize * stepTranslateX - 40) + 'px'
    }
  },
  methods: {
    showList () {
      this.isShowAvatars = !this.isShowAvatars
    },
    handleClick (avatar, index) {
      this.currentIndex = index
      this.$emit('click', avatar)
    },
    prev () {
      if (this.translateX < 0) {
        this.translateX += stepTranslateX
      }
    },
    next () {
      const avatarWrapSize = this.avatars.length * stepTranslateX
      const showSize = this.showSize * stepTranslateX
      const moveLength = avatarWrapSize - showSize
      if (moveLength > 0 && Math.abs(moveLength) > Math.abs(this.translateX)) {
        this.translateX -= stepTranslateX
      }
    }
  }
}
</script>

<style lang="scss">
@include c(av-selected) {
  @include e(avatar) {
    display: flex;
    justify-content: center;
  }
  @include e(list) {
    position: relative;
    display: flex;
    margin-top: unit(80);
    align-items: center;
    justify-content: space-between;
    @include m(prev) {
      cursor: pointer;
      color: $C35;
      &:hover {
        color: $C31;
      }
    }
    @include e(view) {
      overflow: hidden;
      @include e(main) {
        display: flex;
        transition: transform $transition-time;
        @include e(item) {
          margin-right: unit(40);
        }
      }
    }
    @include m(next) {
      cursor: pointer;
      color: $C35;
      &:hover {
        color: $C31;
      }
    }
  }
}
</style>
