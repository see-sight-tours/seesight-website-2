<template>
  <div
    v-if="items.length"
    class="pt-32 pb-40 sm:pt-88 sm:pb-68"
    :class="[bgColor]"
  >
    <div
      class="max-w-1180 w-full pl-16 pr-0 sm:px-30 mx-auto flex flex-col lg:flex-row"
    >
      <h2
        class="max-w-full lg:max-w-240 w-full font-bold text-mobile-h1 sm:text-desktop-h1 leading-4sm sm:leading-3sm mb-0 mr-0 lg:mr-64 mb-24 sm:mb-30 lg:mb-0"
        :class="[textColorClass]"
      >
        {{ title ? title : "What you’ll experience" }}
      </h2>
      <div class="hidden sm:flex overflow-x-auto overflow-y-hidden pb-20">
        <attraction-card
          card-type="addOns"
          :items="items"
          :add-ons="addOns"
          :media-url="mediaUrl"
          :text-color-class="textColorClass"
          :link-color-class="linkColorClass"
        />
        <attraction-card
          :items="items"
          card-type="attraction"
          :media-url="mediaUrl"
          :text-color-class="textColorClass"
          :link-color-class="linkColorClass"
        />
      </div>
      <cover-flow-carousel
        :slide-items="items.map((el) => ({ photo: el.images[0] }))"
        class="block sm:hidden"
        :active-index.sync="activeIndex"
      />
      <div class="block sm:hidden w-full mt-15 pl-16 pr-40">
        <h3
          class="text-mobile-h2 leading-2sm font-bold mb-8"
          :class="[textColorClass]"
        ></h3>
        <p class="mobile-body leading-1sm mb-16" :class="[textColorClass]">
          {{ items[activeIndex].snippet }}
        </p>
        <nuxt-link
          :to="`/${items[activeIndex].city.slug}/${items[activeIndex].slug}`"
        >
          <app-button
            type="arrow"
            class="flex items-center"
            :class="[linkColorClass]"
          >
            <span
              class="leading-normal sm:leading-5sm text-mobile-body sm:text-desktop-h3 font-bold"
              >See more</span
            >
            <span
              class="icon-arrow-bold text-mobile-note sm:text-desktop-note leading-default rotote-0 ml-8"
            />
          </app-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CoverFlowCarousel from "@/components/pages/CoverFlowCarousel";
import AppButton from "@/components/shared/AppButton";
import AttractionCard from "@/components/shared/AttractionCard";
export default {
  name: "DiscoverPlaces",
  components: {
    CoverFlowCarousel,
    AppButton,
    AttractionCard,
  },
  props: {
    bgColor: {
      type: String,
      default: "",
    },
    textColorClass: {
      type: String,
      required: true,
    },
    linkColorClass: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => "",
    },
    addOns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showAllAtractions: false,
      activeIndex: 0,
    };
  },
  computed: {
    ...mapState({
      mediaUrl: (state) => state.mediaUrl,
    }),
  },
  methods: {
    slideChange() {
      this.activeIndex = this.mySwiper.activeIndex;
    },
  },
};
</script>