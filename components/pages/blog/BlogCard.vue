<template>
  <nuxt-link :to="`/blog/${article.slug}`">
    <img
      :src="`${imageUrl}${article.headerImage.desktopUrl.trim()}`"
      alt="article"
      class="object-cover h-full w-full rounded-8 max-h-145 sm:max-h-176"
    />
    <div class="pr-26">
      <p
        class="text-secondary text-mobile-body md:text-desktop-h3 mb-16 sm:mb-8 mt-16"
      >
        {{ "" }}
      </p>
      <h3
        class="text-terciary text-mobile-h2 font-bold mb-5 md:text-desktop-h2"
      >
        {{ article.title }}
      </h3>
      <p class="md:text-desktop-body text-grey-40 mb-5">
        
        {{ `${new Date(article.updatedAt)}`.split(" ").splice(1, 3).join(" ") | formatDate }}
      </p>
      <p class="mb-16 md:text-desktop-body text-grey-400">
        {{ article.snippet }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    article: Object,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
</style>