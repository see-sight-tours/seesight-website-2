<template>
  <div class="bg-grey-700">
    <div class="max-w-1180 w-full mx-auto pl-16 pr-0 sm:px-30 py-40 sm:py-48 flex items-center justify-start flex-col md:flex-row">
      <div class="max-w-full md:max-w-280 w-full flex flex-col mr-0 md:mr-40 mb-36 md:mb-0 pr-16 sm:pr-0">
        <h2 class="text-terciary text-mobile-h1 sm:text-desktop-h1 font-bold leading-4sm sm:leading-3sm mb-16 sm:mb-24">
          {{ getSiteInfo && getSiteInfo.discoverCitiesBarHeader }}
        </h2>
        <p class="text-grey-400 text-mobile-h3 sm:text-desktop-h3 leading-3sm leading-5sm mb-32 sm:mb-16">
          {{ getSiteInfo && getSiteInfo.discoverCitiesBarDescription }}
        </p>
        <div class="font-bold text-secondary cursor-pointer">
          <nuxt-link v-if="cities && cities.length > 4" to="/cities">
            <app-button type="arrow" class="flex items-center text-secondary">
              <span>See all Cities ({{ cities && cities.length }})</span>
              <span class="icon-arrow-bold block rotate-180 text-mobile-note leading-default rotote-0 ml-8" />
            </app-button>
          </nuxt-link>
        </div>
      </div>
      <div
        v-if="cities"
        class="discover-cities__card-wrap w-full flex flex-wrap lg:flex-no-wrap justify-end">
        <div
          v-for="(city, index) in cities.slice(0,4)"
          :key="index"
          class="flex flex-col items-start md:items-center mb-30 lg:mb-0 hidden sm:block">
          <nuxt-link :to="`/${ city.slug }`">
            <div class="h-140 lg:h-280 mb-16">
              <img
                :src="`${mediaUrl}t_thumbnail/${city.featureImage[0].desktopUrl.trim()}` || require(`@/static/img/no-image.png`)"
                alt="cities-img"
                class="object-cover h-full w-full rounded-8">
            </div>
            <h3 class="text-terciary text-desktop-h3 leading-5sm font-bold mb-8">{{ city.name }}</h3>
            <p class="text-terciary text-desktop-h6 leading-6sm">{{ city.snippet }}</p>
          </nuxt-link>
        </div>
        <cover-flow-carousel
          :slide-items="cities.map(el => ({photo: el.featureImage})).slice(0,4)"
          class="block sm:hidden"
          :active-index.sync="activeIndex" />
        <div class="block sm:hidden w-full mt-24 pr-16 sm:pr-0 pl-16 sm:pl-0">
          <h3 class="text-terciary mobile-h2 leading-5sm font-bold mb-16">{{ cities ? cities[activeIndex].name : '' }}</h3>
          <p class="text-terciary text-mobile-body leading-6sm">{{ cities ? cities[activeIndex].snippet : '' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { mapState } from 'vuex'
import { cities } from '@/api/queries/cities'
// import CoverFlowCarousel from '@/components/pages/CoverFlowCarousel'
import AppButton from '@/components/shared/AppButton'
export default {
  name: 'DiscoverCities',
  components: { AppButton },
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl })
  },
  methods: {
    slideChange () {
      this.activeIndex = this.mySwiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
  .discover-cities {
    &__card-wrap {
      display: grid;
      grid-template-columns: repeat(4, 152px);
      grid-column-gap: 24px;
      @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
      }
      @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>