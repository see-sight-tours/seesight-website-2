  
<template>
  <div class="">
    <div class="max-w-1180 w-full px-16 md:px-30 mx-auto">
      <h3 class="font-bold mb-30 tracking-wider">About this tours</h3>
      <div class="list flex items-start">
        <img class="w-16 mr-15 mt-5" :src="like" alt="thumb">
        <div>
          <p class="mb-5 font-bold text-mobile-h3 ">Free Cancellation</p>
          <p class="text-mobile-h5 text-grey-400">Cancel up to 24 hours in advance to receive a full refund</p>
        </div>
      </div>
      <div class="list flex items-start mt-20">
        <img class="w-16 mr-15 mt-5" :src="clock" alt="clock">
        <div>
          <p class="mb-5 font-bold text-mobile-h3">Duration </p>
          <p class="text-mobile-h5 text-grey-400">This tour is 4 hours</p>
        </div>
      </div>
      <div class="list flex items-start mt-20">
        <img class="w-16 mr-15 mt-5" :src="wheelchair" alt="thumb">
        <div>
          <p class="mb-5 font-bold text-mobile-h3">Wheelchair accessible</p>
          <p class="text-mobile-h5 text-grey-400">We provide wheelchairs</p>
        </div>
      </div>
      <div class="list flex items-start mt-20">
        <img class="w-16 mr-15 mt-5" :src="shield" alt="thumb">
        <div>
          <p class="mb-5 font-bold text-mobile-h3">Private tour</p>
          <p class="text-mobile-h5 text-grey-400">Cancel up to 24 hours in advance to receive a full refund</p>
        </div>
      </div>
      <div class="list flex items-start mt-20">
        <img class="w-16 mr-15 mt-5" :src="virus" alt="thumb">
        <div>
          <p class="mb-5 font-bold text-mobile-h3">Meets COVID precautions</p>
          <p class="text-mobile-h5 text-grey-400">Cancel up to 24 hours in advance to receive a full refund</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import like from '@/assets/images/svg/like.svg'
import clock from '@/assets/images/svg/clock.svg'
import shield from '@/assets/images/svg/shield.svg'
import wheelchair from '@/assets/images/svg/wheelchair.svg'
import virus from '@/assets/images/svg/virus.svg'
export default {
  computed: {
    like () {
      return like
    },
    clock () {
      return clock
    },
    virus () {
      return virus
    },
    wheelchair  () {
      return wheelchair
    },
    shield () {
      return shield
    }
  }
}
</script>

<style lang="scss" scoped>
</style>