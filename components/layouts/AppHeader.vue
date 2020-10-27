<template>
  <header class="mb-90">
    <!-- Desktop header -->
    <div class="header bg-grey-700 fixed top-0 w-full z-11">
      <div
        class="hidden lg:flex items-center justify-between max-w-1440 mx-auto py-19 px-40 relative"
      >
        <nuxt-link to="/">
          <img
            src="@/static/img/logo-mini.svg"
            alt="logo"
            class="h-42 m-auto xl:m-unset"
          />
        </nuxt-link>
        <app-input
          placeholder="Find you city"
          icon="search"
          custom-class="py-1050 border border-grey-10"
          class="flex-1 mx-24 max-w-600"
          @click.native="isSearchPopupOpen = !isSearchPopupOpen"
        />
        <nav
          class="header__menu-nav text-terciary text-desktop-h5 leading-1sm flex-1 py-2"
        >
          <ul class="flex justify-end items-center whitespace-pre">
            <li
              v-for="item in menu.menuList"
              :key="item.title"
              class="flex mr-16"
            >
              <span v-if="item.icon" class="mr-8" :class="[item.icon]" />
              <nuxt-link
                :to="item.route"
                :exact="item.route === '/'"
                @click.native="setAuthRoute(item.route)"
                >{{ item.title }}</nuxt-link
              >
            </li>
            <li class="flex mr-16">
              <a href="/reviews">Reviews</a>
            </li>
            <li class="bg-grey-10 w-px h-28 mr-16" />
            <li
              v-for="item in menu.userMenu"
              :key="item.title"
              class="flex items-center mr-16 last:mr-0"
            >
              <span v-if="item.icon" class="mr-8" :class="[item.icon]" />
              <nuxt-link
                v-else
                :to="item.route"
                @click.native="setAuthRoute(item.route)"
                >{{ item.title }}</nuxt-link
              >
              <p
                v-if="item.event && !isAuth"
                class="cursor-pointer"
                @click="showModal('login')"
              >
                Sign In
              </p>
              <span
                v-if="item.event && isAuth && user"
                class="font-bold cursor-pointer"
                @click="isOpenUserMenu = !isOpenUserMenu"
                >{{ user.firstName }} {{ user.lastName }}</span
              >
            </li>
          </ul>
        </nav>
        <ul
          v-if="isOpenUserMenu"
          class="absolute top-65 right-40 bg-white rounded-8 font-normal shadow-dropdown cursor-pointer"
          @click="isOpenUserMenu = false"
        >
          <li
            class="py-16 px-24 text-desktop-h5 leading-1sm border-b border-grey-10"
          >
            <nuxt-link to="/my-account">My Account</nuxt-link>
          </li>
          <li
            class="py-16 px-24 text-desktop-h5 leading-1sm border-b border-grey-10"
            @click="showModal('currency')"
          >
            {{ currentCurrency.name }}
          </li>
          <li
            class="py-16 px-24 text-desktop-h5 leading-1sm"
            @click="logoutUser"
          >
            Log Out
          </li>
        </ul>
      </div>

      <!-- Mobile header -->
      <div
        class="lg:hidden flex justify-between items-center px-16 py-950"
        :class="[{ 'justify-between': isMenuOpen }]"
      >
        <button
          class="leading-0"
          :class="{ 'invisible w-0': !isMenuOpen }"
          @click="$emit('update:isMenuOpen', false)"
        >
          <span class="icon-CLOSE text-grey-40" />
        </button>
        <nuxt-link to="/">
          <img
            src="@/static/img/logo-mini.svg"
            alt="logo"
            class="h-29 m-auto xl:m-unset"
          />
        </nuxt-link>
        <app-input
          v-if="!isMenuOpen"
          placeholder="Find you city"
          icon="search"
          custom-class="py-5 border border-grey-10"
          class="flex-1 ml-8 mr-24"
          @click.native="isSearchPopupOpen = !isSearchPopupOpen"
        />
        <button class="leading-0" @click="$emit('update:isMenuOpen', true)">
          <span class="icon-MENU" />
        </button>
      </div>

      <!-- Search popup -->
      <div
        v-if="isSearchPopupOpen"
        class="fixed min-h-screen top-0 left-0 w-full z-40"
        @click="isSearchPopupOpen = false"
      />

      <search-popup
        v-if="isSearchPopupOpen"
        :is-search-popup-open.sync="isSearchPopupOpen"
        class="z-50"
      />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppInput from "@/components/shared/AppInput";
import SearchPopup from "@/components/shared/SearchPopup";
export default {
  name: "Header",
  components: {
    AppInput,
    SearchPopup
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      menu: {
        menuList: [
          { title: "Tours", route: "/tours" },
          { title: "Our Cities", route: "/cities" },
          { title: "Our guides", route: "/guides" }
        ],
        userMenu: [
          { title: "My Tours", route: "/my-tours" },
          {
            title: "Sign In",
            route: "/sign-in",
            icon: "icon-USER",
            event: true
          }
        ]
      },
      isOpenUserMenu: false,
      isSearchPopupOpen: false
    };
  },
  computed: {
    ...mapState({
      currentCurrency: state => state.currentCurrency,
      // isAuth: (state) => state.auth.isAuth,
      user: state => state.auth.user
    })
  },
  watch: {
    isSearchPopupOpen(value) {
      value
        ? document.body.style.setProperty("overflow", "hidden")
        : document.body.style.removeProperty("overflow", "hidden");
    }
  },
  methods: {
    ...mapMutations({
      setModalName: "setModalName",
      setIsModalOpen: "setIsModalOpen",
      setAuthRoute: "auth/setAuthRoute"
    }),
    logoutUser() {
      this.$apolloHelpers.onLogout();
      location.reload();
    },
    showModal(modal) {
      this.setIsModalOpen(true);
      this.setModalName(modal);
    }
  }
};
</script>

<style lang="scss">
.header {
  &__menu-nav {
    .is-active {
      font-weight: 700;
      color: #57b8e8;
    }
  }
}
</style>
