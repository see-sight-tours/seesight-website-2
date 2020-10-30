<template>
  <div :class="{ 'bg-grey-700': index === 1 || index === 2 }">
    <div
      class="max-w-1220 w-full px-16 md:px-30 mx-auto"
      :class="[
        { 'py-40 lg:py-65': index === 0 },
        { 'pt-24 lg:pt-72 pb-0 lg:pb-28': index === 1 },
        { 'pb-24 lg:pb-72 pt-0 lg:pt-28': index === 2 },
      ]"
    >
      <h2
        v-if="aboutUsCardItem.title"
        class="text-mobile-h1 md:text-desktop-h1 text-terciary font-bold mb-16 lg:mb-40 pl-0 lg:pl-20 max-w-3/5 sm:max-w-full"
      >
        {{ aboutUsCardItem.title }}
      </h2>
      <div
        class="flex justify-between items-center lg:items-start"
        :class="[
          { 'flex-col lg:flex-row': index === 0 },
          { 'flex-col-reverse lg:flex-row-reverse': index === 1 },
          { 'flex-col lg:flex-row': index === 2 },
        ]"
      >
        <div class="max-w-full lg:max-w-568 w-full px-0 lg:px-20 mb-40 lg:mb-0">
          <p
            class="text-terciary text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm mt-0 lg:mt-24"
          >
            {{ aboutUsCardItem.desc }}
          </p>
        </div>
        <div class="max-w-full lg:max-w-552 w-full px-0 lg:px-20">
          <img
            :src="aboutUsCardItem.img"
            alt="about-us"
            class="w-full lg:max-w-512 h-193 sm:h-248 rounded-8 object-cover rounded-8"
          />
          <div
            class="mt-15 sm:mt-24 flex justify-end lg:justify-start"
            :class="{ 'mb-30 lg:mb-0': index === 1 }"
          >
            <p>
              <span
                class="icon-PIN text-mobile-body sm:text-desktop-h4 mr-7 sm:mr-8 text-secondary"
              />
            </p>
            <p
              class="text-mobile-body sm:text-desktop-h4 text-grey-40 flex flex-col sm:flex-row"
            >
              {{ aboutUsCardItem.locationTitle }}&nbsp;<nuxt-link
                to="/"
                class="text-blue-200"
                >{{ aboutUsCardItem.locationSubtitle }}</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    aboutUsCardItem: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>