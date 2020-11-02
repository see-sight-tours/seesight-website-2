<template>
  <div class="py-50 w-full sm:w-3/4 mx-auto text-desktop-h4">
    <h3 class="max-w-264 sm:max-w-full text-mobile-h2 sm:text-desktop-h2 leading-4sm sm:leading-3sm text-terciary mb-24 sm:mb-20 font-bold">{{ blurbTitle }} </h3>
    <p class="leading-8sm">
      {{ blurb }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blurb: {
      type: String,
      default: () => ''
    },
    blurbTitle: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>