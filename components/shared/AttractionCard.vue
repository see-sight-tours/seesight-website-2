<template>
  <div class="sm:flex mr-32 last:mr-0">
    <div v-if="cardType === 'addOns'" class="sm:flex mr-32 last:mr-0">
      <nuxt-link
        v-for="(item, index) in addOns"
        :key="index"
        :to="`/${item.attraction.city.slug}/${item.attraction.slug}`"
        class="sm:flex flex-col min-w-248 max-w-248 mr-32 last:mr-0"
      >
        <div class="h-240 mb-16 relative">
          <img
            :src="
              `${mediaUrl}t_desktop/${item.attraction.images[0].desktopUrl.trim()}` ||
              require(`@/static/img/no-image.png`)
            "
            :alt="item.attraction.images[0].altText || 'attraction image'"
            class="h-full w-full object-cover rounded-8"
          />
          <h4
            class="absolute top-0 right-0 text-desktop-h5 bg-primary rounded-tr-8 rounded-bl-8 p-5 font-bold text-white"
          >
            Optional Add-On
          </h4>
        </div>
        <h3
          class="text-desktop-h2 leading-2sm font-bold mb-16"
          :class="[textColorClass]"
        >
          {{ item.attraction.name }}
        </h3>
        <p
          class="text-desktop-h5 leading-normal mb-16"
          :class="[textColorClass]"
        >
          {{ shortenDescription(item.attraction.snippet) }}
        </p>
        <div class="mt-auto">
          <app-button
            type="arrow"
            class="flex items-center"
            :class="[linkColorClass]"
          >
            <span class="leading-5sm text-desktop-h3 font-bold">See more</span>
            <span
              class="icon-arrow-bold text-desktop-note leading-default rotote-0 ml-8"
            />
          </app-button>
        </div>
      </nuxt-link>
    </div>
    <div v-if="cardType === 'attraction'" class="sm:flex mr-32 last:mr-0">
      <nuxt-link
        v-for="(item, index) in items"
        :key="index"
        :to="`/${item.city.slug}/${item.slug}`"
        class="sm:flex flex-col min-w-248 max-w-248 mr-32 last:mr-0"
      >
        <div class="h-240 mb-16">
          <img
            :src="
              `${mediaUrl}t_desktop/${item.images[0].desktopUrl.trim()}` ||
              require(`@/static/img/no-image.png`)
            "
            :alt="item.images[0].altText || 'attraction image'"
            class="h-full w-full object-cover rounded-8"
          />
        </div>
        <h3
          class="text-desktop-h2 leading-2sm font-bold mb-16"
          :class="[textColorClass]"
        >
          {{ item.name }}
        </h3>
        <p
          class="text-desktop-h5 leading-normal mb-16"
          :class="[textColorClass]"
        >
          {{ shortenDescription(item.snippet) }}
        </p>
        <div class="mt-auto">
          <app-button
            type="arrow"
            class="flex items-center"
            :class="[linkColorClass]"
          >
            <span class="leading-5sm text-desktop-h3 font-bold">See more</span>
            <span
              class="icon-arrow-bold text-desktop-note leading-default rotote-0 ml-8"
            />
          </app-button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared/AppButton";
export default {
  components: {
    AppButton,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    addOns: {
      type: Array,
      default: () => [],
    },
    mediaUrl: {
      type: String,
      default: () => String,
    },
    textColorClass: {
      type: String,
      default: () => String,
    },
    linkColorClass: {
      type: String,
      default: () => String,
    },
    cardType: {
      type: String,
      default: () => String,
    },
  },
  methods: {
    shortenDescription(snippet) {
      return snippet.split("").splice(0, 80).join("") + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>