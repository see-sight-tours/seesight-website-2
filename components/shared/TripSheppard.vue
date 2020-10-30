<template>
  <div
    class="flex justify-between items-start sm:items-center flex-col md:flex-row max-w-1160 px-16 md:px-30 pt-32 md:py-64 w-full mx-auto"
    v-if="partnersPage"
  >
    <div class="max-w-288 sm:max-w-592 w-full h-177 sm:h-361 mb-23 md:mb-0">
      <img
        v-if="partnersPage.headerImage"
        :src="
          `${imageUrl}${partnersPage.headerImage.desktopUrl.trim()}` ||
            require(`@/static/img/no-image.png`)
        "
        :alt="partnersPage.headerImage.altText || 'trip-shepherd'"
        class="object-cover h-full w-full rounded-8"
      />
    </div>
    <div
      class="flex flex-col items-start max-w-592 md:max-w-440 w-full ml-0 mb-32 sm:mb-40 md:ml-20"
    >
      <h5
        class="text-mobile-body md:text-desktop-h3 leading-1sm sm:leading-5sm text-secondary mb-8"
      >
        Trip Shepherd
      </h5>
      <h2
        class="text-mobile-h1 sm:text-desktop-h1 text-terciary font-bold leading-4sm sm:leading-3sm mb-16"
      >
        Trip Shepherd
      </h2>
      <p
        class="text-mobile-h3 sm:text-desktop-h3 leading-3sm leading-5sm text-grey-400 mb-16 sm:mb-24"
      >
        We can help you plan the perfect trip, our local expertise from the
        comfort of your home
      </p>
      <nuxt-link to="/trip-shepherd">
        <app-button
          class="px-48 py-750 sm:px-40 sm:py-9 text-mobile-h3 sm:text-desktop-h3 rounded-8"
          type="default"
        >
          Find out more
        </app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapState } from "vuex";
import { partnersPage } from "@/api/queries/partner"
import AppButton from "@/components/shared/AppButton";
export default {
  name: "TripSheppard",
  components: { AppButton },
  apollo: {
    partnersPage: {
      prefetch: true,
      query: partnersPage
    }
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl }),
    imageUrl() {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`;
      } else {
        return `${this.mediaUrl}t_desktop/`;
      }
    }
  }
};
</script>
