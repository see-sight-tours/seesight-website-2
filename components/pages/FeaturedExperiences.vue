<template>
  <div class="featured-experiences flex flex-col pb-32 md:pb-48 max-w-1220 pr-0 md:pr-30 pl-0 md:pl-30 mx-auto">
    <!-- <tags
      :tags.sync="tags"
      class="pl-16 md:pl-0"
      @changeTab="changeTab" /> -->
    <div class="flex justify-between items-end sm:items-center flex-col sm:flex-row mb-20 md:mb-34 max-w-1120">
      <h2 ref="pageHeader" class="w-full sm:w-auto text-mobile-h3 md:text-desktop-h2 text-terciary font-bold leading-2sm px-16 md:px-0 mb-0">
        Featured Experiences
      </h2>
      <!-- Filters -->
      <div
        v-if="tags[activeIndex].name !== 'Operators' && filterType"
        class="w-full sm:w-auto mt-16 sm:mt-0 px-16 md:px-0">
        <div
          class="flex items-center justify-end">
          <p class="text-grey-400 text-mobile-h5 sm:text-desktop-h5 leading-6sm sm:leading-1sm mr-16">
            Show {{ activeTagName }} in:
          </p>
          <app-select
            v-if="cities"
            :value="selectedItem"
            :items="[{ name: 'All cities' }, ...cities]"
            class="max-w-150"
            @input="value => selectCity(value.id)" />
        </div>
        <!-- <div v-else class="mx-0 sm:mx-24">
          <app-button
            type="tag"
            icon="icon-FILTER"
            class="py-8 pr-16 md:pr-24 md:py-14 leading-normal"
            @click.native="openFilterModal">
            Filters
          </app-button>
        </div> -->
      </div>
    </div>
    <div v-if="items" class="featured-experiences__wrap overflow-x-auto overflow-y-hidden">
      <div class="featured-experiences__scroll inline-block mx-16 lg:mx-0">
        <div class="tour-card-inner flex flex-wrap justify-between lg:justify-start">
          <tour-card
            v-for="tourCardItem in items.slice(0, amount)"
            :key="tourCardItem.id"
            :tour-card-item="tourCardItem" />
        </div>
      </div>
    </div>
    <!-- <div v-if="!filterType && tags[activeIndex].link" class="flex justify-end mt-20 md:mt-48 px-16 md:px-0">
      <a :to="tags[activeIndex].link">
        <app-button type="arrow" class="flex items-center text-secondary">
          <span v-if="isShowMore" @click="showMore">See all {{ tags[activeIndex].name }} ({{ productsAmount }})</span>
          <span v-else @click="showLess">Show Less</span>
          <span class="icon-arrow-bold block text-mobile-note leading-default rotote-0 ml-8" />
        </app-button>
      </a>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import { products, cities } from '@/api/queries'
// import Tags from '@/components/shared/Tags'
// import AppButton from '@/components/shared/AppButton'
// import AppSelect from '@/components/shared/AppSelect'
import TourCard from '@/components/shared/TourCard'
export default {
  name: 'FeaturedExperiences',
  components: {
    TourCard
  },
//   apollo: {
//     cities: {
//       prefetch: true,
//       query: cities
//     }
//   },
  props: {
    filterType: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: Number,
      default: 0
    },
    amount: {
      type: Number,
      required: true
    },
    cityId: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      activeIndex: 0,
      products: [],
      productsAmount: 0,
      city: null,
      isShowMore: true,
      productType: null,
      tags: [
        { name: 'All Things To Do', active: true },
        { name: 'One Day Tours', productType: 'DAYTOUR', link: '/tours', active: false },
        { name: 'Multi Day Tours', productType: 'MULTIDAY', link: '/multi-day-tours', active: false },
        { name: 'Airport Transfer', productType: 'AIRPORTPICKUP', link: '/airport-transfer', active: false }
      ],
      activeTagName: 'All Things To Do',
      selectedItem: { value: '1', name: 'All cities' }
    }
  },
  created () {
    this.changeTab({ index: this.activeTab, productType: this.tags[this.activeTab].productType })
  },
  methods: {
    ...mapMutations({
      setIsModalOpen: 'setIsModalOpen',
      setModalName: 'setModalName'
    }),
    openFilterModal () {
      this.setIsModalOpen(true)
      this.setModalName('multiDaysFilter')
    },
    changeTab ({ index, productType }) {
      this.productType = productType
      this.activeIndex = index
      for (const item of this.tags) { item.active = false }
      this.tags[index].active = true
      this.activeTagName = this.tags[index].name
    //   this.filterProducts()
      this.amount = 9
    },
    showMore () {
      const pageHeader = this.$refs.pageHeader
      this.amount = this.productsAmount
      this.isShowMore = false
      pageHeader.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    },
    showLess () {
      const pageHeader = this.$refs.pageHeader
      this.amount = 9
      this.isShowMore = true
      pageHeader.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    },
    // selectCity (id) {
    //   this.city = id
    //   this.filterProducts()
    // },
    // filterProducts () {
    //   this.productTypeAmount()
    //   this.$apollo.query({ query: products, variables: { city: this.city || this.cityId, productType: this.productType || null } })
    //     .then(({ data }) => { this.products = data.products })
    //     .catch((e) => { throw new Error(e) })
    // },
    // productTypeAmount () {
    //   this.$apollo.query({ query: products, variables: { productType: this.productType || null } })
    //     .then(({ data }) => { this.productsAmount = data.products.length })
    //     .catch((e) => { throw new Error(e) })
    // }
  }
}
</script>

<style lang="scss">
  .featured-experiences {
    &__wrap::-webkit-scrollbar {
      width: 0 !important
    }
    &__scroll {
      min-width: calc(100% - 32px);
    }
  }
  .vue-slider-dot-tooltip .vue-slider-dot-tooltip-top {
    visibility: visible;
  }
  .vue-slider-dot-tooltip-inner-bottom {
    &::after {
      display: none;
    }
  }
</style>
