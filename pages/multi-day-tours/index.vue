<template>
  <div>
    <hero-video
      title="Day Tours"
      text="Small Group Single Day Tours"
      image="getSiteInfo getSiteInfo.dayToursPageHeaderImage"
      location=""
      :video="`https://storage.googleapis.com/seesight-assets/seesight-niagara-video.mp4`"
      custom-class-wrap="h-screen40"
      custom-class-location=""
    />

    <trust />

    <featured-experiences
      v-if="products"
      filter-type="select"
      :items.sync="products"
      :active-tab="1"
      :amount="products.length"
    />

    <discover-cities />
  </div>
</template>

<script>
import { products } from "@/api/queries/product";
import HeroVideo from "@/components/pages/HeroVideo";
import Trust from "@/components/shared/Trust";
import FeaturedExperiences from "@/components/pages/FeaturedExperiences";
import DiscoverCities from "@/components/pages/DiscoverCities";
export default {
  components: {
    HeroVideo,
    FeaturedExperiences,
    DiscoverCities,
    Trust,
  },
  apollo: {
    products: {
      prefetch: true,
      query: products,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>