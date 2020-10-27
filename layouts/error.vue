<template>
  <div class="container m-auto bg-transition-200 px-24">
    <div class="h-screen flex items-center justify-center flex-col">
      <div class="flex items-center flex-col">
        <p class="flex items-center justify-center sm:text-desktop-error text-mobile-error font-bold text-primary leading-1">{{ error.statusCode }}</p>
        <p class="uppercase text-tarciary font-bold text-md text-center leading-relaxed">{{ error.message }}</p>
      </div>
      <nuxt-link to="/" class="uppercase text-secondary text-md text-center text-primary mt-20">Go to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'empty'
}
</script>