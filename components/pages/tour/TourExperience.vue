<template>
  <div class="max-w-1180 w-full px-16 md:px-30 mx-auto mb-30">
    <div class="w-3/4">
      <h3 class="font-bold my-30 tracking-wider">Places you'll see</h3>
      <div class="carousel flex flex-wrap cursor-pointer">
        <nuxt-link
          v-for="(item, index) in items"
          :key="index"
          class="w-3/10 mr-20 mb-20"
          :to="`/${item.city.slug}/${item.slug}`"
        >
          <img
            class="w-full h-168 rounded"
            :src="`${mediaUrl}t_desktop/${item.images[0].desktopUrl.trim()}`"
            alt=""
          />
          <h5 class="text-desktop-h4 font-bold mt-10">{{ item.name }}</h5>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import locationMarker from "@/assets/images/svg/map.svg";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      imageUrl: "",
      attractionName: "",
      attractionSnippet: "",
    };
  },
  computed: {
    ...mapState({
      mediaUrl: (state) => state.mediaUrl,
    }),
    locationMarker() {
      return locationMarker;
    },
  },
  created() {
    this.imageUrl = this.items[0].images[0].desktopUrl.trim();
    this.attractionName = this.items[0].name;
    this.attractionSnippet = this.items[0].snippet;
  },
  methods: {
    changeAttraction(item) {
      this.imageUrl = item.images[0].desktopUrl.trim();
      this.attractionName = item.name;
      this.attractionSnippet = item.snippet;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>