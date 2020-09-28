<template>
  <div>
    <template v-if="products[0]">
      <!-- Tour Hero -->
      <tour-header
        v-if="products[0]"
        :duration="products[0].duration"
        :name="products[0].name"
        :review-average="products[0].reviewAverage"
        :reviews-length="products[0].review && products[0].review.length"
      />

      <!-- Tour Hero -->
      <div class="pt-27 pb-24 md:py-30">
        <div
          class="max-w-1180 w-full px-8 pb-32 mx-auto flex lg:flex-row flex-col-reverse"
        >
          <tour-info-box :product-by-slug="products[0]" />
          <tour-hero
            v-if="products[0]"
            :carousel-items="products[0].carouselItems"
          />
        </div>
      </div>

      <!-- Tour About -->
      <tour-about />

      <!-- Tour Experience -->
      <tour-experience
        v-if="products[0] && products[0].attractions.length"
        :items="products[0].attractions"
        :add-ons="products[0].addOns"
      />

      <!-- Highlights -->
      <tour-highlights
        v-if="products[0] && products[0].highlights.length"
        :highlights="products[0].highlights"
      />

      <!-- Itinerary -->
      <tour-itinerary
        v-if="products[0] && products[0].itineraries.length"
        :itinerary="products[0].itineraries"
      />

      <!-- Tour Description -->
      <tour-description
        v-if="products[0]"
        :long-description="products[0].longDescription"
        :tour-includes="products[0].tourIncludes"
        :important-info="products[0].importantInfo"
        :tour-questions="products[0].questions"
      />

      <!-- Tour related -->
      <tour-related
        v-if="products[0] && products[0].relatedProducts.length"
        :related-products="products[0].relatedProducts"
      />
    </template>
    <template v-else>
      <tour-booking
        v-if="productBySlug"
        :product="productBySlug"
        :is-booking.sync="isBooking"
      />
    </template>
  </div>
</template>

<script>
import TourHero from "@/components/pages/tour/TourHero";
import TourHeader from "@/components/pages/tour/TourHeader";
import TourInfoBox from "@/components/pages/tour/TourInfoBox";
import TourAbout from "@/components/pages/tour/TourAbout";
import TourExperience from "@/components/pages/tour/TourExperience";
import TourHighlights from "@/components/pages/tour/TourHighlights";
import TourItinerary from "@/components/pages/tour/TourItinerary";
import TourDescription from "@/components/pages/tour/TourDescription";
// import AboutInfo from '@/components/pages/AboutInfo'
// import DiscoverPlaces from '@/components/pages/DiscoverPlaces'
// import TourAccordion from '@/components/pages/tour/TourAccordion'
import TourRelated from "@/components/pages/tour/TourRelated";
// import TourBooking from '@/components/pages/tour/TourBooking'
// import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
// import PriceBar from '@/components/shared/PriceBar'
// import TourTrustBar from '@/components/shared/TourTrustBar'
import { productBySlug } from "@/api/queries/product";
export default {
  name: "DayToursDetailPage",
  data() {
    return {
      route: "",
    };
  },
  components: {
    TourHero,
    // TourTrustBar,
    TourHighlights,
    TourDescription,
    TourHeader,
    TourInfoBox,
    TourExperience,
    TourItinerary,
    // AboutInfo,
    // DiscoverPlaces,
    // TourAccordion,
    TourRelated,
    // TourBooking,
    // SubscribeNewsletter,
    // PriceBar
  },
  apollo: {
    products: {
      prefetch: true,
      query: productBySlug,
      variables() {
        return {
          slug: this.$route.params.slug,
        };
      },
    },
  },
  data() {
    return {
      isBooking: false,
    };
  },
  created() {
    this.route = this.$route.params.slug;
  },
  //   head () {
  //     return {
  //       title: this.productBySlug ? this.productBySlug.title : 'Day Tour',
  //       meta: [
  //         // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //         { hid: 'description', name: 'description', content: this.productBySlug ? this.productBySlug.metaDescription : '' }
  //       ],
  //       link: this.productBySlug ? [{ rel: 'canonical', href: `https://seesight-tours.com/tours/${this.productBySlug.slug}` }] : [{ rel: 'canonical', href: 'https://seesight-tours.com/tours' }],
  //       script: [
  //         {
  //           src: 'https://seesight-tours.rezdy.com/pluginJs?script=modal',
  //           async: true
  //         }
  //       ]
  //     }
  //   }
};
</script>