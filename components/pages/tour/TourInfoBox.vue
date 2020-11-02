<template>
  <div
    class="bg-white shadow w-full lg:w-2/5 ml-0 lg:ml-20 lg:h-470 p-20 light-border rounded"
  >
    <h3 class="font-bold text-desktop-h2 tracking-wider">Overview</h3>
    <p
      v-if="productBySlug.shortDescription"
      class="text-desktop-h5 mb-20 cursor-pointer"
      @click="triggerModal"
    >
      {{ shortDescription }}
    </p>
    <div class="flex mt-10 mb-20 items-center h-20">
      <img
        src="../../../assets/images/svg/money.svg"
        class="w-20"
        alt="Money icon"
      />
      <p class="ml-15 text-desktop-h5">
        Price: ${{ productBySlug.defaultPrice }}/adult
      </p>
    </div>
    <div
      v-if="productBySlug.duration"
      class="flex mt-10 mb-20 items-center h-20"
    >
      <img
        src="../../../assets/images/svg/clock.svg"
        class="w-20"
        alt="Money icon"
      />
      <p class="ml-15 text-desktop-h5">
        Duration: {{ productBySlug.duration.toLowerCase() }}
      </p>
    </div>
    <div
      v-if="productBySlug.reviewAverage"
      class="flex mt-10 mb-30 items-center h-20"
    >
      <img
        src="../../../assets/images/svg/starblack.svg"
        class="w-20"
        alt="Money icon"
      />
      <p class="ml-15 text-desktop-h5">
        Reviews: {{ productBySlug.reviewAverage.toFixed(1) }}/5
      </p>
    </div>
    <a
      id="button-booking"
      class="button-booking rezdy rezdy-modal text-center bg-primary w-full mt-40 px-72 py-10 rounded text-white font-bold"
      :href="`https://seesight-tours.rezdy.com/${productBySlug.bokunWidgetNumber}`"
    >
      Book Now
    </a>
    <p class="text-desktop-note mt-10">
      Booked by <span class="font-bold text-primary">2410</span> people
    </p>
    <p class="mt-20 text-desktop-h6">
      Our tours follow the best COVID precautions. Masks will we provided on
      tour and social distancing will be respected.
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    productBySlug: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortDescription() {
      const wordLength = this.productBySlug.shortDescription.split(" ").length;
      if (wordLength > 40) {
        return (
          this.productBySlug.shortDescription
            .split(" ")
            .splice(0, 40)
            .join(" ") + " ... more"
        );
      } else {
        return this.productBySlug.shortDescription;
      }
    },
  },
  methods: {
    ...mapMutations({
      setIsModalOpen: "setIsModalOpen",
      setModalName: "setModalName",
      setModalText: "setModalText",
    }),
    triggerModal() {
      this.setIsModalOpen(true);
      this.setModalName("trustMessage");
      this.setModalText(this.productBySlug.shortDescription);
    },
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.24);
}
</style>