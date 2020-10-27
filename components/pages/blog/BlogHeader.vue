<template>
  <div
    v-if="blog"
    class="bg-cover bg-center bg-no-repeat pt-24 pb-16 md:pb-40 px-16"
    :style="{
      backgroundImage: `url(${mediaUrl}t_header/${blog.headerImage.desktopUrl.trim()})`,
    }"
  >
    <div class="back-container max-w-1120 mx-auto">
      <div
        class="flex items-center text-white md:text-desktop-h3 pb-16 md:leading-5sm"
      >
        <nuxt-link to="/blog" tag="a" class="flex items-center">
          <span class="icon-arrow-bold text-desktop-note mr-5" />
          <span class="font-bold">Back</span>
        </nuxt-link>
      </div>
      <div class="flex flex-col items-center justify-center 2lg:px-98">
        <div
          v-if="blog.categories.length"
          class="flex flex-col 2lg:flex-row items-center justify-end md:text-desktop-h3 md:leading-5sm mb-16 md:mb-8"
        >
          <span class="text-white pr-16 font-bold">{{
            blog.categories[0].title
          }}</span>
          <span class="text-white leading-1sm">{{
            new Date(blog.updatedAt) | formatDate
          }}</span>
        </div>
        <h1
          class="text-mobile-hero md:text-desktop-hero text-white font-bold leading-7sm mb-8 text-center"
        >
          {{ blog.title }}
        </h1>
        <h2
          class="text-mobile-h3 leading-3sm md:text-desktop-h3 text-white md:leading-5sm mb-16 md:mb-40 text-center"
        >
          {{ blog.subTitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaUrl: String,
    blog: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>