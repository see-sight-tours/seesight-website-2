<template>
  <div
    v-swiper:mySwiper="swiperOption"
    class="custom-carousel"
    @slideChange="$emit('update:activeIndex', mySwiper.activeIndex)">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in slideItems"
        :key="index"
        :data-index="index"
        class="custom-carousel__img-wrap swiper-slide">
        <!-- <img
          v-if="item.photo "
          :src="`${mediaUrl}t_mobile/${item.photo.desktopUrl.trim()}` || require(`@/static/img/no-image.png`)"
          class="object-cover h-full w-full rounded-8"> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CoverFlowCarousel',
  props: {
    slideItems: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      swiperOption: {
        width: 320,
        loop: false,
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: true,
        initialSlide: 0,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    ...mapState({
      mediaUrl: state => state.mediaUrl
    })
  }
}
</script>

<style lang="scss">
.custom-carousel {
  .swiper-wrapper {
    min-height: 208px;
    align-items: center;
    right: 95px;
  }
  &__img-wrap {
    &.swiper-slide {
      height: 176px;
      width: 96px !important;
      &.swiper-slide-prev {
        opacity: 0.3;
        left: 95px;
      }
      &.swiper-slide-active {
        height: 208px;
        width: 136px !important;
        z-index: 9999;
      }
    }
  }
}
</style>