<template>
  <nuxt-link
    :to="`/blog/${blogs[0].slug}`"
    class="more-information relative flex flex-col sm:flex-row md:max-h-320 mb-24 sm:mb-48"
  >
    <img
      :src="`${imageUrl}${blogs[0].headerImage.desktopUrl.trim()}`"
      alt="article"
      class="object-cover h-full w-full rounded-8 max-h-160 sm:max-h-full sm:max-w-320 2lg:max-w-560 flex-shrink-0"
    />
    <div class="sm:pl-16 md:pl-32 overflow-y-auto">
      <h3
        class="text-terciary text-mobile-h1 font-bold sm:text-desktop-h1 mb-8 sm:mb-16"
      >
        {{ blogs[0].title }}
      </h3>
      <p class="sm:text-desktop-body text-grey-40 text-mobile-body mb-16">
        {{ `${new Date(blogs[0].updatedAt)}`.split(" ").splice(1, 3).join(" ") | formatDate }}
      </p>
      <p
        class="mb-16 sm:text-desktop-body text-mobole-body text-grey-400 mb-16"
      >
        {{ blogs[0].snippet }}
      </p>
      <app-button
        type="arrow"
        class="flex items-center text-secondary text-mobile-h3 sm:text-desktop-h3"
      >
        <span>See Article</span>
        <span class="pl-8 icon-arrow-bold block text-mobile-note" />
      </app-button>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blogs: Array,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
</style>