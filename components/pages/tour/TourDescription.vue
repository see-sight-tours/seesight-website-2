<template>
  <div class="max-w-1180 w-full px-16 md:px-30 mx-auto mb-30">
    <!-- tour description -->
    <div>
      <h3 class="font-bold mt-50 tracking-wider text-desktop-h3">
        Tour description
      </h3>
      <p class="description w-3/4">
        <vue-markdown>{{ longDescription }}</vue-markdown>
      </p>
    </div>
    <!-- tour includes -->
    <div v-if="tourIncludes && tourIncludes.length">
      <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">
        Tour includes
      </h3>
      <ul class="ml-20">
        <li
          v-for="(include, index) in tourIncludes"
          :key="index"
          class="mb-15 list-disc w-3/4"
        >
          {{ include }}
        </li>
      </ul>
    </div>
    <!-- tour information -->
    <div v-if="importantInfo && importantInfo.length">
      <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">
        Important information
      </h3>
      <ul class="ml-20">
        <li
          v-for="(include, index) in importantInfo"
          :key="index"
          class="mb-15 list-disc w-3/4"
        >
          {{ include }}
        </li>
      </ul>
    </div>
    <!-- faq -->
    <div v-if="tourQuestions.length">
      <h3 class="font-bold mt-30 tracking-wider mb-20 text-desktop-h3">
        Frequently asked questions
      </h3>
      <div v-for="(item, index) in tourQuestions" :key="index" class="w-3/4">
        <p class="font-bold mb-10">{{ item.question }}</p>
        <p class="mb-20">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  props: {
    longDescription: {
      type: String,
      default: ""
    },
    tourIncludes: {
      type: Array,
      default: () => []
    },
    importantInfo: {
      type: Array,
      default: () => []
    },
    tourQuestions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      numberOfWords: 125,
      numberOfTourIncludes: 3,
      numberOfImportantInfo: 3,
      numberOfFAQ: 2
    };
  },
  components: {
    VueMarkdown
  },
  computed: {
    // tourIncludesView() {
    //   let tourIncludesView = [...this.tourIncludes];
    //   tourIncludesView = tourIncludesView.splice(0, this.numberOfTourIncludes);
    //   return tourIncludesView;
    // },
    // importantInfoView() {
    //   let importantInfoView = [...this.importantInfo];
    //   importantInfoView = importantInfoView.splice(
    //     0,
    //     this.numberOfImportantInfo
    //   );
    //   return importantInfoView;
    // },
    // FAQView() {
    //   let FAQView = [...this.tourQuestions];
    //   FAQView = FAQView.splice(0, this.numberOfFAQ);
    //   return FAQView;
    // },
    // tourDescriptionView() {
    //   let longDescriptionView = this.longDescription;
    //   longDescriptionView = longDescriptionView
    //     .split(" ")
    //     .splice(0, this.numberOfWords)
    //     .join(" ");
    //   return longDescriptionView;
    // }
  },
  methods: {
    // toggleNumberOfWords() {
    //   if (this.numberOfWords === 125) {
    //     this.numberOfWords = 1000;
    //   } else {
    //     this.numberOfWords = 125;
    //   }
    // },
    // toggleTourInclude() {
    //   if (this.numberOfTourIncludes === 3) {
    //     this.numberOfTourIncludes = 100;
    //   } else {
    //     this.numberOfTourIncludes = 3;
    //   }
    // },
    // toggleTourInformation() {
    //   if (this.numberOfImportantInfo === 3) {
    //     this.numberOfImportantInfo = 100;
    //   } else {
    //     this.numberOfImportantInfo = 3;
    //   }
    // },
    // toggleFAQ() {
    //   if (this.numberOfFAQ === 2) {
    //     this.numberOfFAQ = 100;
    //   } else {
    //     this.numberOfFAQ = 2;
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.description {
  margin-top: -30px;
}
</style>
