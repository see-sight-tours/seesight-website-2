<template>
  <div class="bg-cover bg-center bg-no-repeat px-16 sm:px-30" :class="customClassWrap" :style="style">
    <div class="flex flex-col max-w-1120 mx-auto">
      <h1 class="text-mobile-h1 md:text-desktop-hero text-white font-bold leading-7sm mb-0">{{ alternativeTitle ? alternativeTitle : title }}</h1>
      <h2 class="text-mobile-h3 md:text-desktop-h3 text-white leading-5sm mt-8 mb-0">{{ text }}</h2>
      <div v-if="search" class="mt-16 md:mt-40">
        <app-input
          ref="searchInput"
          class="max-w-640"
          custom-class="py-11 sm:py-16 text-mobile-body sm:text-desktop-h3"
          placeholder="Find your city"
          icon="search"
          @click.native="isSearchPopupOpen = !isSearchPopupOpen" />
      </div>
      <div v-if="location" class="flex items-center justify-end" :class="customClassLocation">
        <span class="icon-PIN text-white mr-7" />
        <span class="text-white leading-1sm">{{ location }}</span>
      </div>
    </div>

    <!-- Search popup -->
    <div v-if="isSearchPopupOpen" class="fixed min-h-screen top-0 left-0 w-full z-40" @click="isSearchPopupOpen = false" />

    <search-popup v-if="isSearchPopupOpen" :is-search-popup-open.sync="isSearchPopupOpen" class="z-50" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInput from '@/components/shared/AppInput'
import SearchPopup from '@/components/shared/SearchPopup'
export default {
  name: 'Hero',
  components: {
    SearchPopup,
    AppInput
  },
  props: {
    title: {
      type: String,
      default: () => ''
    },
    alternativeTitle: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => ''
    },
    image: {
      type: Object,
      default: () => {}
    },
    search: {
      type: Boolean,
      required: false
    },
    location: {
      type: String,
      default: () => ''
    },
    height: {
      type: String,
      default: () => ''
    },
    customClassWrap: {
      type: String,
      default: ''
    },
    customClassLocation: {
      type: String,
      default: ''
    },
    alternativeTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isSearchPopupOpen: false
    }
  },
  computed: {
    ...mapState({
      mediaUrl: state => state.mediaUrl
    }),
    style () {
      return {
        backgroundImage:
          this.image
            ? `linear-gradient(
            hsla(230, 30%, 70%, 0.45),
            hsla(220, 20%, 50%, 0.55) 25% 55%, 
            hsla(230, 30%, 70%, 0.45)
          ), url(${this.mediaUrl}t_header/${this.image.desktopUrl.trim()})`
            : `linear-gradient( 
            hsla(230, 50%, 90%, 0.25),
            hsla(220, 30%, 50%, 0.47) 25% 55%, 
            hsla(230, 50%, 90%, 0.25)
          ), url(${require('@/static/img/no-image.png')})`,
        height: this.height
      }
    }
  },
  watch: {
    isSearchPopupOpen (value) {
      value ? document.body.style.setProperty('overflow', 'hidden') : document.body.style.removeProperty('overflow', 'hidden')
    }
  },
  mounted () {
    if (this.$refs.searchInput) {
      this.setSearchInputOffsetTop(this.$refs.searchInput.$el.offsetTop)
    }
  },
  beforeDestroy () {
    document.body.style.removeProperty('overflow', 'hidden')
  },
  methods: {
    ...mapMutations({ setSearchInputOffsetTop: 'setSearchInputOffsetTop' })
  }
}
</script>