<template>
  <div v-if="attractions">
    <!-- Hero -->
    <hero
      :title="attractions && attractions[0].name"
      :image="attractions && attractions[0].images[0]"
      custom-class-wrap="pt-24 md:pt-104 pb-40 md:pb-112"
    />

    <about-info
      v-if="attractions"
      title="Description"
      :short-description="attractions[0].shortDescription"
      :long-description="attractions[0].longDescription"
      :hour-of-operation="attractions[0].hourOfOperation"
      :what-to-bring="attractions[0].whatToBring"
      :expert-tips="attractions[0].expertTips"
      class="pt-32 pb-56 md:py-48"
    >
      <template v-if="attractions">
        <div class="flex justify-between flex-col sm:flex-row mt-24 sm:mt-32">
          <div
            class="max-w-520 w-full h-288 sm:h-520 mr-0 sm:mr-24 mb-16 sm:mb-0"
          >
            <img
              :src="
                `${imageUrl}${attractions[0].images[0].desktopUrl.trim()}` ||
                require(`@/static/img/no-image.png`)
              "
              :alt="attractions[0].images[0].altText || 'Attraction image'"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="flex flex-row sm:flex-col">
            <div
              v-for="image in attractions[0].images.slice(0, 2)"
              :key="image.id"
              class="max-w-248 w-full h-136 sm:h-248 mr-16 last:mr-0 sm:mr-0 mb-0 sm:mb-24"
            >
              <img
                :src="
                  `${imageUrl}${image.desktopUrl.trim()}` ||
                  require(`@/static/img/no-image.png`)
                "
                :alt="image.altText || 'Attraction image'"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </template>
    </about-info>

    <app-accordion v-if="attractions[0]" :default-open="0">
      <app-accordion-item
        collapse-icon="arrow-icon"
        class="bordered border-t border-grey-800"
        custom-class="max-w-1180 w-full m-auto px-16 md:px-30 pt-25 md:pt-40 pb-25 md:pb-34"
      >
        <template v-slot:title>
          <p
            class="text-terciary font-bold text-mobile-h2 md:text-desktop-h1 leading-2sm md:leading-3sm pr-20 md:pr-40"
          >
            Frequently Asked Questions
          </p>
        </template>
        <component
          :is="'faq'"
          :tour-questions="attractions[0].questions"
          :show-general="false"
          class="mt-20"
        />
      </app-accordion-item>
    </app-accordion>

    <div
      v-if="attractions"
      {{attractions[0].relatedProducts.length}}
      class="bg-grey-700 flex flex-col pt-32 md:pt-48 pb-32 md:pb-48"
    >
      <div class="max-w-1180 w-full pl-16 pr-0 md:px-30 mx-auto">
        <h2
          class="text-mobile-h2 md:text-desktop-h2 leading-2sm md:leading-2sm text-terciary font-bold mb-16 md:mb-40 pr-16 md:pr-0"
        >
          Tours that include this attraction
        </h2>
        <div class="overflow-x-auto overflow-y-hidden">
          <div class="cards-scroll inline-block mr-16 lg:mx-0">
            <div
              class="tour-card-inner flex flex-wrap justify-between lg:justify-start"
            >
              <tour-card
                v-for="(tourCardItem, index) in attractions[0].relatedProducts"
                :key="index"
                :tour-card-item="tourCardItem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/pages/Hero";
import AboutInfo from "@/components/pages/AboutInfo";
import TourCard from "@/components/shared/TourCard";
import AppAccordion from "@/components/shared/AppAccordion";
import AppAccordionItem from "@/components/shared/AppAccordionItem";
// import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
// import Faq from '@/components/pages/Faq'
import { attractionBySlug } from "@/api/queries/cities";
export default {
  name: "AttractionPage",
  components: { Hero, AboutInfo, TourCard, AppAccordion, AppAccordionItem },
  apollo: {
    attractions: {
      prefetch: true,
      query: attractionBySlug,
      variables() {
        return { slug: this.slug };
      },
    },
  },
  data() {
    return {
      slug: this.$route.params.attractionSlug,
    };
  },
  computed: {
    ...mapState({ mediaUrl: (state) => state.mediaUrl }),
    imageUrl() {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`;
      } else {
        return `${this.mediaUrl}t_desktop/`;
      }
    },
  },
  created() {
    console.log(this.attractionBySlug);
  },
  head() {
    return {
      title: this.attractionBySlug ? this.attractionBySlug.title : "Attraction",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.attractionBySlug
            ? this.attractionBySlug.metaDescription
            : "",
        },
      ],
      link: this.attractionBySlug
        ? [
            {
              rel: "canonical",
              href: `https://seesight-tours.com/${this.attractionBySlug.city.slug}/${this.attractionBySlug.slug}`,
            },
          ]
        : [{ rel: "canonical", href: "https://seesight-tours.com/cities" }],
    };
  },
};
</script>