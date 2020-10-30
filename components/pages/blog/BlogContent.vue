  
<template>
  <div
    v-if="blog"
    class="max-w-1180 flex flex-col 2lg:flex-row mx-auto px-16 pt-24 2lg:pt-48 2lg:mb-40"
  >
    <div
      class="flex 2lg:flex-col pt-0 pb-24 sm:py-28 2lg:pr-120 2lg:py-0 w-full 2lg:max-w-1/44"
    >
      <span
        class="text-mobile-body 2lg:text-desktop-h6 text-terciary 2lg:mb-24 mr-16 2lg:mr-0"
        >Share</span
      >
      <ShareNetwork
        network="twitter"
        :url="`https://seesight-tours.com${$route.path}`"
        :title="blog.title"
        hashtags="SeeSightTours"
      >
        <button
          target="blank"
          class="icon-TWITTER text-mobile-h2 text-grey-40 mr-32 2lg:mr-0 2lg:mb-15"
        />
      </ShareNetwork>
      <ShareNetwork
        network="facebook"
        :url="`https://seesight-tours.com${$route.path}`"
        :quote="blog.title"
      >
        <button
          target="blank"
          class="icon-FACEBOOK text-mobile-h2 text-grey-40 mr-32 2lg:mr-0 2lg:mb-15"
        />
      </ShareNetwork>
    </div>
    <div class="mb-24 2lg:mb-0 w-full 2lg:max-w-3/48">
      <h1
        class="text-mobile-h1 leading-4sm 2lg:text-desktop-h1 text-terciary font-bold mb-8"
      >
        {{ blog.title }}
      </h1>
      <h3 class="text-mobile-h2 2lg:text-desktop-h2 text-grey-400">
        {{ blog.subTitle }}
      </h3>
      <!-- <span class="text-grey-100 leading-1sm"
        >{{ new Date(blog.createdAt) | formatDate }} |
        {{ blog.author | "See Sight Tours" }}</span
      > -->
      <vue-markdown
        class="text-mobile-h3 2lg:text-desktop-h3 text-terciary mt-25"
        >{{ blog.content }}</vue-markdown
      >
    </div>
    <div
      v-if="blog && blog.relatedArticles.length"
      class="flex flex-col justify-around"
    >
      <related-story
        :related-story="
          blog.relatedArticles[
            Math.floor(Math.random() * blog.relatedArticles.length)
          ]
        "
      />
      <related-story
        :related-story="
          blog.relatedArticles[
            Math.floor(Math.random() * blog.relatedArticles.length)
          ]
        "
      />
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown,
  },
  props: {
    blog: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>