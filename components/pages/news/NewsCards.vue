<template>
    <div class="mt-60 w-3/4 mx-auto">
        <h2 class="w-full sm:w-auto text-mobile-h2 md:text-desktop-h2 text-terciary font-bold leading-2sm px-16 md:px-0 mb-0">News</h2>
        <!-- News Article Containers -->
        <div class="cards-container flex flex-wrap">
            <a
                v-for="(article, index) in articles.slice(0, numberOfArticleCards)"
                :key="index"
                :href="article.articleUrl"
                target='_blank'
                class="card-container p-20 w-9/10 md:w-24/50 2lg:w-31/100 rounded cursor-pointer py-20 shadow-200 mt-30"
            >
                <!-- <img
                  v-if="article.cardImage"
                  :src="`${mediaUrl}t_thumbnail/${article.cardImage.desktopUrl.trim()}`"
                  :alt="article.cardImage.altText"
                  class="w-95/100 mx-auto p-20 h-100 w-full rounded-8 max-h-160 sm:max-h-full sm:max-w-320 2lg:max-w-560 flex-shrink-0 mb-13"
                > -->
                <h4 class="text-terciary text-mobile-h4 lg:text-mobile-h4 font-bold mb-5 sm:mb-16 md:text-desktop-h4">{{article.title}}</h4>
                <p class="md:text-desktop-body text-grey-40">{{article.date}}</p>
                <p class="mb-5 sm:mb-20 lg:mb-16 md:text-desktop-body text-grey-400 h-72 lg:h-56 overflow-auto">{{article.shortDescription}}</p>
            </a>
        </div>
        <app-button
            type="arrow"
            class="flex self-end items-center text-secondary text-mobile-h3 sm:text-desktop-h3 mt-24 sm:mt-48 ml-auto"
          >
        </app-button>
        <!-- Press Release Containers -->
        <h2 class="w-full sm:w-auto text-mobile-h2 md:text-desktop-h2 text-terciary font-bold leading-2sm px-16 md:px-0 mb-0 mt-50">Press Release</h2>
        <div class="cards-container flex flex-wrap mr-20">
            <div
                v-for="(press, index) in pressReleases.slice(0, numberOfPressCards)"
                :key="index"
                @click="changeRoute(press.slug)"
                class="card-container p-20 w-9/10 md:w-24/50 2lg:w-31/100 rounded cursor-pointer py-20 shadow-200 mt-30"
            >
                <!-- <img
                  v-if="press.cardImage"
                  :src="`${mediaUrl}t_thumbnail/${press.cardImage.desktopUrl.trim()}`"
                  :alt="press.cardImage.altText"
                  class="w-72 mx-auto p-20 h-128 w-full rounded-8 max-h-160 sm:max-h-full sm:max-w-320 2lg:max-w-560 flex-shrink-0 mb-13"
                > -->
                <h4 class="text-terciary text-mobile-h4 lg:text-mobile-h4 font-bold mb-5 sm:mb-16 md:text-desktop-h4">{{press.title}}</h4>
                <p class="md:text-desktop-body text-grey-40">{{press.date}}</p>
                <p class="mb-5 sm:mb-20 lg:mb-16 md:text-desktop-body text-grey-400 h-72 lg:h-56 overflow-auto">{{press.shortDescription}}</p>
            </div>
        </div>
        <div>
          <app-button
            type="arrow"
            class="flex self-end items-center text-secondary text-mobile-h3 sm:text-desktop-h3 mt-24 sm:mt-48 ml-auto"
          >
          </app-button>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton'
export default {
  data () {
    return {
      showArticles: true,
      numberOfPressCards: 6,
      numberOfArticleCards: 6
    }
  },
  components: {
    AppButton
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    pressReleases: {
      type: Array,
      default: () => []
    },
    mediaUrl: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    areAllPressCardsDisplayed () {
      if(this.numberOfPressCards > this.pressReleases.length) return true
      return false
    },
    areAllArticleCardsDisplayed () {
      if(this.numberOfArticleCards > this.articles.length) return true
      return false
    }
  },
  methods: {
    changeRoute (slug) {
      this.$router.push(`/news/${slug}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    .font-bold {
        font-weight: 700;
    }
    .card-container {
      &:hover {
        .card-container .btn {
          color: #5a5a5ac4;
          font-weight: 900;
        }
      }
    }
</style>