<template>
  <div class="bg-primary md:h-408 h-312">
    <div class="w-full h-full relative">
      <div class="absolute h-full w-full bg-blackOverlay" />
      <img
        class="h-full w-full absolute"
        :src="`${mediaUrl}t_thumbnail/${image.desktopUrl.trim()}`"
        alt="Niagara"
      >
      <div class="header-text-container absolute top-1/3 left-3/20">
        <h1 class="text-mobile-h1 md:text-desktop-hero text-white font-bold leading-7sm mb-0">{{ title }}</h1>
        <h2 class="text-mobile-h3 md:text-desktop-h3 text-white leading-5sm mt-8 mb-0">{{ subTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    subTitle: {
      type: String,
      default: () => ''
    },
    image: {
      type: Object,
      default: () => {}
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