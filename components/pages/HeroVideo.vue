<template>
  <div class="wrapper relative overflow-hidden h-520" :class="customClassWrap">
    <div class="featured absolute">
      <video poster="assets/poster.jpg" autoplay="true" muted="true" loop class="absolute h-full w-full">
        <source :src="video" type="video/mp4" />
      </video>
    </div>
    <div class="overlay absolute w-full h-full bg-blackOverlay">
      <div class="search-container w-3/4 absolute" >
        <h1 class="lg:text-desktop-hero md:text-desktop-hero-smaller text-white font-bold leading-7sm mb-0">{{ title }}</h1>
        <h2 class="text-mobile-h3 md:text-desktop-h3 text-white leading-5sm mt-8 mb-0">{{ text }}</h2>
        <app-input
          placeholder="Find your city"
          icon="search"
          class="max-w-880 mt-40"
          custom-class="py-11 sm:py-16 text-mobile-body sm:text-desktop-h3"
          v-if="search"
          @click.native="isSearchPopupOpen = !isSearchPopupOpen"
        ></app-input>
      </div>
    </div>
      <transition name="fade">
        <div v-if="isSearchPopupOpen" class="">
          <div class="fixed w-full z-40" @click="isSearchPopupOpen = false" />
          <search-popup :is-search-popup-open.sync="isSearchPopupOpen" class="z-50" />
        </div>
      </transition>
  </div>
</template>

<script>
import AppInput from '@/components/shared/AppInput'
import SearchPopup from '@/components/shared/SearchPopup'
export default {
  name: 'Hero',
  data () {
    return {
      isSearchPopupOpen: false
    }
  },
  props: {
    search: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => ''
    },
    video: {
      type: String,
      default: () => ''
    },
    customClassWrap: {
      type: String,
      default: () => ''
    }
  },
  components: {
    SearchPopup,
    AppInput
  }
}
</script>

<style scoped>
  .featured {
    width: 100%;    /*  video width / height  */
    height: 56vw;   /*  video height / width  */
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  video {
    top: 0;
    left: 0;
  }
  .overlay {
    top: 0%;
    left:0%;
  }
  .search-container {
    top: 25%;
    left: 10%
  }
  /* Transition Animations */
  .fade-enter {
    opacity: 0
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
</style>