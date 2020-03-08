<template>
  <div class="tmk-vod-detail">
    <div class="tmk-vod-detail__content">
      <div class="tmk-vod-detail_poster">
        <t-poster
          url="http://img5.mtime.cn/mt/2020/01/08/104948.27498713_185X277X4_185X277X4.jpg"
          :width="314"
          :height="471"
        ></t-poster>
      </div>
      <div class="tmk-vod-detail__info">
        <div class="tmk-vod-detail__title">{{ vodDetail.title }}</div>
        <div class="tmk-vod-detail__meta">
          <ratingStart :value="vodDetail.rating" />
          <div class="age-level">{{ vodDetail.ageRating }}</div>
          <div class="genres">{{ vodDetail.genres }}</div>
          <div class="country">{{ vodDetail.country }}</div>
          <div class="quality">
            <t-icon name="hd" type="fill" :size="18"></t-icon>
          </div>
        </div>
        <div class="tmk-vod-detail__description">
          {{ vodDetail.description }}
          <t-icon
            @click="showMoreText"
            :name="iconName"
            :size="18"
            class="down-icon"
          ></t-icon>
        </div>
        <div class="tmk-vod-detail__button">
          <t-button icon="play" type="primary">{{$t('vod.play')}}</t-button>
          <t-button icon="heart">{{$t('vod.addFavorite')}}</t-button>
        </div>
      </div>
    </div>

    <div class="tmk-vod-detail__explode">
      <div class="title">分级</div>
    </div>
    <div class="tmk-vod-detail__cast">
      <div class="title">演员</div>
    </div>
  </div>
</template>

<script>
/**
 * 影片详情包含：
 * title
 * subtitle
 * meta
 * description
 * pictures
 */
import ratingStart from './rating-start'
import { getFilmDetail } from '@api/vod'
export default {
  name: 'detail',
  components: {
    ratingStart
  },
  data () {
    return {
      vodDetail: {
        title: '',
        rating: '',
        ageRating: ''
      },
      isExpanded: false
    }
  },
  async mounted () {
    this.vodDetail = await getFilmDetail()
  },
  computed: {
    iconName () {
      return !this.isExpanded ? 'arrow-down-s' : 'arrow-up-s'
    }
  },
  methods: {
    showMoreText () {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style scoped lang="scss">
@include b(vod-detail) {
  position: relative;
  @include e(content) {
    width: unit(1220);
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    @include e(info) {
      width: unit(580);
      @include e(title) {
        @include text(22);
        margin-top: unit(45);
        margin-bottom: unit(15);
      }
      @include e(meta) {
        display: flex;
        align-items: center;
        margin-bottom: unit(20);
        .age-level {
          margin-right: unit(20);
        }
        .genres {
          margin-right: unit(20);
        }
        .country {
          margin-right: unit(60);
        }
        .quality {
          color: $C35;
        }
      }
      @include e(description) {
        @include text(29, $C35);
        .down-icon {
          color: $C41;
          margin-top: unit(4);
          cursor: pointer;
          float: right;
        }
      }
      @include e(button){
        margin-top: unit(45);
      }
    }
    @include e(poster) {
    }
  }
  @include e(explode) {
    margin-top: unit(45);
    .title {
      @include text(13);
    }
  }
  @include e(cast) {
    margin-top: unit(45);
    .title {
      @include text(13);
    }
  }
}
</style>
