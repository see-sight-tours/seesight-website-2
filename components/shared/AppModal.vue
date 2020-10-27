<template>
  <transition name="fade">
    <div
      v-if="isModalOpen"
      class="fixed top-0 right-0 bottom-0 left-0 z-20 bg-modal shadow-modal overflow-y-auto"
    >
      <div
        class="relative bg-white text-terciary md:px-0 rounded-8 pt-24 pb-24 md:pt-40 translate-50 top-1/2 left-1/2"
        :class="[
          { 'w-full md:w-576 max-w-full': modalName === 'multiDaysFilter' },
          { 'w-272 md:w-384 max-w-full': modalName !== 'multiDaysFilter' },
          { 'w-full md:w-650 max-w-full': modalName === 'covidMessage' },
        ]"
      >
        <button
          class="absolute top-16 right-16 flex"
          :class="{ 'hidden sm:block': modalName === 'multiDaysFilter' }"
          @click="closeModal"
        >
          <span
            class="icon-CLOSE text-grey-40 text-desktop-note sm:text-desktop-h5"
          />
        </button>
        <div
          v-if="modalName === 'multiDaysFilter'"
          class="relative flex justify-center bg-grey-700 sm:hidden py-12 items-center mb-16 px-16"
        >
          <p
            class="absolute right-10 block sm:hidden text-secondary cursor-pointer text-mobile-h3 leading-3sm"
          >
            Clear All
          </p>
          <p
            class="text-mobile-h3 text-terciary md:text-desktop-h3 text-center"
          >
            Filters
          </p>
          <button class="absolute left-10 md:w-16" @click="closeModal">
            <span class="icon-CLOSE" />
          </button>
        </div>

        <!-- Login modal -->
        <login v-if="modalName === 'login'" />

        <!-- Sign up modal -->
        <signup v-if="modalName === 'signup'" />

        <!-- Forgot password modal -->
        <forgot-password v-if="modalName === 'forgot'" />

        <!-- New password modal -->
        <new-password v-if="modalName === 'new'" />

        <!-- Change password modal -->
        <change-password v-if="modalName === 'success'" />

        <!-- Select currency modal -->
        <select-currency v-if="modalName === 'currency'" />

        <!-- Multi days filter -->
        <multi-days-filter v-if="modalName === 'multiDaysFilter'" />

        <!-- Reviews filter modal -->
        <reviews-filter v-if="modalName === 'reviewsFilter'" />

        <!-- Trust message -->
        <trust-message v-if="modalName === 'trustMessage'" />

        <!-- Reviews filter modal -->
        <reviews-filter v-if="modalName === 'reviewsFilter'" />
        <!-- Reviews COVID message modal -->
        <covid-message v-if="modalName === 'covidMessage'" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import ReviewsFilter from "@/components/modals/ReviewsFilter";
// import MultiDaysFilter from "@/components/modals/MultiDaysFilter";
// import SelectCurrency from "@/components/modals/SelectCurrency";
// import ChangePassword from "@/components/modals/ChangePassword";
// import ForgotPassword from "@/components/modals/ForgotPassword";
// import NewPassword from "@/components/modals/NewPassword";
// import Login from "@/components/modals/Login";
// import Signup from "@/components/modals/Signup";
// import TrustMessage from "@/components/modals/TrustMessage";
import CovidMessage from "@/components/modals/CovidMessage";
export default {
  name: "AppModal",
  components: {
    // ReviewsFilter,
    // MultiDaysFilter,
    CovidMessage,
    // SelectCurrency,
    // ChangePassword,
    // ForgotPassword,
    // NewPassword,
    // Login,
    // Signup,
    // TrustMessage,
  },
  computed: {
    ...mapState({
      isModalOpen: (state) => state.isModalOpen,
      modalName: (state) => state.modalName,
    }),
  },
  watch: {
    isModalOpen(value) {
      value
        ? document.body.style.setProperty("overflow", "hidden")
        : document.body.style.removeProperty("overflow", "hidden");
    },
  },
  beforeMount() {
    document.addEventListener("keydown", ({ key }) => {
      if (key === "Escape" && this.isModalOpen) {
        this.closeModal();
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.closeModal);
  },
  methods: {
    ...mapMutations({
      setModalName: "setModalName",
      setIsModalOpen: "setIsModalOpen",
    }),
    closeModal() {
      this.setIsModalOpen(false);
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>