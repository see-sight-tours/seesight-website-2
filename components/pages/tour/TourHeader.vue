<template>
  <div class="w-full">
    <div
      class="max-w-1180 px-16 md:px-30 pt-16 pb-32 md:py-32 mx-auto md:items-center flex-col md:flex-row"
    >
      <div class="flex flex-col mr-0 md:mr-40">
        <p class="font-bold text-secondary mb-8 leading-normal">
          {{ duration }} hours
        </p>
        <h1
          class="font-bold text-terciary text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm mb-15 md:mb-0"
        >
          {{ name }}
        </h1>
      </div>
      <div class="flex items-center flex-shrink-0 mt-20">
        <app-rate
          :rate="reviewAverage"
          :reviews="reviewsLength"
          class="text-grey-400 text-mobile-h3 leading-normal items-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppRate from "@/components/shared/AppRate";
export default {
  name: "TourHeader",
  components: {
    AppRate,
  },
  props: {
    duration: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    reviewAverage: {
      type: Number,
      default: () => 0,
    },
    reviewsLength: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>