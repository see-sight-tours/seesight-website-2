<template>
  <div class="pt-27 pb-24 md:py-64" :class="[bgColor]">
    <div
      class="max-w-1180 w-full px-16 md:px-30 mx-auto flex flex-col md:flex-row"
    >
      <h2
        class="max-w-full md:max-w-290 w-full font-bold text-terciary text-mobile-h2 md:text-desktop-h1 mb-16 md:mb-0 mr-0 md:mr-35"
      >
        {{ title }}
      </h2>
      <div class="max-w-792 flex flex-col">
        <div class="expandable-wrap" :class="{ 'is-active': isOpened }">
          <p
            v-if="!isOpened"
            class="expandable-text text-grey-400 md:text-terciary text-mobile-body md:text-desktop-body max-h-188 sm:max-h-118 overflow-y-hidden"
          >
            <vue-markdown
              >{{ shortDescription }}
              {{ longDescription }}
            </vue-markdown>
          </p>
          <p
            v-else
            class="expandable-text text-grey-400 md:text-terciary text-mobile-body md:text-desktop-body max-h-188 sm:max-h-118 overflow-y-hidden"
          >
            <vue-markdown
              >{{ shortDescription }}
              {{ longDescription }}
            </vue-markdown>
          </p>
          <div class="mt-8">
            <button
              class="font-bold text-secondary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm"
              @click="isOpened = !isOpened"
            >
              {{ isOpened ? "See Less" : "See More" }}
            </button>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "AboutInfo",
  components: {
    VueMarkdown,
  },
  props: {
    bgColor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      default: () => "",
    },
    longDescription: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
};
</script>

<style lang="scss">
.expandable-wrap {
  &.is-active {
    .expandable-text {
      max-height: max-content;
    }
  }
}
</style>