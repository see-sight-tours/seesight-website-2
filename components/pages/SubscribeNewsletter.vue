<template>
  <div class="subscribe-newsletter bg-primary">
    <div class="flex flex-col md:flex-row items-start md:items-center max-w-1180 mx-auto px-16 md:px-30 py-40 md:py-56">
      <div class="max-w-416 mr-40 lg:mr-144">
        <h2 class="leading-4sm text-mobile-h1 sm:text-desktop-h1 font-bold text-white mb-16">
          Subscribe to our newsletter!
        </h2>
        <p class="leading-3sm text-mobile-h3 md:text-desktop-h3 text-white mb-32 md:mb-0">
          Signup to our newsletter and we will make sure to let you know whenever we have news!
        </p>
      </div>
      <form class="flex-1" @submit.prevent="emailSignup">
        <input
          v-model="email"
          type="email"
          placeholder="Your E-mail"
          required
          class="subscribe-newsletter__input mb-38 md:mb-32 text-white leading-3sm text-mobile-h3 md:text-desktop-h4 border-b border-white w-full px-8 pb-12">
        <app-button
          class="px-46 md:px-51 py-10 md:py-9"
          type="stroke"
          :disabled="!email">
          Subscribe
        </app-button>
      </form>
    </div>

    <!-- APP NOTIFICATION -->
    <app-notification v-if="isNotificationVisible" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { mapState, mapMutations } from 'vuex'
// import { emailSignup } from '@/api/mutations'
import AppButton from '@/components/shared/AppButton'
import AppNotification from '@/components/shared/AppNotification'
export default {
  name: 'SubscribeNewsletter',
  components: { AppButton, AppNotification },
//   apollo: {
//     getSiteInfo: {
//       prefetch: true,
//       query: gql`
//         query {
//           getSiteInfo {
//             newsletterSubscribeHeader
//             newsletterSubscribeText
//             newsletterSubscribeButtonText
//           }
//         }
//       `
//     }
//   },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    ...mapState({
      isNotificationVisible: state => state.isNotificationVisible
    })
  },
  methods: {
    ...mapMutations({
      setIsNotificationVisible: 'setIsNotificationVisible',
      setNotificationText: 'setNotificationText'
    }),
    // emailSignup () {
    //   this.$apollo.mutate({ mutation: emailSignup, variables: { email: this.email } })
    //     .then(() => {
    //       this.email = ''
    //       this.setIsNotificationVisible(true)
    //       this.setNotificationText('Success subscribe to our newsletters')
    //     })
    //     .catch((e) => { throw new Error(e) })
    // }
  }
}
</script>

<style lang="scss" scoped>
.subscribe-newsletter {
  &__input {
    background: transparent;
    &::placeholder {
      color: white;
    }
  }
}
</style>