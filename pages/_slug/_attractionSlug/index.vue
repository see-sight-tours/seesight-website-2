<template>
  <div
    v-if="attractions"
    class="max-w-1180 w-full mx-auto px-16 sm:px-30 mt-32 sm:mt-24"
  >
    <h1 class="text-desktop-hero-smaller mb-40">{{ attractions[0].title }}</h1>
    <img
      class="w-full"
      :src="
        `${mediaUrl}t_thumbnail/${attractions[0].images[0].desktopUrl.trim()}`
      "
      alt=""
    />
    <p class="mt-10">
      <vue-markdown>{{ attractions[0].longDescription }}</vue-markdown>
    </p>

    <div
      v-if="
        attractions[0].relatedProducts && attractions[0].relatedProducts.length
      "
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/pages/Hero";
import AboutInfo from "@/components/pages/AboutInfo";
import TourCard from "@/components/shared/TourCard";
import AppAccordion from "@/components/shared/AppAccordion";
import AppAccordionItem from "@/components/shared/AppAccordionItem";
import VueMarkdown from "vue-markdown";
// import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
// import Faq from '@/components/pages/Faq'
import { attractionBySlug } from "@/api/queries/cities";
export default {
  name: "AttractionPage",
  components: {
    Hero,
    AboutInfo,
    TourCard,
    AppAccordion,
    AppAccordionItem,
    VueMarkdown
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl })
  },
  apollo: {
    attractions: {
      prefetch: true,
      query: attractionBySlug,
      variables() {
        return { slug: this.slug };
      }
    }
  },
  data() {
    return {
      slug: this.$route.params.attractionSlug
    };
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl }),
    imageUrl() {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`;
      } else {
        return `${this.mediaUrl}t_desktop/`;
      }
    }
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
            : ""
        }
      ],
      link: this.attractionBySlug
        ? [
            {
              rel: "canonical",
              href: `https://seesight-tours.com/${this.attractionBySlug.city.slug}/${this.attractionBySlug.slug}`
            }
          ]
        : [{ rel: "canonical", href: "https://seesight-tours.com/cities" }]
    };
  }
};
</script>
