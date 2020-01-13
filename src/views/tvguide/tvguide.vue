<template>
    <div class="tmk-guide">
        <section class="tmk-guide__week-time">
          <date-panel/>
          <t-select :options="catalogs" class="tmk-guide__select"/>
          <time-line/>
        </section>
        <section class="tmk-guide__programs">
            <vue-scroll>
              <channel-panel :channels="channels"/>
              <guide-program/>
            </vue-scroll>
        </section>
    </div>
</template>

<script>
import DatePanel from './components/date-panel'
import ChannelPanel from './components/channel-panel'
import GuideProgram from './components/program-item'
import TimeLine from './components/time-line'
import ChannelService from '@api/channel'
export default {
  name: 'tvguide',
  components: {
    DatePanel,
    ChannelPanel,
    TimeLine,
    GuideProgram
  },
  data () {
    return {
      catalogs: [
        {
          text: '所有频道',
          value: 1
        },
        {
          text: '央视频道',
          value: 1
        },
        {
          text: '地方卫视',
          value: 1
        },
        {
          text: '海外频道',
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
@include b(guide){
  @include e(week-time){
      overflow: hidden;
    @include e(select){
      width: unit(203-50);
      position: absolute;
      z-index: 1;
    }
  }
  @include e(programs){
      height: unit(12*70);
  }

}
</style>
