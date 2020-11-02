<template>
    <div class="mt-60 w-3/4 mx-auto">
        <h2 class="w-full sm:w-auto text-mobile-h2 md:text-desktop-h2 text-terciary font-bold leading-2sm px-16 md:px-0 mb-0">News</h2>
        <!-- News Article Containers -->
        <div class="cards-container">
            <div v-for="(article, index) in articles.slice(0, numberOfArticleCards)" :key="index">
              <a
                :href="article.articleUrl"
                target='_blank'
                class="card-container w-3/4 rounded cursor-pointer py-20 mt-30"
            >
                <h4 class="text-terciary text-mobile-h4 lg:text-mobile-h4 font-bold mb-5 sm:mb-16 md:text-desktop-h4">{{article.title}}</h4>
                <p class="md:text-desktop-body text-grey-40">{{`${new Date(article.date)}`.split(" ").splice(1, 3).join(" ")}}</p>
                <p class="mb-5 sm:mb-20 lg:mb-16 md:text-desktop-body text-grey-400">{{article.shortDescription}}</p>
                <button :href="article.articleUrl" class="bg-primary py-5 px-40 rounded text-white font-bold">Learn More</button>
            </a>
            </div>
        </div>
        <app-button
            type="arrow"
            class="flex self-end items-center text-secondary text-mobile-h3 sm:text-desktop-h3 mt-24 sm:mt-48 ml-auto"
          >
        </app-button>
        <!-- Press Release Containers -->
        <h2 class="w-full sm:w-auto text-mobile-h2 md:text-desktop-h2 text-terciary font-bold leading-2sm px-16 md:px-0 mb-0 mt-50">Press Release</h2>
        <div class="cards-container flex flex-wrap mr-20">
            <div v-for="(press, index) in pressReleases.slice(0, numberOfPressCards)" :key="index">
              <div
                  @click="changeRoute(press.slug)"
                  class="card-container w-3/4 rounded cursor-pointer py-20 mt-30"
              >
                  <h4 class="text-terciary text-mobile-h4 lg:text-mobile-h4 font-bold mb-5 sm:mb-16 md:text-desktop-h4">{{press.title}}</h4>
                  <p class="md:text-desktop-body text-grey-40">{{`${new Date(press.date)}`.split(" ").splice(1, 3).join(" ")}}</p>
                  <p class="mb-5 sm:mb-20 lg:mb-16 md:text-desktop-body text-grey-400">{{press.shortDescription}}</p>
                  <button class="bg-primary py-5 px-40 rounded text-white font-bold">Learn More</button>
              </div>
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