<template>
  <div class="our-guides bg-grey-700 ">
    <!-- Hero -->
    <hero
      :title="guidesPage && guidesPage.header"
      :text="guidesPage && guidesPage.subHeader"
      :image="guidesPage && guidesPage.headerImage"
      custom-class-wrap="pt-48 pb-63 md:pt-104 md:pb-144"
      class="min-h-184 md:min-h-368"
    />

    <div
      v-if="citiesList"
      class="max-w-1180 w-full mx-auto pt-24 sm: pt-32 pr-0 sm:pr-16 px-16 lg:px-32"
    >
      <p
        class="max-w-264 sm:max-w-full text-mobile-h1 sm:text-desktop-h1 leading-4sm sm:leading-3sm text-terciary mb-24 sm:mb-32 font-bold"
      >
        Meet Our Guides
      </p>
      <!-- Tags -->
      <tags :tags.sync="citiesList" @changeTab="changeTab" />
    </div>

    <!-- Guide Start -->
    <div
      v-if="filteredGuides"
      class="w-95/100 lg:w-5/6 lg:max-w-1180 mx-auto  mt-30"
    >
      <div
        v-for="(row, indexRow) in rows"
        :key="indexRow"
        class="hidden sm:flex items-center flex-wrap justify-between"
      >
        <!-- Guide Cards -->
        <div
          v-for="(guide, index) in row"
          :key="index"
          class="cursor-pointer guide-item w-31/100 lg:w-23/100 mb-30 h-180 lg:h-240"
          @click="showMoreInfo(indexRow, index)"
        >
          <guide-card
            :background-url="
              `url(${mediaUrl +
                't_thumbnail/' +
                (guide.photos[0] && guide.photos[0].desktopUrl.trim()) ||
                require(`@/static/img/no-image.png`)})`
            "
            :first-name="guide.firstName"
          />
        </div>
        <!-- Show More Info -->
        <transition name="slide">

          <guide-more-info
            :is-open-more-info="isOpenMoreInfo"
            :guides-row="guidesRow"
            :index-row="indexRow"
            :guides="filteredGuides"
            :active-index="activeIndex"
            :url="filteredGuides[activeIndex].photos[0].desktopUrl"
            :image-u-r-l="
              `${mediaUrl}t_thumbnail/${filteredGuides[activeIndex] && filteredGuides[activeIndex].desktopUrl && filteredGuides[
                activeIndex
              ].photos[0].desktopUrl.trim()}` ||
                require(`@/static/img/no-image.png`)
            "
          />
        </transition>
      </div>
      <!-- Guide Carousel -->
      <guide-carousel :guides="guides" :active-index="activeIndex" />
    </div>
    <!-- Guide Section End -->

    <div v-if="getSiteInfo" class="bg-white">
      <div class="max-w-1180 w-full mx-auto px-16 md:px-30 py-32 md:py-64">
        <div
          class="flex items-center md:items-start flex-col-reverse md:flex-row"
        >
          <div class="max-w-full md:max-w-600 w-full mr-0 md:mr-88">
            <div class="h-152 md:h-312">
              <img
                :src="
                  `${mediaUrl}t_header/${getSiteInfo.aboutUsBarImage.desktopUrl.trim()}` ||
                    require(`@/static/img/no-image.png`)
                "
                :alt="getSiteInfo.aboutUsBarImage.altText || 'guides'"
                class="h-full w-full object-cover rounded-8"
              />
            </div>
            <div
              v-if="getSiteInfo.aboutUsBarImageSubtitle"
              class="max-w-195 sm:max-w-full w-full ml-auto text-right mt-16 md:mt-24 flex items-center"
            >
              <span
                class="text-mobile-body sm:text-desktop-h4 leading-1sm sm:leading-normal text-grey-40"
              >
                <span
                  class="icon-PIN text-mobile-body sm:text-desktop-h4 mr-7 sm:mr-8 text-secondary"
                />
                {{ getSiteInfo.aboutUsBarImageSubtitle }}&nbsp;<span
                  class="text-blue-200"
                />
              </span>
            </div>
          </div>
          <div class="max-w-full md:max-w-440 w-full mb-40 md:mb-0">
            <h3
              v-if="getSiteInfo.aboutUsBarHeader"
              class="text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm text-terciary font-bold mb-24 md:mb-16"
            >
              {{ getSiteInfo.aboutUsBarHeader }}
            </h3>
            <p
              class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-24"
            >
              {{ getSiteInfo.aboutUsBarText }}
            </p>
            <nuxt-link :to="`/${getHalifaxSlug}`">
              <app-button
                type="default"
                class="text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm px-46 py-1050 md:py-12 rounded-8"
              >
                {{ getSiteInfo.aboutUsBarButtonText }}
              </app-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="getDayTours.length || getMultiDayTours.length"
      class="our-tour-experience flex flex-col pb-40 max-w-1180 pr-0 md:pr-30 pl-0 md:pl-30 mx-auto px-16"
    >
      <p
        class="text-mobile-h1 leading-4sm md:text-desktop-h1 font-bold text-secondary pt-32 md:leading-3sm mb-16 px-16 sm:px-0"
      >
        Live the experience of our tours
      </p>
      <p
        class="text-desktop-h3 leading-5sm text-terciary mb-32 font-bold px-16 sm:px-0"
      >
        The beginning of your adventure!
      </p>
      <p class="text-terciary mb-24 text-desktop-h4 leading-sm px-16 sm:px-0">
        Day Tours
      </p>
      <div class="our-tour-experience__wrap overflow-x-auto overflow-y-hidden">
        <div class="our-tour-experience__scroll inline-block mx-16 lg:mx-0">
          <div
            class="tour-card-inner justify-between lg:justify-start flex flex-wrap"
          >
            <!-- Tour card -->
            <tour-card
              v-for="tourCardItem in getDayTours.slice(0, 4)"
              :key="tourCardItem.id"
              :tour-card-item="tourCardItem"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-20 md:mt-40 mb-32 px-16 md:px-0">
        <nuxt-link to="/tours">
          <app-button
            type="arrow"
            class="flex items-center text-secondary text-mobile-h3 sm:text-desktop-h3"
          >
            <span>See All Day Tours {{ `(${getDayTours.length})` }} </span>
            <span
              class="icon-arrow-bold ml-8 block rotate-180 text-mobile-note"
            />
          </app-button>
        </nuxt-link>
      </div>
      <p class="text-terciary mb-24 text-desktop-h4 leading-sm px-16 sm:px-0">
        Multi Day Tours
      </p>
      <div class="our-tour-experience__wrap overflow-x-auto overflow-y-hidden">
        <div class="our-tour-experience__scroll inline-block mx-16 lg:mx-0">
          <div class="tour-card-inner flex flex-wrap">
            <!-- Tour card -->
            <tour-card
              v-for="tourCardItem in getMultiDayTours.slice(0, 4)"
              :key="tourCardItem.id"
              :tour-card-item="tourCardItem"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-20 md:mt-40 px-16 md:px-0">
        <nuxt-link to="/multi-day-tours">
          <app-button
            type="arrow"
            class="flex items-center text-secondary text-mobile-h3 sm:text-desktop-h3"
          >
            <span
              >See All Multi Day Tours
              {{ `(${getMultiDayTours.length})` }}</span
            >
            <span
              class="icon-arrow-bold ml-8 block rotate-180 text-mobile-note"
            />
          </app-button>
        </nuxt-link>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import Hero from "@/components/pages/Hero";
