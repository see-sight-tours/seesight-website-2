<template>
  <div >
     <hero-video
      title="Day Tours"
      text="Small Group Single Day Tours"
      image="getSiteInfo getSiteInfo.dayToursPageHeaderImage"
      location=""
      :video="
        `https://storage.googleapis.com/seesight-assets/seesight-niagara-video.mp4`
      "
      custom-class-wrap="h-screen40"
      custom-class-location=""
    />

    <trust />

    <featured-experiences
      filter-type="select"
      :active-tab="1"
      :items="products"
      initial-product-type="DAYTOUR"
    />

    <discover-cities />

    <trip-sheppard />
  </div>
</template>

<script>
import HeroVideo from "@/components/pages/HeroVideo";
import Trust from "@/components/shared/Trust";
import FeaturedExperiences from "@/components/pages/FeaturedExperiences";
import DiscoverCities from "@/components/pages/DiscoverCities";
import TripSheppard from "@/components/shared/TripSheppard";
import { products } from "@/api/queries/product";
export default {
  components: {
    HeroVideo,
    FeaturedExperiences,
    DiscoverCities,
    TripSheppard,
    Trust
  },
  apollo: {
    products: {
      prefetch: true,
      query: products,
    },
  }
};
</script>

<style lang="scss" scoped></style>
