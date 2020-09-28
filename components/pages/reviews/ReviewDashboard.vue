<template>
  <div class="max-w-1440 mx-auto py-40 md:py-72 w-full sm:w-5/6 lg:w-1/3">
    <div class="w-full flex-col md:flex lg:flex-col items-center">
      <div class="header w-full flex items-center py-15 mr-10">
        <h4 class="average text-desktop-hero-larger mr-20 font-bold">
          4.76
        </h4>
        <div class="lg:block h-74">
          <app-rate rate="4.5" star-size="desktop-h5" star-color="black" />
          <p class="mt-10 text-mobile-h3 md:text-desktop-h4 lg:block">
            <span class="font-bold">3465</span> Reviews
          </p>
        </div>
      </div>
      <div class="breakdown-container w-full">
        <h3 class="font-bold mt-10 mb-10">Rating Breakdown</h3>
        <div class="bars-container">
          <div class="flex items-center">
            <h4 class="text-mobile-h5 font-bold mt-5 w-1/5">5 Stars</h4>
            <div class="bar-container h-4 w-full bg-black">
              <div class="h-4 bg-secondary" style="width: 85%" />
            </div>
          </div>
          <div class="flex items-center">
            <h4 class="text-mobile-h5 font-bold mt-5 w-1/5">4 Stars</h4>
            <div class="bar-container h-4 w-full bg-black">
              <div class="h-4 bg-secondary" style="width: 10%" />
            </div>
          </div>
          <div class="flex items-center">
            <h4 class="text-mobile-h5 font-bold mt-5 w-1/5">3 Stars</h4>
            <div class="bar-container h-4 w-full bg-black">
              <div class="h-4 bg-secondary" style="width: 2.5%" />
            </div>
          </div>
          <div class="flex items-center">
            <h4 class="text-mobile-h5 font-bold mt-5 w-1/5">2 Stars</h4>
            <div class="bar-container h-4 w-full bg-black">
              <div class="h-4 bg-secondary" style="width: 1%" />
            </div>
          </div>
          <div class="flex items-center">
            <h4 class="text-mobile-h5 font-bold mt-5 w-1/5">1 Stars</h4>
            <div class="bar-container h-4 w-full bg-black">
              <div class="h-4 bg-secondary" style="width: 1.5%" />
            </div>
          </div>
        </div>
      </div>
      <div class="breakdown-container w-full mt-40 hidden lg:block">
        <h3 class="font-bold mt-10 mb-10">Filter by Location</h3>
        <select
          class="mt-10 w-3/4 cursor-pointer"
          @change="updateReviewLocation"
        >
          <option value="">Any Location</option>
          <option value="&location_id=83eb109c-947d-49f1-b201-c22ef70d623a">
            Toronto
          </option>
          <option value="&location_id=d48cd59b-f416-456e-88a5-1ed9ec4edb66">
            Ottawa
          </option>
        </select>
      </div>
      <!-- <div class="breakdown-container w-full mt-40 hidden lg:block">
        <h3 class="font-bold mt-10 mb-10">Filter by Product</h3>
        <select
          class="mt-10 w-3/4 cursor-pointer"
          @change="updateReviewLocation"
        >
          <option value="">Any Product</option>
          <option value="83eb109c-947d-49f1-b201-c22ef70d623a">Toronto</option>
          <option value="d48cd59b-f416-456e-88a5-1ed9ec4edb66">Ottawa</option>
        </select>
      </div> -->
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import AppRate from '@/components/shared/AppRate'
export default {
  computed: {
    ...mapState({ reviewLocation: state => state.reviewLocation })
  },
  methods: {
    ...mapMutations({
      setReviewLocation: 'setReviewLocation'
    }),
    updateReviewLocation (e) {
      this.setReviewLocation(e.target.value)
    }
  },
  components: {
    AppRate
  }
}
</script>
<style lang="scss" scoped></style>