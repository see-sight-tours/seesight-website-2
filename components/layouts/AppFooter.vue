<template>
  <div class="footer flex flex-col flex-wrap 2lg:flex-no-wrap md:flex-row justify-between px-16 lg:px-50 py-40 md:py-72 max-w-1440 mx-auto">
    <div class="flex flex-col mb-40 md:px-20 md:w-1/2 2lg:w-full">
      <div>
        <img src="@/static/img/logo.svg" alt="logo" class="w-225 mb-16">
        <div class="flex flex-col text-left text-grey-40 text-mobile-body md:text-desktop-body md:pb-24">
          <p>Copyright © 2019 See Sight Tours.</p>
          <p>All rights reserved.</p>
          <p>Privacy Policy</p>
        </div>
        <app-select
          :value="currentCurrency"
          type="currency"
          class="hidden md:block max-w-277"
          :items="currency"
          @input="c => setCurrentCurrency(c)" />
      </div>
    </div>
    <div class="footer__menu md:px-20 md:w-1/2 2lg:w-full">
      <p class="text-mobile-h3 md:text-desktop-h3 text-terciary font-bold pb-16">Book your Tour</p>
      <ul class="footer__menu-items mb-32">
        <li
          v-for="item in bookTourItems"
          :key="item.title"
          class="item text-grey-400 text-mobile-h3 md:text-desktop-h3 mb-16 last:mb-0 cursor-pointer">
          <nuxt-link :to="item.route" exact>{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="footer__menu md:px-20 md:w-1/2 2lg:w-full">
      <p class="text-mobile-h3 md:text-desktop-h3 text-terciary font-bold pb-16">Menu</p>
      <ul class="footer__menu-items mb-32">
        <li
          v-for="item in menuItems"
          :key="item.title"
          class="item text-grey-400 text-mobile-h3 md:text-desktop-h3 mb-16 last:mb-0 cursor-pointer">
          <nuxt-link :to="item.route" exact>{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="getSiteInfo" class="md:px-20 md:w-1/2 2lg:w-full">
      <p class="text-mobile-h3 md:text-desktop-h3 text-terciary font-bold pb-16">Get in Touch</p>

      <div class="flex flex-col">
        <div class="flex flex-col text-grey-400 text-mobile-h3 md:text-desktop-h3 mb-16">
          <!-- <p class="mb-16">{{ getSiteInfo.contactHours }}</p>
          <p>Toll Free: {{ getSiteInfo.tollFreePhone }}</p>
          <p>Local: {{ getSiteInfo.localPhone }}</p>
          <p>Fax: {{ getSiteInfo.faxNumber }}</p> -->
        </div>
        <div class="text-secondary text-mobile-h3 md:text-desktop-h3 pb-16">
          <!-- <a :href="`mailto:${ getSiteInfo.email }`">{{ getSiteInfo.email }}</a> -->
        </div>
      </div>

      <p class="text-mobile-h3 md:text-desktop-h3 text-terciary font-bold pb-24 md:pb-16">Follow us</p>

      <!-- Social media links -->
      <social-media-links />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import gql from 'graphql-tag'
export default {
  name: 'AppFooter',
  data () {
    return {
      bookTourItems: [
        { title: 'Day Tours', route: '/tours' },
        { title: 'Multi Day Tours', route: '/multi-day-tours' },
        { title: 'Discover Cities', route: '/cities' },
        { title: 'Trip Shepherd', route: '/trip-shepherd' },
        { title: 'FAQs', route: '/faq' },
        { title: 'Reviews', route: '/reviews' }
      ],
      menuItems: [
        { title: 'Blog', route: '/blog' },
        { title: 'About Us', route: '/about' },
        { title: 'Get In Touch', route: '/contact' },
        { title: 'News & Press Releases', route: '/news'},
        { title: 'Careers', route: '/careers' },
        { title: 'Become a Partner', route: '/partner' }
      ]
    }
  },
  computed: {
    ...mapState({
      currency: state => state.currency,
      currentCurrency: state => state.currentCurrency
    })
  },
  methods: {
    ...mapMutations({ setCurrentCurrency: 'setCurrentCurrency' })
  }
}
</script>

<style lang="scss">
.footer{
  &__menu {
    .item {
      .is-active, &:hover {
        color: #57B8E8;
      }
    }
  }
}
</style>