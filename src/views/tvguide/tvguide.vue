<template>
    <div class="tmk-tvguide">
        <section class="tmk-tvguide--time">
            <date-pannel></date-pannel>
        </section>
        <t-select :options="catalogs" class="tmk-tvguide__select"></t-select>
        <channel-pannel :channels="channels"></channel-pannel>
        <time-line></time-line>
    </div>
</template>

<script>
import DatePannel from './components/date-pannel'
import ChannelPannel from './components/channel-pannel'
import TimeLine from './components/time-line'
import ChannelService from '@api/channel'
export default {
  name: 'tvguide',
  components: {
    DatePannel,
    ChannelPannel,
    TimeLine
  },
  data () {
    return {
      catalogs: [
        {
          text: 'all',
          value: 1
        },
        {
          text: 'ott',
          value: 1
        },
        {
          text: 'sport',
          value: 1
        },
        {
          text: 'music',
          value: 1
        }
      ],
      channels: []
    }
  },
  mounted () {
    this.getChannel()
  },
  methods: {
    async getChannel () {
      this.channels = await ChannelService.getAllChannel()
    }
  }
}
</script>

<style lang="scss">
@include b(tvguide){
  @include e(select){
      width: unit(203-50);
  }
}
</style>
