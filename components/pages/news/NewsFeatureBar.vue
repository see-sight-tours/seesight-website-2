<template>
  <div class="w-3/4 mx-auto">
    <h5 class="text-desktop-h5 text-center opacity-75">As Featured in</h5>
    <div class="flex justify-center md:justify-around flex-wrap items-center mt-20 opacity-75">
      <img v-for="(logo, index) in logos" :key="index" :src="`${mediaUrl}t_thumbnail/${logo.desktopUrl.trim()}`" :alt="logo.altText" class="w-160 mb-40 sm:mx-20 mx-30">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      default: () => []
    },
    mediaUrl: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>