<template>
  <transition name="fade">
    <div
      v-if="showMessage"
      class="message fixed w-1000 h-74 flex items-center z-10"
    >
      <div
        class="message__container cursor-pointer flex z-10 rounded"
        @click="showModal('covidMessage')"
      >
        <div
          class="message__icon-container bg-secondaryTransparent flex items-center justify-center"
        >
          <img
            src="../../assets/images/svg/alert.svg"
            alt="exclamation mark"
            class="message__icon w-40"
          />
        </div>
        <div class="message__text-container bg-offWhite relative">
          <p>
            We’re taking steps to protect everyone’s safety on our tours, click
            here to read about our new COVID-19 updates.
          </p>
          <button
            @click.stop="showMessage = false"
            class="message__close-btn z-50 absolute"
          >
            <img
              src="../../assets/images/svg/close.svg"
              class="message__close-icon w-10"
            />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      showMessage: true,
    };
  },
  methods: {
    ...mapMutations({
      setModalName: "setModalName",
      setIsModalOpen: "setIsModalOpen",
    }),
    showModal(modal) {
      this.setIsModalOpen(true);
      this.setModalName(modal);
    },
  },
};
</script>

<style scoped lang="scss">
.message {
  top: 7.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  &__container {
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.301);
    width: 60%;
    margin: 0.25rem auto;
  }
  &__icon-container {
    width: 15%;
  }
  &__text-container {
    width: 85%;
    padding: 0.5rem;
    padding-right: 2rem;
  }
  &__close-btn {
    top: 12.5%;
    right: 2.5%;
    border: 0.05rem solid transparent;
    padding: 0.25rem;
    border-radius: 100%;
    transition: 1s;
    &:hover {
      border-color: rgba(0, 0, 0, 0.582);
    }
  }
}
// MEDIA QUERIES //
@media only screen and (max-width: 700px) {
  .message {
    &__container {
      width: 50%;
    }
  }
}
@media only screen and (max-width: 600px) {
  .message {
    &__container {
      width: 40%;
    }
  }
}
@media only screen and (max-width: 475px) {
  .message {
    &__container {
      width: 35%;
    }
    &__icon-container {
      display: none;
    }
    &__text-container {
      width: 100%;
      font-size: 0.75rem;
    }
  }
}
@media only screen and (max-width: 400px) {
  .message {
    &__container {
      width: 30%;
    }
    &__text-container {
      font-size: 0.5rem;
    }
  }
}
// COVID MESSAGE TRANSITION ANIMATION //
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>