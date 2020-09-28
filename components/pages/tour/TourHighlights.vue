<template>
  <div class="max-w-1180 w-full px-16 md:px-30 mx-auto mb-30">
    <h3 class="font-bold mb-30 tracking-wider">Highlights</h3>
    <ul class="ml-20">
      <li
        v-for="(item, index) in highlights"
        :key="index"
        class="mb-15 list-disc w-3/4"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    highlights: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>