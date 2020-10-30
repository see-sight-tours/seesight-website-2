<template>
  <div v-if="guides">
    <div
      class="max-w-1180 w-full pb-28 sm:pb-66 pt-24 sm:pt-64 px-16 sm:px-30 mx-auto"
    >
      <div class="flex items-center justify-between w-full mb-24 sm:mb-56">
        <h2
          class="max-w-264 w-full sm:max-w-full text-terciary text-mobile-h1 sm:text-desktop-h1 font-bold leading-4sm sm:leading-3sm mb-0"
        >
          Meet our Guides
        </h2>
        <div class="hidden sm:block text-right">
          <nuxt-link to="/guides">
            <app-button type="arrow" class="flex items-center text-secondary">
              <span>See all Guides {{ `(${guides.length})` }}</span>
              <span
                class="icon-arrow-bold block rotate-180 text-mobile-note leading-default rotote-0 ml-8"
              />
            </app-button>
          </nuxt-link>
        </div>
      </div>
      <div
        v-if="guides.length"
        class="flex justify-start items-start flex-col sm:flex-row pb-0 sm:pb-40"
      >
        <cover-flow-carousel
          type="guides"
          :slide-items="guides.map(el => ({photo: el.photos[0]}))"
          class="block sm:hidden"
          :active-index.sync="activeIndex"
        />
        <div
          class="meet-guides-carousel__wrap relative min-w-184 hidden sm:block"
        >
          <div
            v-swiper:mySwiper="swiperOption"
            class="meet-guides-carousel"
            @slideChange="activeIndex = mySwiper.activeIndex"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in guides.slice(0, 4)"
                :key="index"
                :data-index="index"
                class="swiper-slide min-w184 max-w-184 w-full mb-40"
                :class="{ '-mt-120': activeIndex === 0 && index === 0 }"
              >
                <img
                  :src="
                    `${mediaUrl}t_thumbnail/${item.photos[0] && item.photos[0].desktopUrl.trim()}` ||
                    require(`@/static/img/no-image.png`)
                  "
                  class="object-cover h-full w-full rounded-8"
                  :alt="item.photos[0] && item.photos[0].altText || 'guides photo'"
                />
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets" />
        </div>
        <div class="flex items-start flex-col lg:flex-row ml-0 sm:ml-48">
          <div
            class="min-w-232 max-w-232 w-full h-336 mb-40 lg:mr-40 lg:mb-0 hidden sm:block"
          >
            <img
              :src="
                `${mediaUrl}t_thumbnail/${guides[activeIndex] && guides[activeIndex].photos[0] && guides[
                  activeIndex
                ].photos[0].desktopUrl.trim()}` ||
                require(`@/static/img/no-image.png`)
              "
              :alt="guides[activeIndex] && guides[activeIndex].photo && guides[activeIndex].photo.altText || 'guide photo'"
              class="h-full w-full object-cover rounded-8"
            />
          </div>
          <div class="flex flex-col mt-24 sm:mt-0 pl-16 sm:pl-0">
            <h3
              class="text-terciary mobile-h2 sm:text-desktop-h2 leading-2sm font-bold mb-5 sm:mb-16"
            >
              {{ guides[activeIndex].firstName }}
            </h3>
            <div
              v-if="guides[activeIndex].languages.length"
              class="flex items-center mb-10 font-bold"
            >
              <p class="text-grey-40 sm:text-desktop-h4">
                <span class="text-secondary">Languages:&nbsp;</span>
                <span
                  v-for="language in guides[activeIndex].languages"
                  :key="language.id"
                  >{{ language.name }}</span
                >
              </p>
            </div>
            <div class="text-terciary text-mobile-body max-w-616">
              {{ guides[activeIndex].biography }}
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden text-right mt-32">
        <nuxt-link to="/guides">
          <app-button
            type="arrow"
            class="flex items-center text-secondary ml-auto"
          >
            <span>Meet all guides {{ `(${guides.length})` }}</span>
            <span
              class="icon-arrow-bold block rotate-180 text-mobile-note leading-default rotote-0 ml-8"
            />
          </app-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { guides } from "@/api/queries/guides";
import CoverFlowCarousel from "@/components/pages/CoverFlowCarousel";
import AppButton from "@/components/shared/AppButton";
export default {
  name: "MeetGuidesCarousel",
  components: {
    CoverFlowCarousel,
    AppButton,
  },
  apollo: {
    guides: {
      prefetch: true,
      query: guides,
    },
  },
  data() {
    return {
      guides: null,
      activeIndex: 0,
      swiperOption: {
        height: 340,
        direction: "vertical",
        loop: false,
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
        calculateHeight: true,
        initialSlide: 0,
        slideToClickedSlide: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    ...mapState({ mediaUrl: (state) => state.mediaUrl }),
  },
};
</script>

<style lang="scss">
.meet-guides-carousel {
  max-height: 340px;
  height: 100%;
  .swiper-slide {
    &.swiper-slide-active {
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        opacity: 0.46;
        border-radius: 8px;
        background-color: #000000;
      }
    }
  }
  &__wrap {
    .swiper-pagination {
      height: auto !important;
      top: auto;
      bottom: -43px;
      left: 0;
      right: auto;
      transform: translate3d(0, 0, 0) rotate(0);
      .swiper-pagination-bullet {
        margin-right: 13px;
        background: #131313;
        opacity: 0.2;
        &:last-child {
          margin-right: 0;
        }
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }
  }
}
</style>