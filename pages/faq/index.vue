<template>
  <div class="mt-56">
    <!-- Hero -->
    <hero
      :title="getSiteInfo && getSiteInfo.faqPageHeader"
      :text="getSiteInfo && getSiteInfo.faqPageHeaderSubtext"
      :image="getSiteInfo && getSiteInfo.faqPageHeaderImage"
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-144" />

    <div class="py-32 md:py-64">
      <div class="max-w-1180 w-full px-16 md:px-30 mx-auto">
        <h2 class="font-bold text-terciary text-mobile-h2 md:text-desktop-h1">Frequently Asked Questions</h2>

        <!-- Faq -->
        <faq />
      </div>
    </div>

    <div v-if="products" class="bg-grey-700 pt-32 pb-42 md:py-48">
      <div class="max-w-1180 w-full mx-auto pl-16 pr-0 md:px-30">
        <h2
          class="font-bold leading-4sm md:leading-3sm text-mobile-h1 md:text-desktop-h1 text-secondary mb-16 max-w-256 sm:max-w-full">
          Live the experience of our tours
        </h2>
        <h3
          class="font-bold text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm max-w-256 sm:max-w-full">
          The beginning of your adventure!
        </h3>
        <div class="flex flex-col mt-32">
          <h4 class="text-sm text-mobile-body md:text-desktop-h4 text-terciary mb-16 pr-16 sm:pr-0">Day Tours</h4>
          <div class="overflow-x-auto overflow-y-hidden">
            <div class="cards-scroll inline-block mr-16 lg:mx-0">
              <div class="tour-card-inner flex flex-wrap">
                <!-- Tour card -->
                <tour-card
                  v-for="(tourCardItem, index) in getDayTours.slice(0, 4)"
                  :key="index"
                  :tour-card-item="tourCardItem" />
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-32 md:mt-40 px-16 md:px-0">
            <nuxt-link to="/tours">
              <app-button type="arrow" class="flex items-center text-secondary">
                <span>See All Day Tours {{ `(${getDayTours.length})` }}</span>
                <span class="icon-arrow-bold block text-mobile-note leading-default rotote-0 ml-8" />
              </app-button>
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-col mt-32">
          <h4 class="text-sm text-mobile-body md:text-desktop-h4 text-terciary mb-16 pr-16 sm:pr-0">Multi Day Tours</h4>
          <div class="overflow-x-auto overflow-y-hidden">
            <div class="cards-scroll inline-block mr-16 lg:mx-0">
              <div class="tour-card-inner flex flex-wrap">
                <!-- Tour card -->
                <tour-card
                  v-for="(tourCardItem, index) in getMultiDayTours.slice(0, 4)"
                  :key="index"
                  :tour-card-item="tourCardItem" />
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-32 md:mt-40 px-16 md:px-0">
            <nuxt-link to="/tours">
              <app-button type="arrow" class="flex items-center text-secondary">
                <span>See All Multi Day Tours {{ `(${getMultiDayTours.length})` }}</span>
                <span class="icon-arrow-bold block text-mobile-note leading-default rotote-0 ml-8" />
              </app-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { products } from '@/api/queries/product'
import Hero from '@/components/pages/Hero'
import AppButton from '@/components/shared/AppButton'
import TourCard from '@/components/shared/TourCard'
import Faq from '@/components/pages/Faq'
export default {
  name: 'FAQPage',
  components: {
    Hero,
    AppButton,
    TourCard,
    Faq
  },
  apollo: {
    products: {
      prefetch: true,
      query: products
    }
  },
  computed: {
    getDayTours () {
      return this.products ? this.products.filter(el => el.productType === 'DAYTOUR') : []
    },
    getMultiDayTours () {
      return this.products ? this.products.filter(el => el.productType === 'MULTIDAY') : []
    }
  },
  methods: {
    // Will be finished when we get API
    changeTab (index) {
      for (const item of this.tags) { item.active = false }
      this.tags[index].active = true
    }
  },
  head () {
    return {
      title: this.getSiteInfo ? this.getSiteInfo.faqPageTitle : 'FAQ`s',
      meta: [{ hid: 'description', name: 'description', content: this.getSiteInfo ? this.getSiteInfo.faqPageMetaDescription : '' }]
    }
  }
}
</script>