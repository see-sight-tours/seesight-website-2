<template>
  <div class="relative w-full">
    <span
      v-if="icon"
      class="icon-SEARCH absolute w-16 h-16 top-1/2 left-16 md:left-24 translateY-50 text-grey-40" />
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full text-grey-400 pr-16 rounded-8"
      :class="[ icon ? 'pl-56' :'pl-15', customClass ]"
      :value="value"
      :required="required"
      @input="({ target }) => { $emit('input', target.value) }">
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    icon: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    customClass: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 1000
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>