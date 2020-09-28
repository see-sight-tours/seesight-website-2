<template>
  <div>
    <div class="hidden sm:block">
      <hero-video
        :search="true"
        title="getSiteInfo getSiteInfo.homePageHeader"
        text="sdaa"
        :video="`https://storage.googleapis.com/seesight-assets/seesight-niagara-video.mp4`"
        custom-class-wrap="h-screen70"
      />

      <trust />
      
    <featured-experiences
      v-if="products"
      type="select"
      :items="products"
      :amount="9" />

    <discover-cities />

    <meet-guides-carousel />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import HeroVideo from '@/components/pages/HeroVideo'
import Trust from '@/components/shared/Trust'
import FeaturedExperiences from '@/components/pages/FeaturedExperiences'
import DiscoverCities from '@/components/pages/DiscoverCities'
import MeetGuidesCarousel from '@/components/MeetGuidesCarousel'
import { products } from '@/api/queries/product'
export default {
  components: {
    HeroVideo,
    FeaturedExperiences,
    Trust,
    DiscoverCities,
    MeetGuidesCarousel
  },
  apollo: {
    products: {
      prefetch: true,
      query: products
    }
  }
}
</script>
