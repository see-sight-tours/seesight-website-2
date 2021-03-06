<template>
  <div>
    <!-- Hero -->
    <hero
      :title="getSiteInfo && getSiteInfo.discoverCitiesBarHeader"
      :text="getSiteInfo && getSiteInfo.discoverCitiesBarDescription"
      :image="getSiteInfo && getSiteInfo.discoverCitiesPageHeaderImage"
      location=""
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-48"
      custom-class-location="mt-32 md:mt-80" />

    <div
      v-if="cities"
      class="max-w-1180 w-full mx-auto px-16 sm:px-30 mt-32 sm:mt-24">
      <h2 class="text-secondary text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm mb-20 sm:mb-24">Featured cities</h2>
      <div class="cities cities-featured">
        <div
          v-for="(city, index) in featuredCities"
          :key="index"
          class="hidden sm:block mb-30 last:mb-0 md:mb-0">
          <nuxt-link :to="`/${ city.slug }`">
            <img
              :src="`${mediaUrl}t_thumbnail/${city.featureImage.desktopUrl.trim()}` || require(`@/static/img/no-image.png`)"
              :alt="city.featureImage.altText || 'cities'"
              class="h-176 w-full object-cover rounded-8">
            <h3 class="text-terciary text-mobile-h2 md:text-desktop-h2 leading-2sm md:leading-2sm font-bold mt-16 mb-0">{{ city.name }}</h3>
            <p class="text-terciary text-mobile-body md:text-desktop-h4 leading-1sm md:leading-4sm mt-16">{{ city.snippet }}</p>
          </nuxt-link>
        </div>

        <cover-flow-carousel
          :slide-items="featuredCities.map(el => ({photo: el.featureImage} ))"
          class="block sm:hidden"
          :active-index.sync="activeIndex" />

        <div class="block sm:hidden mt-24 pl-16 md:pl-0">
          <h3 class="text-terciary text-mobile-h2 leading-2sm font-bold mb-0">{{ cities[activeIndex].name }}</h3>
          <p class="text-mobile-body leading-1sm mt-8">{{ cities[activeIndex].snippet }}</p>
          <nuxt-link :to="`/${ cities[activeIndex].slug }`" class="mt-16">
            <app-button type="default" class="py-1050 px-13 text-mobile-h3 leading-3sm rounded-8">View Details</app-button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      v-if="cities"
      class="bg-grey-700 pb-40 md:pb-48 pt-32 md:pt-48 mt-40 md:mt-48">
      <div class="max-w-1180 w-full mx-auto px-16 md:px-30 text-terciary">
        <h2 class="text-mobile-h2 md:text-desktop-h2 leading-2sm font-bold mb-32">All Cities</h2>
        <div class="cities">
          <div
            v-for="(city, index) in cities"
            :key="index">
            <nuxt-link :to="`/${ city.slug }`">
              <img
                v-if="city.featureImage"
                :src="`${mediaUrl}t_thumbnail/${city.featureImage.desktopUrl.trim()}` || require(`@/static/img/no-image.png`)"
                :alt="city.featureImage.altText || 'cities'"
                class="h-184 md:h-160 w-full object-cover rounded-8">
              <img
                v-else
                :src="require(`@/static/img/no-image.png`)"
                alt="all cities"
                class="h-184 md:h-160 w-full object-cover rounded-8">
              <h3 class="text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm font-bold mt-16 mb-0">{{ city.name }}</h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import gql from 'graphql-tag'
import Hero from '@/components/pages/Hero'
import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
import CoverFlowCarousel from '@/components/pages/CoverFlowCarousel'
import AppButton from '@/components/shared/AppButton'
import { cities } from '@/api/queries'

export default {
  name: 'DiscoverCitiesPage',

  components: { Hero, CoverFlowCarousel, AppButton, SubscribeNewsletter },

  apollo: {
    getSiteInfo: {
      prefetch: true,
      query: gql`
        query {
          getSiteInfo {
            discoverCitiesBarHeader
            discoverCitiesBarDescription
            discoverCitiesPageHeaderImage {
              desktopUrl
              altText
            }
          }
        }
      `
    },

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
    ...mapState({ mediaUrl: state => state.mediaUrl }),

    featuredCities () {
      return this.cities.filter(el => el.featured)
    }
  },

  methods: {
    slideChange () {
      this.activeIndex = this.mySwiper.activeIndex
    }
  },

  head () {
    return {
      title: this.page ? this.page.title : 'Discover Cities',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.page ? this.page.metaDescription : '' }
      ]
    }
  }
}
</script>

<style lang="scss">
.cities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;

    &-featured {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
