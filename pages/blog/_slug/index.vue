<template>
  <div v-if="blogs" class="blog-article mx-auto">
    <blog-header :media-url="mediaUrl" :blog="blogs[0]" />
    <blog-content :blog="blogs[0]" />

    <div
      v-if="products"
      class="max-w-1180 md:pl-30 md:pr-30 mx-auto mb-40 sm:mb-72"
    >
      <h2
        class="text-mobile-h3 2lg:text-desktop-h2 text-terciary font-bold pl-16 2lg:pl-0 2lg:text-center mb-32 pr-16 md:pr-0"
      >
        Feature Experiences
      </h2>
      <div class="overflow-x-auto overflow-y-hidden">
        <div class="cards-scroll mx-16 md:mx-0 inline-block">
          <div
            class="tour-card-inner justify-between lg:justify-start flex flex-wrap"
          >
            <!-- Tour card -->
            <tour-card
              v-for="(tourCardItem, index) in products.slice(0, 4)"
              :key="index"
              :tour-card-item="tourCardItem"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="blogs[0] && blogs[0].relatedArticles.length" class="bg-grey-700">
      <div
        class="max-w-1180 w-full px-16 md:px-30 mx-auto pt-32 pb-56 sm:py-48"
      >
        <h2
          class="text-mobile-h2 2lg:text-desktop-h2 text-terciary font-bold text-center mb-32 2lg:mb-48"
        >
          Related Articles
        </h2>
        <div class="related-articles overflow-x-auto overflow-y-hidden">
          <div
            v-for="(article, index) in blogs[0].relatedArticles"
            :key="index"
          >
            <a :href="article.slug">
              <img
                :src="
                  `${imageUrl}${article.headerImage.desktopUrl.trim()}` ||
                  require(`@/static/img/no-image.png`)
                "
                :alt="article.headerImage.altText || 'guides photo'"
                class="w-full h-144 md:h-240 rounded-8 mb-16 object-cover"
              />
              <p
                class="text-mobile-h2 sm:text-desktop-h2 leading-5sm sm:leading-2sm text-terciary font-bold mb-16"
              >
                {{ article.title }}
              </p>
              <p
                class="text-grey-400 text-desktop-body leading-normal mb-16 sm:mb-8"
              >
                {{ article.snippet }}
              </p>
              <p class="text-secondary text-desktop-body leading-normal">
                {{ new Date(article.updatedAt) | formatDate }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import SubscribeNewsletter from '@/components/pages/SubscribeNewsletter'
import TourCard from "@/components/shared/TourCard";
import BlogHeader from "@/components/pages/blog/BlogHeader";
import BlogContent from "@/components/pages/blog/BlogContent";
import { blogBySlug } from "@/api/queries/blogs";
import { products } from "@/api/queries/product";
export default {
  name: "BlogArticlePage",
  components: {
    // SubscribeNewsletter,
    TourCard,
    BlogHeader,
    BlogContent,
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogBySlug,
      variables() {
        return { slug: this.slug };
      },
    },
    products: {
      prefetch: true,
      query: products,
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    ...mapState({ mediaUrl: (state) => state.mediaUrl }),
    imageUrl() {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`;
      } else {
        return `${this.mediaUrl}t_desktop/`;
      }
    },
  },
  created() {
    console.log("Hello Router", this.$route);
  },
  head() {
    return {
      title: this.blog ? this.blog.title : "Blog Article",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.blog ? this.blog.subTitle : "",
        },
      ],
      link: this.blog && [
        {
          rel: "canonical",
          href: `https://seesight-tours.com/blog/${this.blog.slug}`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.blog-article {
  .back-container {
    .icon-arrow-bold {
      transform: rotate(180deg);
    }
  }
  .icon-arrow-filled {
    transform: rotate(-56deg);
    font-size: 6px;
  }
  .icon-triangle {
    font-size: 8px;
    top: 4px;
  }
}
.related-articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
}
@media (max-width: 992px) {
  .related-articles {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 32px;
  }
}
</style>