import GuideCard from "@/components/pages/guide/GuideCard";
import GuideMoreInfo from "@/components/pages/guide/GuideMoreInfo";
import GuideCarousel from "@/components/pages/guide/GuideCarousel";
import AppButton from "@/components/shared/AppButton";
import TourCard from "@/components/shared/TourCard";
import { mapState } from "vuex";
import { guidesPage, guides } from "@/api/queries/guides";
import { products } from "@/api/queries/product";
export default {
  components: {
    Hero,
    GuideCard,
    GuideMoreInfo,
    GuideCarousel,
    AppButton,
    TourCard
  },
  apollo: {
    guidesPage: {
      prefetch: true,
      query: guidesPage
    },
    guides: {
      prefetch: true,
      query: guides
    },
    products: {
      prefetch: true,
      query: products
    }
  },
  data() {
    return {
      citiesList: [],
      activeIndex: 0,
      isOpenMoreInfo: false,
      tabIndex: null,
      guidesRow: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      },
      msg: "Hello World! This is a Event listener test.",
      windowWidth: 0,
      windowHeight: 0
    };
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl }),
    getDayTours() {
      if (this.products) {
        console.log(this.products, "lol firend");
        return this.products.filter(el => el.productType === "DAYTOUR");
      } else {
        return [];
      }
    },
    getMultiDayTours() {
      if (this.products) {
        return this.products.filter(el => el.productType === "MULTIDAY");
      } else {
        return [];
      }
    },
    getHalifaxSlug() {
      return this.cities.find(el => el.name === "Halifax").slug;
    },
    filteredGuides() {
      if (this.tabIndex) {
        return this.guides.filter(
          g => g.location.id === this.citiesList[this.tabIndex].id
        );
      } else {
        return this.guides;
      }
    },
    guidesPerRow() {
      if (this.windowWidth > 993) {
        if (this.windowWidth > 993 && this.windowWidth < 994) {
          this.closeAllShowMoreInfo();
        }
        return 4;
      } else {
        if (this.windowWidth < 993 && this.windowWidth > 992) {
          this.closeAllShowMoreInfo();
        }
        return 3;
      }
    },
    rows() {
      let guides;
      if (this.tabIndex) {
        guides = this.guides.filter(
          g => g.location.id === this.citiesList[this.tabIndex].id
        );
      } else {
        guides = this.guides;
      }
      const allGuides = [];
      let guidesInRow = [];
      let currentNumberOfGuides = 0;
      let totalPushed = 0;
      for (let i = 0; i < guides.length; i++) {
        guidesInRow.push(guides[i]);
        currentNumberOfGuides++;
        totalPushed++;
        if (
          (currentNumberOfGuides === this.guidesPerRow) |
          (totalPushed === guides.length)
        ) {
          allGuides.push(guidesInRow);
          currentNumberOfGuides = 0;
          guidesInRow = [];
        }
      }
      return allGuides;
    }
  },
  created() {
    this.citiesList = this.cities;
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  },
  methods: {
    // Will be finished when we get API
    changeTab({ index }) {
      for (const item of this.citiesList) {
        item.active = false;
      }
      this.citiesList[index].active = true;
      this.tabIndex = index;
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.getWindowWidth);
      window.removeEventListener("resize", this.getWindowHeight);
    },
    closeAllShowMoreInfo() {
      this.guidesRow = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      };
    },
    showMoreInfo(indexRow, index) {
      const guidesIndex = indexRow * this.guidesPerRow + index;
      this.activeIndex = guidesIndex;
      for (const i in this.guidesRow) {
        this.guidesRow[i] = false;
      }
      this.guidesRow[indexRow] = true;
    }
  }
};
</script>

<style lang="scss">
.meet-out-guides-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.guide-information {
  .more-information {
    transition: all 0.3s ease-in-out;
  }
  .open {
    opacity: 1;
  }
  .closed {
    max-height: 0;
    opacity: 0;
  }
}
.guide-item {
  transition: all 0.2s ease-in;
  position: relative;
  &__desc {
    opacity: 0;
  }
  &:hover {
    .guide-item {
      &__desc {
        opacity: 1;
      }
    }
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      border-radius: 8px;
    }
  }
}
.our-guides {
  .icon-arrow-bold {
    transform: rotate(0deg);
  }
}
.our-tour-experience {
  &__wrap::-webkit-scrollbar {
    width: 0 !important;
  }
  &__scroll {
    min-width: calc(100% - 32px);
  }
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 1s;
}
.slide-leave-active {
  transition: opacity 1s;
}
.slide-leave {
  opacity: 1;
}
</style>
