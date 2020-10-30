<template>
  <div class="covid-modal max-h-408 overflow-y-auto z-10">
    <div class="covid-modal__container">
      <img
        src="../../static/img/logo-mini.svg"
        class="w-80"
        alt="logo of See Sight Tours"
      />
      <p class="covid-modal__message covid-modal__message--bold">
        As of June 24th, 2020
      </p>
      <p class="covid-modal__message">
        As we begin the process of reopening, you can expect some things to look
        different. Here are the changes we will be making to our tours:
      </p>
      <ul class="covid-modal__list">
        <li
          v-for="protocol in protocols"
          :key="protocol"
          class="covid-modal__list-item"
        >
          {{ protocol }}
        </li>
      </ul>
      <p class="covid-modal__message">
        We may update this list at any time based on recommendations and rules
        from public health agencies, local governments and partners.
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      protocols: [
        "All group tours will now be private - no one else will be on your tour booking except the guide",
        "Guests will be required to wear masks - masks will be provided or you may choose to bring your own",
        "Sanitizer will be provided in our vehicles for all of our tours",
        "Vehicles will be disinfected and cleaned between tour groups",
        "We are reducing the number of passengers allowed per tour ",
        "We ask that guests stay home if they are feeling ill",
        "We will continue to provide refundable tours",
        "Any tours featuring a buffet meal option will be replaced with an alternate restaurant",
        "Contactless tipping options are available (tipping is always optional)",
      ],
    };
  },
  methods: {
    ...mapMutations({
      setModalName: "setModalName",
      setIsModalOpen: "setIsModalOpen",
    }),
  },
};
// <p v-if="item.event && !isAuth" class="cursor-pointer" @click="showModal('login')">Sign In</p>
</script>

<style lang="scss" scoped>
.covid-modal {
  width: 100%;
  height: 100%;
  padding: 1rem;
  &__message {
    margin-top: 0.5rem;
    &--bold {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
  &__list {
    margin-top: 0.5rem;
    padding: 1.5rem;
  }
  &__list-item {
    list-style: circle;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 450px) {
  .covid-modal {
    &__list-item {
      margin-bottom: 0.25rem;
      font-size: 0.7rem;
    }
  }
}
@media only screen and (max-width: 400px) {
  .covid-modal {
    &__message {
      font-size: 0.8rem;
    }
    &__list {
      margin-top: 0.2rem;
      padding: 1rem;
    }
  }
}
</style>