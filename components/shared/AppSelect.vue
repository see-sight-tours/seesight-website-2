<template>
  <div
    class="relative min-w-150 md:min-h-48"
    :class="[type === 'payment' ? 'min-h-48' : 'min-h-32']"
  >
    <div
      v-if="!isSelectOpen"
      class="app-select closed cursor-pointer flex justify-between w-full text-terciary leading-6sm sm:leading-normal rounded-8 py-750 md:py-12"
      :class="{
        'border border-solid border-grey-10 px-16 md:px-24 text-mobile-h5 md:text-desktop-h4':
          type !== 'menuCurrency',
      }"
      @click="isSelectOpen = true"
    >
      <div v-if="type === 'payment'" class="flex items-center py-4 md:py-0">
        <img
          :src="require(`~/static/img/${activeItem.value}-pay.svg`)"
          alt="secure"
          class="cursor-pointer"
        />
        <span class="text-mobile-h3 leading-3sm text-grey-400 pl-16">{{
          activeItem.name
        }}</span>
      </div>
      <span v-else-if="type === 'menuCurrency'" class="pr-10 text-white">{{
        activeItem.name
      }}</span>
      <span v-else-if="type === 'currency'" class="pr-10"
        >Currency: {{ activeItem.name }}</span
      >
      <span v-else class="pr-10 truncate">{{ activeItem.name }}</span>
      <span
        class="absolute top-1/2 right-17 icon-BACK text-mobile-note"
        :class="{ 'text-white': type === 'menuCurrency' }"
      />
    </div>

    <ul
      v-show="isSelectOpen"
      class="select-dropdown w-full absolute left-auto right-0 top-0 bg-white rounded-8 max-h-186 md:max-h-210 overflow-x-auto"
    >
      <li
        v-for="item in items"
        :key="item.value"
        class="item cursor-pointer text-grey-200 text-mobile-h5 leading-6sm py-8 px-16 md:text-desktop-body md:leading-normal md:px-24 md:py-13"
        :class="{
          'border-b border-grey-10 last:border-none': type === 'payment',
        }"
        @click="selectItem(item)"
      >
        <div v-if="type === 'payment'" class="flex items-center py-4 md:py-0">
          <img
            :src="require(`~/static/img/${item.value}-pay.svg`)"
            alt="secure"
            class="cursor-pointer"
          />
          <span class="text-mobile-h3 leading-3sm pl-16 truncate">{{
            item.name
          }}</span>
        </div>
        <span v-else>{{ item.name }}</span>
      </li>
      <li
        v-if="type === 'payment'"
        class="item cursor-pointer text-grey-200 text-mobile-h5 leading-6sm py-8 px-16 md:text-desktop-body md:leading-normal md:px-24 md:py-13"
        :class="{
          'border-b border-grey-10 last:border-none': type === 'payment',
        }"
        @click="selectItem({ name: 'Card pay', value: 'card' })"
      >
        <div v-if="type === 'payment'" class="flex items-center py-4 md:py-0">
          <span
            class="icon-CARD md:text-desktop-h2 text-mobile-h2 leading-3sm"
          />
          <span class="text-mobile-h3 leading-3sm pl-16">Card pay</span>
        </div>
      </li>
    </ul>
    <div
      v-if="isSelectOpen"
      class="fixed min-h-screen top-0 left-0 w-full z-1001"
      @click="isSelectOpen = false"
    />
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isSelectOpen: false,
      activeItem: "",
    };
  },
  created() {
    this.activeItem = this.value;
  },
  methods: {
    selectItem(value) {
      this.$emit("input", value);
      this.isSelectOpen = false;
      this.activeItem = value;
    },
  },
};
</script>

<style lang="scss">
.app-select {
  .icon-BACK {
    transform: translateY(-50%) rotate(-90deg);
  }
}
.select-dropdown {
  min-width: 136px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  min-width: max-content;
  z-index: 1024;
  .item {
    color: #6d6e71;
    &:hover {
      background-color: #fd5d5a;
      color: #ffff;
    }
    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &:last-child {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
}
</style>