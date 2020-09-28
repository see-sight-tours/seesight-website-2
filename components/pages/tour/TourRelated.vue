  
<template>
  <div
    class="tour-related bg-grey-700 flex flex-col pt-32 md:pt-56 pb-32 md:pb-72"
  >
    <div class="max-w-1180 w-full pl-16 pr-0 md:px-30 mx-auto">
      <h2
        class="text-mobile-h1 md:text-desktop-h2 leading-4sm md:leading-2sm text-terciary font-bold mb-32 md:mb-40 pr-16 md:pr-0"
      >
        You also may be interested in
      </h2>
      <div class="overflow-x-auto overflow-y-hidden">
        <div class="cards-scroll inline-block mr-16 lg:mx-0">
          <div
            class="tour-card-inner flex flex-wrap justify-between lg:justify-start"
          >
            <tour-card
              v-for="(tourCardItem, index) in relatedProducts"
              :key="index"
              :tour-card-item="tourCardItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "@/components/shared/TourCard";
export default {
  name: "TourRelated",
  components: {
    TourCard,
  },
  props: {
    relatedProducts: {
      type: Array,
      required: true,
    },
  },
};
</script>