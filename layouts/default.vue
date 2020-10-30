<template>
  <div
    class="default flex justify-center relative min-h-screen overflow-x-hidden"
  >
    <mobile-menu :is-menu-open.sync="isMenuOpen" />
    <div class="bg-white default__menu-transition min-w-full">
      <div class="h-80 bg-primary">
        <component :is="header" :is-menu-open.sync="isMenuOpen" :class="{'rounded-t-8': isMenuOpen}" />
      </div>
      <AppNavMessage />
      <Nuxt />
      <AppFooter />
    </div>

    <app-modal />
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppHeaderHome from "@/components/layouts/AppHeaderHome.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppNavMessage from "@/components/shared/AppNavMessage";
import AppModal from "@/components/shared/AppModal";
import MobileMenu from '@/components/MobileMenu'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    AppHeader,
    AppHeaderHome,
    AppFooter,
    AppNavMessage,
    AppModal
  },
    data () {
    return {
      isMenuOpen: false,
      header: 'app-header-home'
    }
  },
  computed: {
    ...mapState({
      isNotificationVisible: state => state.isNotificationVisible,
      isFooter: state => state.isFooter
    })
  },
  watch: {
    $route (to, from) {
      this.header = to.name === 'index' ? 'app-header-home' : 'app-header'
    }
  },
  created () {
    this.header = this.$route.name === 'index' ? 'app-header-home' : 'app-header'
  }
};
</script>

<style lang="scss">
.default {
  &__menu-nav {
    transform: translateX(100px);

    .is-active {
      font-weight: 700;
    }
  }

  &__translate-scale {
    transform: translateX(100px) scale(0.9);
  }

  &__menu-transition {
    transition: all 0.2s ease;
  }
}
</style>
