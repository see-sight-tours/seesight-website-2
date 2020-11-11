<template>
  <div class="tags-scroll overflow-x-auto w-full mb-14">
    <div class="inline-block mb-10">
      <div class="flex items-center">
        <app-button
          v-for="(item, index) in tags"
          :key="index"
          :type="item.active ? 'tag-active' : 'tag'"
          class="px-12 md:px-24 py-8 md:py-10 mr-16 md:mr-24 md:last:mr-0"
          @click.native="
            $emit('changeTab', { index, productType: item.productType })
          "
        >
          <p class="capitalize" >{{ item.title }}</p>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/shared/AppButton";
export default {
  name: "Tags",
  components: {
    AppButton,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.tags-scroll {
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  &::-webkit-scrollbar-thumb {
    height: 1px !important;
    background: rgba(0, 128, 0, 0) !important;
  }
}
</style>