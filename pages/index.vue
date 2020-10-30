<template>
  <div v-if="homePage">
    <div class="hidden md:block">
      <hero-video
        :search="true"
        :title="homePage.homePageTitle"
        :text="homePage.homePageHeader"
        :video="`https://storage.googleapis.com/seesight-assets/seesight-niagara-video.mp4`"
        custom-class-wrap="h-screen70"
      />
    </div>
     
    <div class="block md:hidden">
      <hero
        :title="homePage.homePageTitle"
        :text="homePage.homePageHeader"
        :image="homePage.headerImage"
        :location="'Niagara Falls, Canada'"
        :search="true"
        custom-class-wrap="pt-24 md:pt-128 pb-16 md:pb-48"
        custom-class-location="mt-32 md:mt-128"
      />
    </div>

    <trust />

    <featured-experiences
      v-if="products"
      type="select"
      :items="products"
      :amount="9"
      initial-product-type="DAYTOUR"
    />

    <discover-cities />

    <meet-guides-carousel />

    <subscribe-newsletter />

  </div>
</template>

<script>
import gql from "graphql-tag";
import HeroVideo from "@/components/pages/HeroVideo";
import Hero from "@/components/pages/Hero";
import Trust from "@/components/shared/Trust";
import FeaturedExperiences from "@/components/pages/FeaturedExperiences";
import DiscoverCities from "@/components/pages/DiscoverCities";
import MeetGuidesCarousel from "@/components/MeetGuidesCarousel";
import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
import { products } from "@/api/queries/product";
import { homePage } from "@/api/queries/home";
export default {
  components: {
    HeroVideo,
    Hero,
    FeaturedExperiences,
    Trust,
    DiscoverCities,
    MeetGuidesCarousel,
    SubscribeNewsletter
  },
  apollo: {
    products: {
      prefetch: true,
      query: products,
    },
    homePage: {
      prefetch: true,
      query: homePage,
    },
  },
  head() {
    return {
      title: this.homePage ? this.homePage.homePageTitle : "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.homePage ? this.homePage.homePageMetaDescription : "",
        },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/" }],
    };
  },
};
</script>
