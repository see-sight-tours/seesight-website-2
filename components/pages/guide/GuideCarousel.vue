<template>
    <div class="sm:hidden w-full flex flex-wrap lg:flex-no-wrap justify-end pl-16">
        <cover-flow-carousel type="guides" :slide-items="guides" class="block sm:hidden" :active-index.sync="activeIndex" />
        <div class="block sm:hidden w-full mt-24 pr-16">
        <h3 class="text-terciary text-mobile-h2 leading-2sm font-bold">{{ guides[activeIndex].firstName }}</h3>
        <p v-if="guides[activeIndex].languages.length" class="text-secondary text-mobile-h3 leading-3sm mb-24">
            Languages: <span v-for="language in guides[activeIndex].languages" :key="language.id" class="text-grey-40">{{ language.name }}</span>
        </p>
        <p class="text-terciary text-mobile-body leading-1sm">{{ guides[activeIndex].biography }}</p>
        </div>
    </div>
</template>

<script>
import CoverFlowCarousel from '@/components/pages/CoverFlowCarousel'
export default {
  props: {
    guides: Array,
    activeIndex: Number
  },
  components: {
    CoverFlowCarousel
  }
}
</script>

<style lang="scss" scoped>
</style>