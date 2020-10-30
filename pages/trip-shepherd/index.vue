<template>
  <div>
    <!-- Hero -->
    <hero
      :title="tripShepherdPage && tripShepherdPage.tripShepherdBarHeader"
      :text="tripShepherdPage && tripShepherdPage.tripShepherdBarText"
      :image="tripShepherdPage && tripShepherdPage.tripShepherdBarImage"
      location=""
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-48"
      custom-class-location="mt-32 md:mt-80"
    />

    <div class="max-w-1180 mx-auto px-16">
      <div class="pt-24 lg:pt-40 pb-40 lg:pb-56 lg:flex lg:justify-between">
        <div class="mb-40 lg:mb-0 lg:mr-24 lg:max-w-512">
          <h1
            class="text-mobile-h1 lg:text-desktop-h1 text-terciary font-bold mb-16"
          >
            TripShepherd is an in-destination travel agent and plan-ahead
            concierge service.
          </h1>
          <p class="text-grey-400 text-mobile-h3 mb-40">
            Traditionally, travel agents make money from the commissions on the
            products they sell you and concierges meet with you once you arrive
            in-destination. With TripShepherd, we charge a flat fee so we will
            never push extra products on you that don’t make sense and we can
            help you get planning from the get go. We’ll help create and execute
            the perfect trip for you with authentic local expertise and pass
            along any of those savings back to you. You’ll also have access to
            your TripShepherd while you’re in-destination to help with
            additional requests during your stay.
          </p>
          <div class="w-full max-w-full h-162 md:h-288">
            <img src="@/static/img/trip-img.jpg" alt="trip-shepherd" class="h-full w-full rounded-8 object-cover">
          </div>
        </div>
        <div class="lg:min-w-480 lg:max-w-480">
          <div
            class="text-white bg-secondary rounded-8 p-24 lg:px-48 lg:pt-56 lg:pb-80 lg:text-center"
          >
            <p
              class="text-mobile-h1 lg:text-desktop-h1 leading-4sm md:leading-3sm font-bold mb-8"
            >
              Start your consultation now!
            </p>
            <p
              class="text-mobile-h3 lg:text-desktop-h3 leading-3sm md:leading-5sm mb-24"
            >
              {{ "" }}
            </p>
            <app-button
              v-if="getSiteInfo"
              type="default"
              class="px-46 py-1050 sm:py-16 sm:px-110 rounded-8 text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
              @click.native="$router.push('/trip-shepherd/')"
            >
              {{ getSiteInfo.tripShepherdBarButtonText }}
            </app-button>
          </div>
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div class="bg-grey-700">
      <div class="max-w-1180 mx-auto px-16 pt-40 lg:pt-88 pb-48 lg:pb-72">
        <div class="flex flex-col lg:flex-row">
          <div class="lg:min-w-240">
            <p
              class="text-mobile-h1 lg:w-1/2 text-terciary font-bold mb-24 lg:mb-0 lg:mr-64"
            >
              How it works
            </p>
          </div>
          <div class="how-it-works">
            <div v-for="(item, index) in howItWorks" :key="index">
              <h2
                class="text-mobile-h2 lg:text-desktop-h2 text-secondary font-bold mb-16"
              >
                {{ item.title }}
              </h2>
              <p class="text-mobile-h3 lg:text-desktop-h3 text-terciary">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service includes -->
    <div
      class="max-w-1180 mx-auto px-16 md:px-30 pt-40 pb-40 lg:pt-64 lg:pb-64 lg:flex lg:flex-row-reverse lg:justify-between"
    >
      <div class="mb-32">
        <h3
          class="text-mobile-h1 lg:text-desktop-h2 text-terciary font-bold mb-24 lg:mb-16"
        >
          Your TripShepherd Service Includes:
        </h3>
        <ul class="text-mobile-h3 lg:text-desktop-h3">
          <li
            v-for="(item, index) in serviceIncludes"
            :key="index"
            class="mb-16"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="lg:min-w-480 lg:max-w-full lg:mr-80">
        <div
          class="text-white bg-secondary rounded-8 p-24 lg:px-48 lg:pt-56 lg:pb-80 lg:text-center"
        >
          <p
            class="text-mobile-h1 lg:text-desktop-h1 leading-4sm md:leading-3sm font-bold mb-8"
          >
            Start your consultation now!
          </p>
          <p
            class="text-mobile-h3 lg:text-desktop-h3 leading-3sm md:leading-5sm mb-24"
          >
            {{ "" }}
          </p>
          <app-button
            v-if="getSiteInfo"
            type="default"
            class="px-46 py-1050 sm:py-16 sm:px-110 rounded-8 text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
            @click.native="$router.push('/trip-shepherd/')"
          >
            {{ getSiteInfo.tripShepherdBarButtonText }}
          </app-button>
        </div>
      </div>
    </div>

    <!-- Important information -->
    <div class="max-w-1180 w-full px-16 md:px-30 mx-auto">
      <div
        class="flex flex-col lg:flex-row bg-grey-700 rounded-8 p-24 md:px-80 md:pt-55 md:pb-70 mb-48 lg:mb-64"
      >
        <h3
          class="text-mobile-h1 lg:text-desktop-h1 text-terciary font-bold mb-24 lg:mb-16 lg:mr-72"
        >
          Important Information:
        </h3>
        <ul class="text-mobile-h3 lg:text-desktop-h3">
          <li
            v-for="(item, index) in importantInformation"
            :key="index"
            class="mb-16"
          >
            • {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-grey-10">
      <div class="pt-32 lg:pt-64 pb-48 lg:pb-64">
        <div class="max-w-1180 mx-auto px-16 sm:px-32">
          <h3
            class="text-mobile-h1 lg:text-desktop-h1 text-terciary font-bold mb-32"
          >
            Frequently Asked Questions
          </h3>
        </div>
        <div class="max-w-1180 w-full px-16 sm:px-30 mx-auto">
          <!-- Faq -->
          <faq />
        </div>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import gql from "graphql-tag";
import Hero from "@/components/pages/Hero";
import AppButton from "@/components/shared/AppButton";
// import SubscribeNewsletter from "@/components/pages/SubscribeNewsletter";
// import Faq from "@/components/pages/Faq";
export default {
  name: "TripSheppardPage",
  components: { Hero, AppButton },
  apollo: {
    tripShepherdPage: {
      prefetch: true,
      query: gql`
        query {
          tripShepherdPage {
            tripShepherdBarText
            tripShepherdBarHeader
            tripShepherdBarImage {
              mobileUrl
              desktopUrl
              altText
            }
          }
        }
      `,
    },
  },
  data() {
    return {
      serviceIncludes: [
        "• 2 Phone Consultations prior to in-destination arrival",
        "• Packages tailored to your interests and needs",
        "• Support during your trip - unlimited support to answer questions via email and/or phone",
        "• In-person meeting tbd",
      ],
      howItWorks: [
        {
          title: "1 Book free initial 15-minute call.",
          text:
            "Your TripShepherd will call you for your initial 15-minute consultation to get to know you - your likes, interests, and everything else we need to help create your perfect trip.",
        },
        {
          title: "2 Designing your perfect trip package",
          text:
            "Your TripShepherd will send you a package with recommendations you would enjoy during your trip. This may include things like dining, accomodations, attractions and other activities.",
        },
        {
          title: "3 Confirmation",
          text:
            "After reviewing your package options (and discussing with your TripShepherd if applicable), you will confirm which items you would like to select for your trip. Your TripShepherd will build you a final itinerary and share your total savings with our exclusive partner discounts.",
        },
      ],
      importantInformation: [
        "Packages will vary based on individual interests, let your shepherd know if you have any specific interests!",
      ],
    };
  },
  methods: {
    // Will be finished when we get API
    changeTab(index) {
      for (const item of this.tags) {
        item.active = false;
      }
      this.tags[index].active = true;
    },
  },
  head() {
    return {
      title: this.getSiteInfo
        ? this.getSiteInfo.tripShepherdBarHeader
        : "Trip Shepherd",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.getSiteInfo ? this.getSiteInfo.tripShepherdBarText : "",
        },
      ],
      link: [
        { rel: "canonical", href: "https://seesight-tours.com/trip-shepherd" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.how-it-works {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 48px;
  @media (max-width: 998px) {
    grid-column-gap: 24px;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 32px;
  }
}
</style>