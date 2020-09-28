<template>
  <button
    class="relative whitespace-no-wrap"
    :class="[ buttonStyles, {'pl-40' : icon } ]"
    :disabled="disabled">
    <span
      v-if="icon"
      :class="[ icon ]"
      class="absolute top-1/2 left-16 translateY-50" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonStyles () {
      if (this.type === 'stroke') {
        return 'bg-white text-primary text-desktop-h3 font-bold rounded-8'
      } else if (this.type === 'default') {
        return 'bg-primary text-white font-bold hover:bg-defaultButtonHover'
      } else if (this.type === 'tag') {
        return 'text-mobile-h5 md:text-desktop-h4 text-grey-400 rounded-8 border border-solid border-grey-10 rounded-8'
      } else if (this.type === 'tag-active') {
        return 'text-mobile-h5 md:text-desktop-h4 bg-secondary text-white rounded-8'
      } else if (this.type === 'arrow') {
        return 'text-mobile-h3 md:text-desktop-h3 font-bold rounded-8'
      } else if (this.type === 'info') {
        return 'text-mobile-h3 md:text-desktop-h4 bg-white font-bold text-grey-400 rounded-8'
      } else if (this.type === 'payment') {
        return 'text-mobile-h3 md:text-desktop-h4 hover:bg-defaultButtonHover text-white bg-primary font-bold flex items-center justify-center rounded-8'
      } else {
        return ''
      }
    }
  }
}
</script>