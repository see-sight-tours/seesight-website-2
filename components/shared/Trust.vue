<template>
  <div class="mb-12 md:mb-12 border-b border-grey-10">
    <div class="trust-wrap max-w-1180 mx-auto pl-16 py-24 md:py-40 flex justify-between md:px-30 overflow-y-auto">
      <div
        v-for="(advantagesItem, index) in advantagesItems"
        data-aos="flip-left"
        :data-aos-delay="advantagesItem.delay"
        data-aos-once="true"
        @click="triggerModal(advantagesItem.modalMessage)"
        :key="index"
        class="cursor-pointer trust-item flex items-center justify-baseline flex-col  text-center">
        <img :src="advantagesItem.icon" :alt="advantagesItem.alt" v-if="advantagesItem.icon" class="mb-20 w-140 h-64 opacity-75">
        <p v-if="advantagesItem.title" class="text-terciary text-mobile-h5 md:text-desktop-h4 leading-5sm min-w-120 md:min-w-200 mt-auto">{{ advantagesItem.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import tripAdvisor from '@/static/img/trip-advisor.svg'
import googleReview from '@/static/img/reviews/5-star-reviews.png'
import safe from '@/static/img/covid-19.svg'
import moneyBack from '@/static/img/wallet.svg'
export default {
  name: 'Trust',
  data () {
    return {
      advantagesItems: [
        {
          title: 'Safe & Private Tours',
          alt: 'Safety mask',
          icon: safe,
          delay: '250',
          modalMessage: ''
        },
        {
          title: 'Free Cancellation',
          alt: 'Money returned to wallet',
          icon: moneyBack,
          delay: '500',
          modalMessage: 'Full refunds will be provided for guests who cancel at least 24 hours prior to departure time. Cancellations made with less than 24 hours notice will incur a $50 cancellation fee. For guests who are feeling ill, we will accommodate refunds but we ask that out of courtesy you inform us as soon as possible by phone or email.'
        },
        {
          icon: tripAdvisor,
          alt: 'See Sight Tours award by TripAdvisor, best in Canada, 8th in the world',
          title: 'Award Winning Tours',
          delay: '850',
          modalMessage: 'We are very proud to have earned many certificates of excellence over the years. We are also very proud to have been included among the Top 10 Experiences in the world by TripAdvisor.'
        },
        {
          icon: googleReview,
          alt: '5 stars google review',
          title: '5-Star Customer Rated',
          delay: '1100',
          modalMessage: 'More than anything, we take pride in delivering an exceptional customer experience and are proud to have earned many 5-star ratings from guests on places Google, Facebook, TripAdvisor, Viator, Get Your Guide, Expedia and more.'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      setIsModalOpen: 'setIsModalOpen',
      setModalName: 'setModalName',
      setModalText: 'setModalText'
    }),
    triggerModal (modalText) {
      this.setIsModalOpen(true)
      if (modalText) {
        this.setModalName('trustMessage')
        this.setModalText(modalText)
      } else {
        this.setModalName('covidMessage')
      }
    }
  },
  computed: {
    safe: () => safe
  }
}
</script>

<style lang="scss" scoped>
.trust-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  @media (min-width: 376px) and (max-width: 576px) {
    grid-column-gap: 40px;
  }
}
.icon {
  width: 10rem
}
</style>