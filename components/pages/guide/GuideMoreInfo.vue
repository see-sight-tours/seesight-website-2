<template>
  <div class="m-10 lg:m-0 w-full h-168 lg:h-240" v-if="guidesRow[indexRow]">
    <div
      ref="guideMoreInformation"
      class="more-information relative flex h-230"
      :class="[isOpenMoreInfo ? 'open sm:max-h-168 lg:max-h-200 2lg:max-h-240 mb-48 max-w-1240 w-full px-16 lg:px-30 mx-auto' : 'closed']"
    >
      <div
        class="sm:w-220 lg:w-300 2lg:w-352 h-full flex-shrink-0"
      >
        <img
          :src="imageURL"
          :alt="guides[activeIndex].photo.altText || 'guides'"
          class="object-cover rounded-8 h-152 lg:h-full w-176 midsm:w-full"
          >
      </div>
      <div class="pl-0 midsm:pl-32">
        <h3 class="text-terciary text-mobile-h2 leading-2sm font-bold">{{ guides[activeIndex].firstName }}</h3>
        <p v-if="guides[activeIndex].languages.length" class="text-secondary text-mobile-h3 leading-3sm mb-10">
          Languages: <span v-for="language in guides[activeIndex].languages" :key="language.id" class="text-grey-40">{{ language.name }}</span>
        </p>
        <div
          class="overflow-y-auto pr-24 sm:h-96 md:h-104 lg:h-180 pd-10"
          :class="[guides[activeIndex].languages.length && '2lg:h-160']"
        >
          <p
            class="text-terciary text-mobile-body leading-5sm"
            :class="[guides[activeIndex].languages.length && 'pb-20']"
          >
            {{ guides[activeIndex].biography }}
          </p>
        </div>
      </div>
      <span class="icon-CLOSE absolute top-10 right-35 cursor-pointer" @click="guidesRow[indexRow] = false" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guidesRow: Object,
    indexRow: Number,
    imageURL: String,
    guides: Array,
    activeIndex: Number,
    isOpenMoreInfo: Boolean
  }
}
</script>

<style lang="scss" scoped>
</style>