<template>
  <div>
    <hero
      :title="partnersPage && partnersPage.header"
      :text="partnersPage && partnersPage.headerSubtext"
      :image="partnersPage && partnersPage.headerImage"
      custom-class-wrap="pt-24 md:pt-56 pb-80 md:pb-144"
      custom-class-location="mt-32 md:mt-48"
    />
    
    <div
      class="flex flex-col lg:flex-row items-center max-w-1180 w-full mx-auto px-16 sm:px-30 -mt-15 sm:-mt-25 pb-40 sm:pb-64"
    >
      <div
        v-for="(travelAgentCardItem, index) in travelAgentCardItems"
        :key="index"
        class="flex items-center bg-white max-w-full sm:max-w-352 w-full shadow-300 rounded-8 pt-16 pb-15 sm:pb-24 pl-16 sm:pl-32 pr-26 sm:pr-45 mr-0 lg:mr-32 mb-16 lg:mb-0 last:mb-0 last:mr-0"
      >
        <div class="max-w-37 sm:max-w-94 w-full h-40 sm:h-80 mr-22">
          <img
            :src="require(`~/static/img/${travelAgentCardItem.img}.svg`)"
            alt="travel"
            class="w-full h-full"
          />
        </div>
        <h3
          class="text-secondary text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm font-bold mb-0"
        >
          {{ travelAgentCardItem.title }}
        </h3>
      </div>
    </div>

    <div class="bg-secondary pt-32 md:pt-88 pb-40 md:pb-64">
      <div class="max-w-1180 w-full px-16 md:px-30 mx-auto">
        <div class="start-earning-more-today">
          <div>
            <h2
              class="lg:max-w-216 w-full text-white text-mobile-h1 sm:text-desktop-h1 leading-4sm sm:leading-3sm font-bold mb-0"
            >
              Start Earning Today
            </h2>
          </div>
          <div>
            <h3
              class="text-white text-mobile-h2 sm:text-desktop-h2 leading-2sm font-bold mb-8 sm:mb-16"
            >
              Easy to apply and free to sign up
            </h3>
            <p
              class="text-white text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
            >
              You may register independently or for your agency. We’ll gather
              some info from you to help you get set up. There are no fees to
              get started and no recurring fees.
            </p>
          </div>
          <div>
            <h3
              class="text-white text-mobile-h2 sm:text-desktop-h2 leading-2sm font-bold mb-8 sm:mb-16"
            >
              Earn commission
            </h3>
            <p
              class="text-white text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
            >
              You’ll earn at least 10% commission per tour booking - includes
              day tours, multi-day tour experiences and airport transfer
              services.
            </p>
          </div>
          <div>
            <h3
              class="text-white text-mobile-h2 sm:text-desktop-h2 leading-2sm font-bold mb-8 sm:mb-16"
            >
              Track your success
            </h3>
            <p
              class="text-white text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
            >
              Log in to see booking and commission details at any time. We’ll
              also send you monthly reports tracking how much you’ve earned.
            </p>
          </div>
        </div>
        <app-button
          type="default"
          class="flex text-mobile-h3 md:text-desktop-h4 leading-normal px-65 md:px-52 py-12 md:py-1550 rounded-8 ml-0 md:ml-auto mt-32 md:mt-40"
          @click.native="showModal('signup')"
        >
          Sign Up for Free
        </app-button>
      </div>
    </div>

    <div v-if="products" class="pt-40 pb-32 md:pt-64 mb:pb-16">
      <div class="max-w-1180 w-full pl-16 pr-0 md:px-30 mx-auto">
        <h2
          class="text-terciary text-mobile-h1 md:text-desktop-h2 leading-4sm md:leading-2sm font-bold mb-24 md:mb-32 pr-16 md:pr-0"
        >
          Access The Industry’s Leading Tour Site
        </h2>
      </div>
      <div>
        <featured-experiences 
          :items.sync="products" 
          type="select"
          :amount="9" 
          initial-product-type="DAYTOUR"
        />
      </div>
    </div>

    <!-- Discover Cities -->
    <discover-cities />
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapMutations } from "vuex";
import Hero from "@/components/pages/Hero";
import DiscoverCities from "@/components/pages/DiscoverCities";
import AppButton from "@/components/shared/AppButton";
import FeaturedExperiences from "@/components/pages/FeaturedExperiences";
import { partnersPage } from "@/api/queries/partner";
import { products } from "@/api/queries/product";
export default {
  name: "TravelAgentPage",
  components: { Hero, DiscoverCities, AppButton, FeaturedExperiences },
  apollo: {
    partnersPage: {
      prefetch: true,
      query: partnersPage,
    },
    products: {
      prefetch: true,
      query: products,
    },
  },
  data() {
    return {
      travelAgentCardItems: [
        {
          img: "travel-agent-icon1",
          title: "Small Group Tours",
        },
        {
          img: "travel-agent-icon2",
          title: "Authentic experiences",
        },
        {
          img: "travel-agent-icon3",
          title: "Tailored tours for your client’s interests",
        },
      ],
      activeIndex: 0,
    };
  },
  computed: {
    getDayTours() {
      return this.products.filter((el) => el.productType === "DAYTOUR");
    },
    getMultiDayTours() {
      return this.products.filter((el) => el.productType === "MULTIDAY");
    },
  },
  methods: {
    ...mapMutations({
      setModalName: "setModalName",
      setIsModalOpen: "setIsModalOpen",
    }),
    showModal(modal) {
      this.setIsModalOpen(true);
      this.setModalName(modal);
    },
  },
  head() {
    return {
      title: this.getSiteInfo
        ? this.getSiteInfo.agentPageTitle
        : "Travel Agent",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.getSiteInfo
            ? this.getSiteInfo.agentPageMetaDescription
            : "",
        },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/partner" }],
    };
  },
};
</script>

<style lang="scss">
.start-earning-more-today {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 48px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 48px;
  }
  @media (max-width: 576px) {
    grid-row-gap: 40px;
  }
}
</style>