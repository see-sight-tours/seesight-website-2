<template>
  <div class="w-full" ref="reviewSection">
    <h1
      class="max-w-264 w-full sm:max-w-full text-terciary text-mobile-h1 sm:text-desktop-h1 font-bold leading-4sm sm:leading-3sm mb-30"
    >
      Reviews & Ratings
    </h1>
    <div class="reviews-container" v-if="reviews">
      <div
        v-for="(review, index) in shortenReviews"
        :key="index"
        class="review mb-30 w-full pb-20 border-b-2 border-grey-10"
      >
        <div class="reviews-header w-3/4 flex justify-between mb-10">
          <app-rate :rate="review.score" />
          <h6 class="mt-5 text-grey-40">{{ updateDate(review.date) }}</h6>
        </div>
        <h3 class="font-bold mr-10">{{ review.title }}</h3>
        <div
          class="reviews-review w-3/4 cursor-pointer"
          @click="showcaseModal(review.review)"
        >
          <p v-if="review.review">{{ updateReview(review.review) }}</p>
        </div>
        <div class="reviews-by flex mt-10 items-center justify-between">
          <h6 class="mr-5">
            <span class="font-bold"> By {{ review.user_name }} </span>
            <span class="text-grey-40"> - Vertified Purchaser </span>
          </h6>
          <img
            class="w-100"
            v-if="review.source_name !== 'VIATOR'"
            :src="review.source_logo"
            :alt="review.source_name"
          />
        </div>
      </div>
      <button
        @click="changeReviewsPage"
        class="w-9/20 mr-5 rounded py-5 text-white font-bold tracking-wider border-solid border-1 border-secondary bg-secondary"
      >
        Next Page
      </button>
      <!-- <button
        @click="showcaseReviewModal"
        class="w-9/20 py-5 rounded text-white font-bold tracking-wider border-solid border-1 border-secondary text-secondary"
      >
        Write a Revie
      </button> -->
    </div>
  </div>
</template>

<script>
import AppRate from "@/components/shared/AppRate";
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    reviews: {
      type: Array,
    },
  },
  data() {
    return {
      reviewStart: 0,
      page: 1,
    };
  },
  components: {
    AppRate,
  },
  methods: {
    ...mapMutations({
      setReviewPageNumber: "setReviewPageNumber",
      setModalName: "setModalName",
      setModalText: "setModalText",
      setIsModalOpen: "setIsModalOpen",
    }),
    updateDate(date) {
      const updatedDate = `${new Date(date)}`.split(" ").splice(0, 4).join(" ");
      return updatedDate;
    },
    updateReview(review) {
      const updatedReview = `${review}`.split(" ");
      if (updatedReview.length < 27) return updatedReview.join(" ");
      return updatedReview.splice(0, 23).join(" ") + "...";
    },
    changeReviewsPage() {
      const reviewSection = this.$refs.reviewSection;
      reviewSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      if (this.reviewStart >= 6) {
        this.page++;
        this.setReviewPageNumber(this.page);
        this.reviewStart = 0;
      }
      this.reviewStart = this.reviewStart + 3;
    },
    showcaseModal(review) {
      this.setModalName("trustMessage");
      this.setModalText(review);
      this.setIsModalOpen(true);
    },
    showcaseReviewModal() {
      this.setModalName("createReview");
      this.setIsModalOpen(true);
    },
  },
  computed: {
    shortenReviews() {
      let shortendReviews = [...this.reviews];
      shortendReviews = shortendReviews.splice(this.reviewStart, 3);
      return shortendReviews;
    },
  },
};
</script>

<style lang="scss" scoped></style>