<template>
  <div class="tmk-guide-channel">
    <ul class="tmk-guide-channel__lists">
      <li
        class="list-item"
        v-for="(channel,index) in channels"
        :key="index"
        :title="channel.channelName"
        @click="handleClick(channel)"
      >
        <img :src="channel.logo" :alt="channel.channelName" class="channel-logo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChannelPanel',
  props: {
    channels: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    handleClick (channel) {
      this.$emit('onChannel', channel)
    }
  }
}
</script>

<style lang="scss">
@include b(guide-channel) {
  background-color: $C15;
  width: unit(203);
  box-shadow: 4px 0 4px $C10;
  @include e(lists) {
    .list-item {
      cursor: pointer;
      width: 100%;
      height: unit(70);
      display: flex;
      align-items: center;
      justify-content: center;
      .channel-logo {
        height: unit(42);
      }
    }
  }
}
</style>
