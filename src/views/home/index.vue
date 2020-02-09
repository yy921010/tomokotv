<template>
  <div class="tmk-home">
    <t-slide
      @click="slideClick"
      type="v"
      :title="slidePoster.title"
      :items="slidePoster.items"
    ></t-slide>
    <t-slide
      @click="slideClick"
      type="h"
      :title="slidePoster2.title"
      :items="slidePoster2.items"
    ></t-slide>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      slidePoster: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '1234567799',
        items: [
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'https://ngiss.t-online.de/iss?client=ngtv&ar=keep&x=191&y=287&src=http://programm-manager.telekom.de/media/gracenote/p16943905_v_v12_ab.jpg'
          }
        ]
      },
      slidePoster2: {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '1234567799',
        items: [
          {
            title: '1Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '2Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '3Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '4Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '5Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '6Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '7Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '8Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '9Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          },
          {
            title: '10Lorem ipsum dolor sit amet, consectetur adipisicing',
            meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            background:
              'http://img5.mtime.cn/mg/2020/02/09/111614.54734085_285X160X4.jpg'
          }
        ]
      }
    }
  },
  methods: {
    slideClick () {}
  }
}
</script>

<style lang="scss" scoped>
@include b(home) {
  width: unit(1220);
}
</style>
