<template>
  <div>
    <div
      class="itinerary-tab-container py-15 cursor-pointer flex"
      @click="isOpen = !isOpen"
    >
      <h5 class="font-bold mr-15">Day {{ index + 1 }}:</h5>
      <h5 class="font-bold">{{ item.title }}</h5>
      <img class="w-16 ml-auto" :src="isOpen ? arrowRight : arrowDown" alt="" />
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="flex pt-30">
      <img
        v-if="item.images[0]"
        class="rounded mr-20 w-225"
        :src="item.images[0].desktopUrl"
        alt=""
      />
      <p>{{ item.snippet }}</p>
    </div>
  </div>
</template>

<script>
import arrowDown from "@/assets/images/svg/down-arrow.svg";
import arrowRight from "@/assets/images/svg/right-arrow.svg";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    arrowDown() {
      return arrowDown;
    },
    arrowRight() {
      return arrowRight;
    },
  },
};
</script>

<style lang="scss" scoped>
.itinerary-tab-container {
  border-bottom: 0.075rem solid #a7a9ac70;
}
</style>