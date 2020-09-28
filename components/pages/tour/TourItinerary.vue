<template>
  <div class="max-w-1180 w-full px-16 md:px-30 mx-auto">
    <h3 class="font-bold mb-30 tracking-wider">Itinerary</h3>
    <div class="itinerary-container w-3/4">
      <tour-itinerary-tab
        v-for="(item, index) in itinerary"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import TourItineraryTab from "@/components/pages/tour/TourItineraryTab";
export default {
  components: {
    TourItineraryTab,
  },
  props: {
    itinerary: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>