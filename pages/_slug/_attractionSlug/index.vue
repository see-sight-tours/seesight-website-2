<template>
  <div
    v-if="attractions"
    class="max-w-1180 w-full mx-auto px-16 sm:px-30 mt-30"
  >
  <h3 class="text-desktop-32 mb-20 font-bold">
    {{ attractions[0].title }}
  </h3>
  <div class="flex h-312 lg:h-392">
      <div class="w-225 mr-10 overflow-y-auto md:block hidden">
        <img 
          v-for="(image, index) in attractions[0].images"
          :key="index"
          :src="`${mediaUrl}t_thumbnail/${image.desktopUrl.trim()}`" 
          :alt="image.altText"
          class="mb-10 h-48 lg:h-74 w-full opacity-50 cursor-pointer hover:opacity-100 duration-100 "
          :class="activeIndex === index && 'opacity-100'"
          @click="activeIndex = index"
        >
      </div>
      <img
          class="mr-10 w-1180"
          :src="
            `${mediaUrl}t_thumbnail/${attractions[0].images[activeIndex].desktopUrl.trim()}`
          "
          :alt="attractions[0].images[0].altText"
      />
      <div class="w-650 h-full p-15 rounded shadow-200 midsm:block hidden">
        <h4 class="font-bold">Overview</h4>
        <p class="">
          <vue-markdown>{{ attractions[0].shortDescription }}</vue-markdown>
        </p>
        <button 
          class="bg-primary w-full py-5 rounded mt-10 font-bold text-white"
          href="#attraction-cards"
        >
          View Tours with this Attraction
        </button>
      </div>
    </div>

    <div class="mt-100">
      <p>
        <vue-markdown>{{ attractions[0].longDescription }}</vue-markdown>
      </p>
      
      <div class="mt-30" v-if="attractions[0].whatToBring">
        <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">What to Bring</h3>
        <p>{{attractions[0].whatToBring}}</p>
      </div>

      <div class="mt-30" v-if="attractions[0].expertTips">
        <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">Expert Tips</h3>
        <p>{{attractions[0].expertTips}}</p>
      </div>

      <div class="mt-30" v-if="attractions[0].hourOfOperation">
        <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">Hours of Operation</h3>
        <p>{{attractions[0].hourOfOperation}}</p>
      </div>

      <div v-if="attractions[0].questions && attractions[0].questions.length">
        <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">
          Frequently asked questions
        </h3>
        <div v-for="(item, index) in attractions[0].questions" :key="index">
          <p class="font-bold mb-10">{{ item.question }}</p>
          <p class="mb-20">{{ item.answer }}</p>
        </div>
      </div>
    </div>

    <div
      v-if="attractions[0].products && attractions[0].products.length"
      class="flex flex-col pt-32 md:pt-48 pb-32 md:pb-48"
    >
      <div class="max-w-1180 w-full mx-auto">
        <h2
          class="text-mobile-h2 md:text-desktop-h2 leading-2sm md:leading-2sm text-terciary font-bold mb-16 md:mb-40 pr-16 md:pr-0"
        >
          Tours that include this attraction
        </h2>
        <div class="overflow-x-auto overflow-y-hidden">
          <div class="cards-scroll inline-block mr-16 lg:mx-0">
            <div
              class="tour-card-inner flex flex-wrap justify-between lg:justify-start"
              id="attraction-cards"
            >
              <tour-card
                v-for="(tourCardItem, index) in attractions[0].products"
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
      activeIndex: 0,
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
      title: this.attractions && this.attractions[0] ? this.attractions[0].title : "Attraction",
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
      link: this.attractions && this.attractions[0]
        ? [
            {
              rel: "canonical",
              href: `https://seesight-tours.com/${this.attractions[0].city.slug}/${this.attractions[0].slug}`
            }
          ]
        : [{ rel: "canonical", href: "https://seesight-tours.com/cities" }]
    };
  }
};
</script>
