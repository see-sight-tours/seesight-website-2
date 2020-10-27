<template>
  <div
    class="default flex justify-center relative min-h-screen overflow-x-hidden"
  >
    <div class="bg-white default__menu-transition min-w-full">
      <AppHeader />
      <AppNavMessage />
      <Nuxt />
      <AppFooter />
    </div>

    <app-modal />
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppNavMessage from "@/components/shared/AppNavMessage";
import AppModal from "@/components/shared/AppModal";
export default {
  components: {
    AppHeader,
    AppFooter,
    AppNavMessage,
    AppModal
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
