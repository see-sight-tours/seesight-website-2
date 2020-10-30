<template>
  <div v-if="newsPage">
  <news-header
      :title="newsPage.title"
      :sub-title="newsPage.subTitle"
      :image="newsPage.headerImage"
      :media-url="mediaUrl"
    />

    <div class="max-w-1440 mx-auto">
      <news-blurb
        :blurb="newsPage.blurb"
        :blurb-title="newsPage.blurbTitle"
      />

      <news-feature-bar
        :logos="newsPage.featuredInLogos"
        :media-url="mediaUrl"
      />
      <news-cards
        :articles="newsPage.articles"
        :press-releases="newsPage.pressReleases"
        :media-url="mediaUrl"
      />

    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NewsHeader from '@/components/pages/news/NewsHeader'
import NewsBlurb from '@/components/pages/news/NewsBlurb'
import NewsFeatureBar from '@/components/pages/news/NewsFeatureBar'
import NewsCards from '@/components/pages/news/NewsCards'
import { newsPage } from '@/api/queries/news'
export default {
  components: {
    NewsHeader,
    NewsBlurb,
    NewsFeatureBar,
    NewsCards
  },
  computed: {
    ...mapState({ mediaUrl: state => state.mediaUrl })
  },
  apollo: {
    newsPage: {
      prefetch: true,
      query: newsPage
    }
  }
}
</script>

<style lang="scss" scoped>
</style>