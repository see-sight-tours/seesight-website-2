<template>
  <div class="p-50" v-if="pressReleases">
    <h3 class="max-w-264 sm:max-w-full text-mobile-h1 sm:text-desktop-h1 leading-4sm sm:leading-3sm text-terciary mb-24 sm:mb-20 font-bold">{{ findPR().title }}</h3>
    <p class="text-blackOverlay mb-10">{{ findPR().date }}</p>
    <div class="markdown-container w-3/4">
      <p>
        <vue-markdown>{{ findPR().longDescription }}</vue-markdown>
      </p>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { pressReleases } from '@/api/queries/news'
export default {
  data () {
    return {
      pressRelease: {}
    }
  },
  components: {
    VueMarkdown
  },
  apollo: {
    pressReleases: {
      prefetch: true,
      query: pressReleases
    }
  },
  methods: {
    findPR () {
      return this.pressReleases.find((pr) => {
        return pr.slug === this.$route.params.slug
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>