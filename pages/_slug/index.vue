<template>
  <div v-if="cities">
    <hero
      :title="`Best ${cities[0] && cities[0].name} Tours`"
      :search="true"
      :image="cities[0] && cities[0].featureImage[0]"
      custom-class-wrap="pt-16 md:pt-144 pb-24 md:pb-224"
    />

    <div class="max-w-1180 w-full mx-auto px-16 md:px-30 mt-16 md:mt-32">
      <h2
        class="font-bold text-terciary text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm mb-32"
      >
        Tours in {{ cities[0].name }}
      </h2>
    </div>

    <featured-experiences
      v-if="cities[0]"
      :items.sync="cities[0].products"
      :amount="cities[0].products.length"
      :city-id="cities[0].id"
    />

    <discover-places
      v-if="cities[0]"
      :title="`Best things to do in ${cities[0].name}`"
      bg-color="bg-grey-700"
      text-color-class="text-terciary"
      link-color-class="text-secondary"
      :items="cities[0].attractions"
    />

    <about-info
      v-if="cities[0]"
      class="border border-b border-grey-10"
      :title="`About ${cities[0].name}`"
      :short-description="cities[0].shortDescription"
      :long-description="cities[0].longDescription"
    />
  </div>
</template>

<script>
import { cityBySlug } from "@/api/queries/cities";
import Hero from "@/components/pages/Hero";
import FeaturedExperiences from "@/components/pages/FeaturedExperiences";
import DiscoverPlaces from "@/components/pages/DiscoverPlaces";
import AboutInfo from "@/components/pages/AboutInfo";
export default {
  components: {
    Hero,
    FeaturedExperiences,
    AboutInfo,
    DiscoverPlaces,
  },
  apollo: {
    cities: {
      prefetch: true,
      query: cityBySlug,
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>