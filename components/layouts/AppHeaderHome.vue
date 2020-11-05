<template>
  <header class="header bg-grey-700 fixed top-0 w-full z-11">
    <!-- Desktop header -->
    <div class="hidden lg:flex items-center justify-between max-w-1440 mx-auto py-19 px-40 relative">
      <nuxt-link to="/">
        <img
          v-if="isSearchInputVisible"
          src="@/static/img/logo-mini.svg"
          alt="logo"
          class="h-42 m-auto xl:m-unset">
        <img
          v-else
          src="@/static/img/logo.svg"
          alt="logo"
          class="h-42 m-auto xl:m-unset">
      </nuxt-link>
      <app-input
        v-if="isSearchInputVisible"
        placeholder="Find your city"
        icon="search"
        custom-class="py-1050 border border-grey-10"
        class="flex-1 mx-24 max-w-600"
        @click.native="isSearchPopupOpen = !isSearchPopupOpen" />
      <nav class="header__menu-nav text-terciary text-desktop-h5 leading-1sm flex-1 py-2">
        <ul class="flex justify-end items-center whitespace-pre">
          <li
            v-for="item in menu.menuList"
            :key="item.title"
            class="flex mr-16 list-item">
            <span
              v-if="item.icon"
              class="mr-8"
              :class="[ item.icon ]" />
            <nuxt-link :to="item.route" active-class="is-active" :exact="item.route === '/'" @click.native="setAuthRoute(item.route)">{{ item.title }}</nuxt-link>
          </li>
          <li class="bg-grey-10 w-px h-28 mr-16" />
          <li
            v-for="item in menu.userMenu"
            :key="item.title"
            class="flex items-center mr-16 last:mr-0">
            <span
              v-if="item.icon"
              class="mr-8"
              :class="[ item.icon ]" />
            <nuxt-link v-else :to="item.route" @click.native="setAuthRoute(item.route)">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <ul
        v-if="isOpenUserMenu"
        class="absolute top-65 right-40 bg-white rounded-8 font-normal shadow-dropdown cursor-pointer"
        @click="isOpenUserMenu = false">
        <nuxt-link to="/my-account"><li class="py-16 px-24 text-desktop-h5 leading-1sm border-b border-grey-10">My Account</li></nuxt-link>
        <li class="py-16 px-24 text-desktop-h5 leading-1sm border-b border-grey-10" @click="showModal('currency')">{{ currentCurrency.name }}</li>
        <li class="py-16 px-24 text-desktop-h5 leading-1sm">Log Out</li>
      </ul>
    </div>

    <!-- Mobile header -->
    <div
      class="lg:hidden flex justify-between items-center px-16 py-950"
      :class="[ { 'justify-between': isMenuOpen } ]">
      <button class="leading-0" :class="{'invisible w-0': !isMenuOpen }" @click="$emit('update:isMenuOpen', false)">
        <span class="icon-CLOSE text-grey-40" />
      </button>
      <nuxt-link to="/">
        <img v-show="isSearchInputVisible" src="@/static/img/logo-mini.svg" alt="logo" class="h-29">
        <img v-show="!isSearchInputVisible" src="@/static/img/logo.svg" alt="logo" class="h-29 m-auto xl:m-unset">
      </nuxt-link>
      <app-input
        v-if="isSearchInputVisible"
        placeholder="Find your city"
        icon="search"
        custom-class="py-5 border border-grey-10"
        class="flex-1 ml-8 mr-24"
        @click.native="isSearchPopupOpen = !isSearchPopupOpen" />
      <button class="leading-0" @click="$emit('update:isMenuOpen', true)">
        <span class="icon-MENU" />
      </button>
    </div>

    <!-- Search popup -->
    <div v-if="isSearchPopupOpen" class="fixed min-h-screen top-0 left-0 w-full z-40" @click="isSearchPopupOpen = false" />

    <search-popup v-if="isSearchPopupOpen" :is-search-popup-open.sync="isSearchPopupOpen" class="z-50" />
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppInput from '@/components/shared/AppInput'
import SearchPopup from '@/components/shared/SearchPopup'
export default {
  name: 'Header',
  components: { AppInput, SearchPopup },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      menu: {
        menuList: [
          { title: 'Tours', route: '/tours' },
          { title: 'Our Cities', route: '/cities' },
          { title: 'Our guides', route: '/guides' },
          { title: 'Reviews', route: '/reviews' }
        ],
        userMenu: [
          { title: 'My Tours', route: '/my-tours' },
          { title: 'Sign In', route: '/sign-in', icon: 'icon-USER', event: true }
        ]
      },
      isOpenUserMenu: false,
      isSearchInputVisible: false,
      isSearchPopupOpen: false
    }
  },
  computed: {
    ...mapState({
      searchInputOffsetTop: state => state.searchInputOffsetTop,
      currentCurrency: state => state.currentCurrency,
    })
  },
  watch: {
    isSearchPopupOpen (value) {
      value ? document.body.style.setProperty('overflow', 'hidden') : document.body.style.removeProperty('overflow', 'hidden')
    }
  },
  mounted () {
    this.getPageYOffset()
    document.addEventListener('scroll', () => this.getPageYOffset())
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.getPageYOffset)
  },
  methods: {
    ...mapMutations({
      setModalName: 'setModalName',
      setIsModalOpen: 'setIsModalOpen',
      setAuthRoute: 'auth/setAuthRoute'
    }),
    getPageYOffset () {
      if (window.pageYOffset > this.searchInputOffsetTop) {
        this.isSearchInputVisible = true
      } else {
        this.isSearchInputVisible = false
      }
    },
    showModal (modal) {
      this.setIsModalOpen(true)
      this.setModalName(modal)
    }
  }
}
</script>

<style lang="scss">
.header {
  &__menu-nav {
    .is-active {
      font-weight: 600;
      color: #57B8E8;
    }
    a {
      transition: color 0.5s;
      &:hover {
        color: #87c5e4;
      }
    }
  }
}
</style>