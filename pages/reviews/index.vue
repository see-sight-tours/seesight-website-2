<template>
  <div>
    <!-- Hero -->
    <!-- <hero
      :title="getSiteInfo && getSiteInfo.reviewsPageHeader"
      :text="getSiteInfo && getSiteInfo.reviewsPageHeaderSubtext"
      :image="getSiteInfo && getSiteInfo.reviewsPageHeaderImage"
      :location="' '"
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-48"
      custom-class-location="mt-32 md:mt-80" /> -->

    <div
      class="flex flex-col lg:flex-row max-w-1440 mx-auto px-16 lg:px-50 py-20"
    >
      hi friends
      <!-- Review Dashboard -->
      <review-dashboard />
      <!-- Reviews by city -->
      <div
        v-if="reviews"
        class="max-w-1440 mx-auto px-16 lg:px-50 py-20 w-full sm:w-5/6 lg:w-3/4"
      >
        <review-by-city :reviews="reviews" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Hero from "@/components/pages/Hero";
import ReviewDashboard from "@/components/pages/reviews/ReviewDashboard";
import ReviewByCity from "@/components/pages/reviews/ReviewByCity";
export default {
  name: "ReviewsPage",
  components: { Hero, ReviewDashboard, ReviewByCity },
  data() {
    return {
      page: 1,
    };
  },
  async asyncData({ store }) {
    try {
      const reviews = axios
        .get(
          `https://magpie.travel/api/reviews?api_key=77c66a64-625f-41ad-9107-f6fb3f0021ee&page=${store.page}`
        )
        .then((res) => ({ reviews: res.data.reviews }));
      return reviews;
    } catch (error) {
      console.log(error);
    }
  },
  head() {
    return {
      title: "Reviews",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/reviews" }],
    };
  },
};
</script>

<style lang="scss">
.reviews {
  &__item-wrap {
    @apply pb-20;
  }
  &__item {
    min-width: 345px;
    max-width: 345px;
    @apply mr-56;
    &:last-child {
      @apply mr-0;
    }
  }
  &__item-text {
    word-break: break-word;
  }
  @media (max-width: 768px) {
    &__item {
      @apply mr-24;
    }
  }
}
</style>