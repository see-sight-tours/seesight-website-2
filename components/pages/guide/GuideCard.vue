<template>
  <div
    class="h-full bg-cover rounded-8 bg-center"
    :style="{ backgroundImage: backgroundUrl}"
  >
    <div class="guide-item__desc relative z-10 w-full h-full font-bold flex items-center flex-col justify-end rounded-8">
      <p class="text-white pb-16 lg:pb-28 2lg:pb-32 text-desktop-h2 leading-2sm">{{ firstName }}</p>
      <p class="text-secondary pb-26 lg-pb-32 2lg:pb-48 text-desktop-h3 leading-5sm">Know more</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundUrl: String,
    firstName: String
  }
}
</script>

<style lang="scss" scoped>
</style>