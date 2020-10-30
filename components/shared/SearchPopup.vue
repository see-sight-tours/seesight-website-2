<template>
  <div
    class="fixed top-48 lg:top-80 left-0 overflow-y-auto font-bold px-16 md:px-30 md:pt-24 pt-16 pb-8 md:pb-64 h-87 w-full shadow-100 bg-white z-40"
  >
    <div class="max-w-1120 mx-auto text-terciary">
      <app-button
        type="arrow"
        class="flex items-center text-secondary cursor-pointer"
        @click.native="$emit('update:isSearchPopupOpen', false)"
      >
        <span
          class="icon-arrow-bold rotate-180 text-mobile-note leading-default mr-8"
        />
        <span class="leading-default">Back</span>
      </app-button>

      <!-- Find your city -->
      <div
        class="pt-16 md:pt-48 pb-35 md:pb-0 flex justify-between flex-col lg:flex-row items-start"
      >
        <h2
          class="text-terciary text-mobile-h2 md:text-desktop-h1 font-bold text-left lg:max-w-264 w-full mr-0 lg:mr-105 mb-16 lg:mb-0"
        >
          Find your city
        </h2>
        <div class="discover-cities__card-wrap max-w-800 w-full">
          <div v-for="(city, index) in cities" :key="index">
            <nuxt-link
              :to="`/${city.slug}`"
              @click.native="$emit('update:isSearchPopupOpen', false)"
            >
              <div class="w-full h-104 mb-16">
                <img
                  v-if="city.featureImages && city.featureImages[0]"
                  :src="
                    `${mediaUrl}t_thumbnail/${city.featureImages[0].desktopUrl.trim()}` ||
                      require(`@/static/img/no-image.png`)
                  "
                  alt="discover city"
                  class="object-cover h-full w-full rounded-8"
                />
                <img
                  v-else
                  :src="require(`@/static/img/no-image.png`)"
                  alt="discover city"
                  class="object-cover h-full w-full rounded-8"
                />
              </div>
            </nuxt-link>
            <p class="text-mobile-h3 md:text-desktop-h3">{{ city.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { cities } from "@/api/queries/cities";
import AppButton from "@/components/shared/AppButton";
export default {
  name: "SearchPopup",
  components: { AppButton },
  props: {
    isSearchPopupOpen: {
      type: Boolean,
      required: true
    }
  },
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl })
  },
  methods: {
    goTo(route) {
      this.$emit("update:isSearchPopupOpen", false);
      this.$router.push(route);
    }
  }
};
</script>

<style lang="css" scoped>
.what-are-you-looking-for {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
.discover-cities__card-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 48px;
}
</style>
