<template>
  <div v-if="questions">
    <h2 class="w-full text-mobile-h3 lg:text-desktop-h2 text-terciary font-bold border-b border-grey-800 pb-12 md:pb-15 mb-24 md:mb-40">
      FAQ’s Tour Content
    </h2>
    <app-accordion :default-open="0">
      <app-accordion-item
        v-for="(item, index) in questions.splice(0, 10)"
        :key="index"
        :index="index"
        collapse-icon="arrow-icon"
        class="pb-32 md:pb-40 last:pb-0">
        <template v-slot:title>
          <h4 class="text-mobile-h3 md:text-desktop-h2 leading-3sm md:leading-2sm font-bold pr-20 md:pr-40 mb-0">
            {{ item.question }}?
          </h4>
        </template>
        <p class="text-mobile-h3 md:desktop-h3 leading-3sm md:leading-5sm text-grey-400 text-terciary mt-16">
          {{ item.answer }}
        </p>
      </app-accordion-item>
    </app-accordion>
  </div>
</template>

<script>
import AppAccordion from '@/components/shared/AppAccordion'
import AppAccordionItem from '@/components/shared/AppAccordionItem'
import { questions } from '@/api/queries/faq'
export default {
  name: 'FAQ',
  components: {
    AppAccordion,
    AppAccordionItem
  },
  apollo: {
    questions: {
      prefetch: true,
      query: questions
    }
  }
}
</script>