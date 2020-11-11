<template>
  <div class="blog">
    <!-- Hero -->
    <hero
      :title="blogPage && blogPage.headerTitle"
      :text="blogPage && blogPage.subHeader"
      :image="blogPage && blogPage.headerImage"
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-48"
      custom-class-location="mt-24 md:mt-80"
    />

    <div
      v-if="blogs"
      class="flex flex-col pb-24 md:pb-48 max-w-1180 mx-auto px-16 sm:px-30"
    >
      <!-- Tags -->
      <tags
        :tags.sync="categories"
        class="pt-20 md:pt-40 mb-20 md:mb-40"
        @changeTab="changeTab"
      />

      <div
        v-if="blogs && blogs.length"
        class="article-information flex flex-wrap mx-auto pt-4 sm:pt-20 justify-between"
      >
        <blog-main-card :blogs="orderedBlogs" :image-url="imageUrl" />
        <div class="blog__card-wrap flex flex-wrap" ref="cardsContainer">
          <div
            v-for="(article, index) in orderedBlogs.slice(
              0,
              this.numberOfCards
            )"
            :key="index"
            class="relative cursor-pointer"
            @click="activeIndex = index"
          >
            <blog-card :article="article" :image-url="imageUrl" />
          </div>
        </div>
      </div>
      <app-button
        v-if="blogs.length > 6"
        type="arrow"
        class="flex self-end items-center text-secondary text-mobile-h3 sm:text-desktop-h3 mt-24 sm:mt-48"
      >
        <span v-if="!areAllCardsDisplayed" @click="changeNumberOfCards"
          >Load more</span
        >
        <span
          v-if="!areAllCardsDisplayed"
          class="pl-8 icon-arrow-bold block text-mobile-note"
        />
        <span v-else @click="resetNumberOfCards">Show Less</span>
      </app-button>
    </div>

    <!-- Subscribe newsletter -->
    <subscribe-newsletter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/pages/Hero";
// import SubscribeNewsletter from "@/components/pages/SubscribeNewsletter";
import Tags from "@/components/shared/Tags";
import AppButton from "@/components/shared/AppButton";
import BlogCard from "@/components/pages/blog/BlogCard";
import BlogMainCard from "@/components/pages/blog/BlogMainCard";
import { blogs, blogPage } from "@/api/queries/blogs";
export default {
  name: "BlogPage",
  components: {
    Hero,
    // SubscribeNewsletter,
    Tags,
    AppButton,
    BlogCard,
    BlogMainCard,
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogs,
    },
    blogPage: {
      prefetch: true,
      query: blogPage
    }
  },
  data() {
    return {
      isOpenMoreInfo: false,
      numberOfCards: 6,
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
    orderedBlogs() {
      return this.blogs
        .slice()
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    },
    areAllCardsDisplayed() {
      if (this.numberOfCards >= this.blogs.length) {
        return true;
      }
      return false;
    },
  },
  methods: {
    // Will be finished when we get API
    changeTab({ index }) {
      for (const item of this.categories) {
        item.active = false;
      }
      this.categories[index].active = true;
      const variables = this.categories[index].id
        ? { categoryID: this.categories[index].id }
        : null;
      this.$apollo
        .query({ query: blogs, variables })
        .then(({ data }) => {
          this.blogs = data.blogs;
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
    changeNumberOfCards() {
      const cardsContainer = this.$refs.cardsContainer;
      this.numberOfCards += 3;
      cardsContainer.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
    resetNumberOfCards() {
      const cardsContainer = this.$refs.cardsContainer;
      this.numberOfCards = 6;
      cardsContainer.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
  },
  head() {
    return {
      title: this.getSiteInfo ? this.getSiteInfo.blogTitle : "Blog",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.getSiteInfo ? this.getSiteInfo.blogMetaDescription : "",
        },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/blog" }],
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .blog__card-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 32px;
  }
}
</style>