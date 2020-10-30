<template>
  <div class="fixed top-16 left-1/2 translateX-50 flex justify-between items-center w-full max-w-737 bg-white px-16 py-12 rounded-8 shadow-notification z-20">
    <p class="text-secondary mr-16">{{ notificationText }}</p>
    <span class="icon-CLOSE text-grey-40 text-mobile-note md:text-desktop-note cursor-pointer" @click="setIsNotificationVisible(false)" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AppNotification',
  computed: {
    ...mapState({ notificationText: state => state.notificationText })
  },
  created () {
    setTimeout(() => { this.setIsNotificationVisible(false) }, 3000)
  },
  methods: {
    ...mapMutations({ setIsNotificationVisible: 'setIsNotificationVisible' })
  }
}
</script>