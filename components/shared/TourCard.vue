<template>
  <div
    class="tour-card-wrap flex flex-col w-full sm:w-24/50 lg:w-31/100 mr-0 lg:mr-20 mb-56 cursor-pointer"
  >
    <nuxt-link :to="`/tours/${this.tourCardItem.slug}`" class="cursor-pointer" @click="goToTour">
      <div class="h-176 xsm:h-248 sm:h-168 md:h-208 relative">
        <img
        v-if="tourCardItem.featureImages[0]"
          :src="
            `${mediaUrl}t_thumbnail/${tourCardItem.featureImages[0].desktopUrl.trim()}` ||
              require(`@/static/img/no-image.png`)
          "
          :alt="
            tourCardItem.featureImage
              ? tourCardItem.featureImage.altText
              : 'product images'
          "
          class="h-full xsm:h-248 sm:h-full w-full object-cover rounded-8"
        >
        <div
          v-if="tourCardItem.cardMessage"
          class="absolute top-0 bg-primary w-120 p-4 rounded-tl-8 rounded-br-8 text-center text-white font-bold"
        >
          {{ tourCardItem.cardMessage }}
        </div>
      </div>
      <div class="flex items-center h-29 justify-between mt-10">
        <p v-if="tourCardItem.duration" class="text-secondary leading-1sm">{{ tourCardItem.duration }} {{tourCardItem.productType === "DAYTOUR" ? "hours" : "days"}}</p> 
        <div class="flex text-terciary">
          <p v-if="tourCardItem.reviewAverage">{{ tourCardItem.reviewAverage.toFixed(1) }}/5</p>
          <img v-if="tourCardItem.reviewAverage" :src="star" alt="star rating" class="w-16 ml-6">
        </div>
      </div>
    </nuxt-link>
    <h3 class="font-bold text-desktop-h4 mt-10" @click="goToTour">{{ tourCardItem.name }}</h3>
    <p
      class="text-terciary text-mobile-h5 md:text-desktop-h5 leading-6sm mt-6 mb-16"
    >
      {{ shortedSnippet }}
    </p>
    <div class="button-container flex mt-15 justify-between mt-auto">
      <button class="btn w-49/100 p-5 px-12 bg-white rounded text-primary font-bold border-primary border-solid" @click="goToTour">See More</button>
      <a
        id="button-booking"
        class="button-booking rezdy rezdy-modal btn w-49/100 p-5 px-12 bg-primary rounded flex items-center justify-center font-bold text-white border-primary border-solid"
        :href="
          `https://seesight-tours.rezdy.com/${tourCardItem.bokunWidgetNumber}`
        "
      >Book Now</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import star from "../../assets/images/svg/star.svg";
export default {
  name: "TourCard",
  props: {
    tourCardItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl }),
    cardLink() {
      if (this.tourCardItem.productType === "DAYTOUR") {
        return `/tours/${this.tourCardItem.slug}`;
      } else if (this.tourCardItem.productType === "MULTIDAY") {
        return `/tours/${this.tourCardItem.slug}`;
      } else {
        return `/tours/${this.tourCardItem.slug}`;
      }
    },
    star() {
      return star;
    },
    shortedSnippet() {
      if(!this.tourCardItem.snippet) return
      return (
        this.tourCardItem.snippet
          .split("")
          .splice(0, 80)
          .join("") + "..."
      );
    }
  },
  methods: {
    goToTour() {
      window.location.href = this.cardLink;
    }
  },
  head() {
    return {
      script: [
        {
          src: "https://seesight-tours.rezdy.com/pluginJs?script=modal",
          async: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.btn {
  border-width: 2px;
}
.cards-scroll {
  min-width: calc(100% - 32px);
}
</style>
