<template>
  <div class="max-w-full w-full lg:w-3/5 h-240 sm:h-392 md:h-450 my-auto">
    <div
      v-swiper:mySwiper="swiperOption"
      class="hero-carousel"
      @slideChange="slideChange">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in carouselItems" :key="index" class="w-full swiper-slide h-280 lg:h-344">
          <video
            v-show="item.type === 'VIDEO'"
            ref="video"
            autoplay
            loop
            muted
            playsinline
            :data-src="item.desktopUrl"
            class="h-240 sm:h-392 md:h-450 w-800 object-cover swiper-lazy" />
          <img
            v-show="item.type === 'IMAGE'"
            :data-src="`${imageUrl}${item.desktopUrl.trim()}` || require(`@/static/img/no-image.png`)"
            class="h-240 sm:h-392 md:h-450 w-800 object-cover swiper-lazy">
        </div>
      </div>
      <div class="swiper-pagination" />
      <div class="swiper-button swiper-button-next icon-BACK" />
      <div class="swiper-button swiper-button-prev icon-BACK" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TourHero',
  props: {
    carouselItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        preloadImages: false,
        lazy: true
      }
    }
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl }),
    imageUrl () {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`
      } else {
        return `${this.mediaUrl}t_desktop/`
      }
    }
  },
  methods: {
    slideChange () {
      if (this.$refs.video) {
        const videoDuration = this.$refs.video[this.mySwiper.activeIndex - 1].duration
        if (videoDuration) {
          this.swiperOption.autoplay.delay = videoDuration * 1000
        }
        const video = this.$refs.video[this.mySwiper.activeIndex - 1]
        if (video) {
          video.currentTime = 0
        }
        if (this.mySwiper.activeIndex >= this.carouselItems.length) {
          this.mySwiper.activeIndex = 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-button {
    background: none;
    background-image: none;
    width: auto;
    height: auto;
    color: #fff;
    font-size: 16px;
    margin: 0;
  }
  .swiper-button-prev {
    transform: rotate(0deg) translateY(-50%);
  }
  .swiper-button-next {
    transform: rotate(180deg) translateY(50%);
  }
</style>

<style lang="scss">
.hero-carousel {
  .swiper-item {
    pointer-events: none;
  }
  .swiper-button-next {
    right: 0;
    padding: 20px 20px 17px;
  }
  .swiper-button-prev {
    left: 0;
    padding: 20px 20px 17px;
  }
  .swiper-pagination-bullet {
    position: relative;
    height: 2px;
    width: 26px;
    opacity: 1;
    background-color: #FFFFFF;
    border-radius: 0;
    overflow: hidden;
    text-decoration: none;
    // border-left: 1px solid #ffffff;
  }
  .swiper-pagination-bullet:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    opacity: 0.5;
    background-color: #FFFFFF;
  }
  .swiper-pagination-bullet-active:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
    animation: expandWidth 3s linear;
    transition: transform 1s ease-in-out;
    transform: translateX(0%);
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active, .swiper-pagination-bullet.swiper-pagination-bullet-active ~ * {
    background-color: transparent;
  }
  &.swiper-container-horizontal > .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    bottom: 24px;
    .swiper-pagination-bullet {
      margin-left: 0;
      margin-right: 3px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (min-width: 993px) {
    .swiper-pagination-bullet {
      width: 52px;
    }
    &.swiper-container-horizontal > .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        margin-right: 6px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
@keyframes expandWidth {
   0% { transform: translateX(-100%); }
   100% { transform: translateX(0%) }
}
</style>