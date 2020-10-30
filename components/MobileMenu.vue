<template>
  <!-- Mobile menu -->
  <nav
    v-if="isMenuOpen"
    class="default__menu-nav min-w-152 text-white ml-24 mb-32 pt-48">
    <ul class="text-mobile-h3 md:text-desktop-h4">
      <li
        v-for="item in menu.menuList"
        :key="item.title"
        class="mb-24 leading-tight">
        <nuxt-link :to="item.route" :exact="item.route === '/'" @click.native="$emit('update:isMenuOpen', false)">{{ item.title }}</nuxt-link>
      </li>
      <li class="h-px bg-white opacity-25 mb-24 leading-tight" />
      <li
        v-for="item in menu.userMenu"
        :key="item.title"
        class="flex items-center mb-24 leading-tight">
        <nuxt-link
          v-if="!item.event"
          :to="item.route"
          :exact="item.route === '/'"
          @click.native="$emit('update:isMenuOpen', false)">
          {{ item.title }}
        </nuxt-link>
      </li>

      <!-- USER SIGN IN -->
      <li class="mb-24 leading-tight">
        <!-- USER ICON -->
        <div v-if="!isAuth" class="flex items-center ">
          <span class="icon-USER mr-8" />
          <p class="cursor-pointer" @click="showModal('login')">Sign In</p>
        </div>
        <!-- USER NAME -->
        <nuxt-link
          v-else
          to="/my-account">
          <span v-if="user">{{ user.firstName }} {{ user.lastName }}</span>
        </nuxt-link>
      </li>

      <!-- USER LOG OUT -->
      <li
        v-if="isAuth"
        class="flex items-center mb-24 leading-tight cursor-pointer"
        @click="logoutUser">
        Log Out
      </li>

      <li
        class="flex items-center mb-28"
        @click="showModal('currency')">
        <span class="text-white text-mobile-h3 leading-3sm">{{ currentCurrency.name }}</span>
        <span class="icon-arrow-medium text-mobile-note ml-8" />
      </li>
      <li>
        <!-- Social media links -->
        <social-media-links :is-footer="true" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SocialMediaLinks from '@/components/shared/SocialMediaLinks'
export default {
  name: 'MobileMenu',
  components: { SocialMediaLinks },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      menu: {
        menuList: [
          { title: 'Home', route: '/' },
          { title: 'Day Tours', route: '/tours' },
          { title: 'Multi Day Tours', route: '/multi-day-tours' },
          { title: 'Discover Cities', route: '/cities' },
          { title: 'Reviews', route: '/reviews' },
          { title: 'TripSheppard', route: '/trip-shepherd' },
          { title: 'About Us', route: '/about' },
          { title: 'Get In Touch', route: '/contact' },
          { title: 'Carreers', route: '/careers' },
          { title: 'Become a partner', route: '/partner' }
        ],
        userMenu: [
          { title: 'My Tours', route: '/my-tours' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      currentCurrency: state => state.currentCurrency,
      user: state => state.auth.user
    })
  },
  methods: {
    ...mapMutations({
      setModalName: 'setModalName',
      setIsModalOpen: 'setIsModalOpen'
    }),
    logoutUser () {
      this.$apolloHelpers.onLogout()
      location.reload()
    },
    showModal (modal) {
      this.setIsModalOpen(true)
      this.setModalName(modal)
    }
  }
}
</script>